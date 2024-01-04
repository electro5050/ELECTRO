import redis
import asyncio
import websockets
import json
from datetime import datetime, timedelta
from pymongo import MongoClient
from bson.objectid import ObjectId
from websockets.exceptions import ConnectionClosedOK
import ssl

ssl_cert_path = '/etc/letsencrypt/live/gamesocket.electro5050.com/fullchain.pem'
# ssl_cert_path = '../game-socket-python/cert.pem'
# ssl_cert_path = '../game-socket-python/cert.pem'
ssl_key_path = '/etc/letsencrypt/live/gamesocket.electro5050.com/privkey.pem'
# ssl_key_path = '../game-socket-python/key.pem'
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
# ssl_context.load_cert_chain(certfile=ssl_cert_path, keyfile=ssl_key_path, password='abcd')
ssl_context.load_cert_chain(ssl_cert_path, ssl_key_path)

# Redis setup
# redis_url = 'redis://localhost:6379/0'
redis_url = 'redis://electra-0001-001.dw3abo.0001.aps1.cache.amazonaws.com:6379/0'
connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)
pubsub = connection.pubsub()
pubsub.subscribe('game_queue')
active_websockets = set()

# MongoDB setup
mongo_uri = "mongodb://electra:electra5050@docdb-2023-11-21-09-53-39.cluster-cp0ip1rsquov.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"
# mongo_uri = "mongodb+srv://hrelectroweb:electro@cluster0.yru2wau.mongodb.net/?retryWrites=true&w=majority"
mongo_client = MongoClient(mongo_uri, ssl=True)
# mongo_client = MongoClient(mongo_uri, ssl=True, tlsAllowInvalidCertificates=True)

db = mongo_client['test']

users_collection = db['users']
games_collection = db['games']

# Lists
game_history = []
coin_allocations = {}
sitch_sum = {'silver':0, 'gold': 0 }
coin_allocations_lock = asyncio.Lock()

def publish_to_redis(channel, message):
    try:
        print("Publishing message to Redis:", message)
        connection.publish(channel, message)
    except Exception as e:
        print("Error publishing to Redis:", e)

def parse_data(data_string):
    data = json.loads(data_string)
    print(f"Received data from Redis: {data}")
    userId = data.get("userId", None)
    username = data.get("username", None)

    # Check for the "switch" action
    if "action" in data and data["action"] == "switch":
        if userId and userId in coin_allocations:
            old_button_type = coin_allocations[userId]["buttonType"]
            coin_allocations[userId]["buttonType"] = "silver" if old_button_type == "gold" else "gold"
            sitch_sum[old_button_type] += coin_allocations[userId]["value"]
            # new_button_type = coin_allocations[userId]["buttonType"]
            # # Convert userId string to ObjectId
            # userId_obj = ObjectId(userId)
            # # Update the MongoDB users_collection with the new button type/color
            # users_collection.update_one({"_id": userId_obj}, {"$set": {"buttonType": new_button_type}})

        else:
            print(f"User {userId} attempted to switch but isn't in coin_allocations.")

    # Check for the "deductCoins" action
    elif "action" in data and data["action"] == "deductCoins":
        userId_obj = ObjectId(userId)
        deduction_amount = int(data["deductionAmount"])

        result = users_collection.update_one({"_id": userId_obj}, {"$inc": {"coinbalance": -deduction_amount}})
        print(f"Deducted {deduction_amount} coins from user {userId}. {result.modified_count} records modified.")

        updated_balance = users_collection.find_one({"_id": userId_obj})["coinbalance"]
        asyncio.create_task(send_data_to_clients({"type": "balanceUpdate", "userId": userId, "newBalance": updated_balance}))

    # Default behavior if neither "switch" nor "deductCoins" actions are detected
    else:
        if userId and userId not in coin_allocations:
            coin_allocations[userId] = {"buttonType": data["buttonType"], "value": 0, "username": username}
        coin_allocations[userId]["value"] += int(data["coinCount"])
        print(f"Updated user {userId} with new value: {coin_allocations[userId]['value']}.")

async def send_data_to_each_client(data, websocket):
    try:
        await websocket.send(json.dumps(data))
    except websockets.exceptions.ConnectionClosed:
        active_websockets.remove(websocket)

async def send_data_to_clients(data):
    tasks = [send_data_to_each_client(data, websocket) for websocket in active_websockets.copy()]
    await asyncio.gather(*tasks)

def get_winning_color():
    silver_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == "silver")
    gold_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == "gold")

    if(silver_data >  gold_data):
        return 'silver'

    if(silver_data <  gold_data):
        return 'gold'

    silver_count = len([1 for val in coin_allocations.values() if val["buttonType"] == "silver"])
    gold_count = len([1 for val in coin_allocations.values() if val["buttonType"] == "gold"])

    if(silver_count >  gold_count):
        return 'silver'
    return 'gold'

async def getMissingCoinCount(type):
    sum_of_coin = sum(item[type] for item in game_history)
    async with coin_allocations_lock:
        total_coin_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == type)
    return total_coin_data - sum_of_coin + sitch_sum[type]


async def getTotalBid(type):
    async with coin_allocations_lock:
        total_coin_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == type)
    return total_coin_data
    

async def game_cycle():
    global coin_allocations, game_history, sitch_sum

    while True:
        game_history.clear()
        coin_allocations.clear()
        sitch_sum = {'silver':0, 'gold': 0 }

        # Create a new game document
        game_doc = {
            "start_time": datetime.now(),
            "bids": [],
            "winners": []
        }
        inserted_game = games_collection.insert_one(game_doc)
        current_game_id = inserted_game.inserted_id

        # Send the game ID to all connected clients
        game_start_data = {
            "type": "gameStart",
            "gameId": str(current_game_id),
            "startTime": game_doc["start_time"].timestamp()  # Convert datetime to timestamp for JSON serialization
        }
        asyncio.create_task(send_data_to_clients(game_start_data))

        end_time = datetime.now() + timedelta(seconds=30)
        while datetime.now() < end_time:

            prevSilverData = await getMissingCoinCount("silver")
            prevGoldData = await getMissingCoinCount("gold")

            totalSilver = await getTotalBid("silver")
            totalGold = await getTotalBid("gold")
            
            gameHistoryDict = {
                "silver": prevSilverData,
                "gold": prevGoldData,
            }

            game_live_data = {
                "type": "live",
                "gameId": str(current_game_id),
                "chartData": game_history, # Convert datetime to timestamp for JSON serialization,
                "totalSilver": totalSilver,
                "totalGold": totalGold
            }

            game_history.append(gameHistoryDict)
            # await send_data_to_clients(game_live_data)
            asyncio.create_task(send_data_to_clients(game_live_data))
            await asyncio.sleep(1)

        winning_color = get_winning_color()
        winners = []
        if winning_color:
            for userId, data in coin_allocations.items():
                if data['buttonType'] == winning_color:
                    bonus = 2 * data['value']

                    # Convert userId string to ObjectId
                    userId_obj = ObjectId(userId)

                    # Use _id field with ObjectId for the query
                    result = users_collection.update_one({"_id": userId_obj}, {"$inc": {"coinbalance": bonus}})

                    winners.append({
                        "userId":data["username"],
                        "bidAmount": data['value'],
                        "winningBonus": bonus
                    })

        winning_message = {
            "type": "gameEnded",
            "gameId": str(current_game_id),
            "winning_color": winning_color, 
            "winners": winners,             
        }
        game_end_update = {
            "end_time": datetime.now(),
            "winning_color": winning_color,
            "winners": winners,
            "hasEnded": True  # Mark the game as ended
         }

        asyncio.create_task(send_data_to_clients(winning_message))

         
        games_collection.update_one({"_id": current_game_id}, {"$set": game_end_update})

        # Update the game document with end time, winning color, and winners
        game_doc["end_time"] = datetime.now()
        game_doc["winning_color"] = winning_color
        # game_doc["winners"] = winners
        games_collection.update_one({"_id": current_game_id}, {"$set": game_doc})

        # end_message = {"message": "The game has ended. The next game will start in 10 seconds."}
        # game_history.append(end_message)
        # await send_data_to_clients(end_message)

        await asyncio.sleep(10)

async def listen_to_redis():
    while True:
        message = pubsub.get_message()
        if message and message['type'] == 'message':
            async with coin_allocations_lock:
                parse_data(message['data'])
        await asyncio.sleep(0.1)

async def websocket_handler(websocket, path):
    active_websockets.add(websocket)
    try:
        while True:
            # Do nothing here, just keep the connection open
            await asyncio.sleep(1)
    except ConnectionClosedOK:
        pass
        # Handle clean connection closure
    finally:
        active_websockets.remove(websocket)

asyncio.get_event_loop().create_task(listen_to_redis())
asyncio.get_event_loop().create_task(game_cycle())
start_server = websockets.serve(websocket_handler, "0.0.0.0", 5000,ssl=ssl_context, origins=None)
# start_server = websockets.serve(websocket_handler, "0.0.0.0", 5000, origins=None)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


















