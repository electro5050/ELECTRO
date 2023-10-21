import redis
import asyncio
import websockets
import json
from pymongo import MongoClient
from bson.objectid import ObjectId


# Redis setup
redis_url = 'redis://localhost:6379/0'
connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)
pubsub = connection.pubsub()
pubsub.subscribe('test')
active_websockets = set()

# MongoDB setup
mongo_uri = "mongodb+srv://hrelectroweb:electro@cluster0.yru2wau.mongodb.net/database?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true"
mongo_client = MongoClient(mongo_uri, ssl=True)
db = mongo_client['test']

print("Connecting to MongoDB...")


users_collection = db['users']

# Lists
game_history = []
coin_allocations = {}
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
    
    if "action" in data and data["action"] == "switch":
        if userId and userId in coin_allocations:
            old_button_type = coin_allocations[userId]["buttonType"]
            coin_allocations[userId]["buttonType"] = "Red" if old_button_type == "Green" else "Green"
            new_button_type = coin_allocations[userId]["buttonType"]
            print(f"User {userId} switched from {old_button_type} to {new_button_type}.")
        else:
            print(f"User {userId} attempted to switch but isn't in coin_allocations.")
    else:
        if userId and userId not in coin_allocations:
            coin_allocations[userId] = {"buttonType": data["buttonType"], "value": 0}
            print(f"New user {userId} added with button type {data['buttonType']}.")
        coin_allocations[userId]["value"] += int(data["coinCount"])
        print(f"Updated user {userId} with new value: {coin_allocations[userId]['value']}.")

async def send_data_to_clients(data):
    for websocket in list(active_websockets):
        try:
            await websocket.send(json.dumps(data))
        except:
            active_websockets.remove(websocket)

async def game_cycle():
    global coin_allocations, game_history
    
    while True:
        game_history.clear()
        coin_allocations.clear()
        
        end_time = asyncio.get_event_loop().time() + 30
        while asyncio.get_event_loop().time() < end_time:
            async with coin_allocations_lock:
                red_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == "Red")
                green_data = sum(val["value"] for val in coin_allocations.values() if val["buttonType"] == "Green")
            
            result = green_data - red_data
            if result > 0:
                result = 1
            elif result < 0:
                result = -1

            output = {"value": result}
            game_history.append(output)
            await send_data_to_clients(output)
            await asyncio.sleep(1)

        winning_color = "Green" if result == 1 else "Red" if result == -1 else None
        winners = []
        if winning_color:
            for userId, data in coin_allocations.items():
                if data['buttonType'] == winning_color:
                    bonus = 2 * data['value']

                    # Convert userId string to ObjectId
                    userId_obj = ObjectId(userId)
                    
                    # Use _id field with ObjectId for the query
                    result = users_collection.update_one({"_id": userId_obj}, {"$inc": {"coinbalance": bonus}})
                    
                    print(f"Update result for user {userId}: {result.modified_count} records modified.")
                    winners.append({
                   "userId": userId,
                    "bidAmount": data['value'],
                   "winningBonus": bonus
                                        })
                    print(f"Awarded user {userId} with bonus: {bonus}")

        winning_message = {
            "type": "winners",
            "winning_color": winning_color,
            "winners": winners
            
        }
        await send_data_to_clients(winning_message)

        end_message = {"message": "The game has ended. The next game will start in 10 seconds."}
        game_history.append(end_message)
        await send_data_to_clients(end_message)
        
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
    
    for item in game_history:
        print(f"Sending stored data to a new client: {item}")
        await websocket.send(json.dumps(item))
    
    try:
        async for message in websocket:
            pass
    finally:
        active_websockets.remove(websocket)

asyncio.get_event_loop().create_task(listen_to_redis())
asyncio.get_event_loop().create_task(game_cycle())
start_server = websockets.serve(websocket_handler, "0.0.0.0", 5000, origins=None)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()























# import json
# import redis
# import asyncio
# import websockets
# import random
# from datetime import datetime, timedelta

# # Redis server URL and channel name
# redis_url = 'redis://localhost:6379/0'
# channel = 'test'

# # Create a Redis connection
# connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)

# # Create a Pub/Sub object
# pubsub = connection.pubsub(ignore_subscribe_messages=False)

# # Subscribe to the channel
# pubsub.subscribe(channel)

# async def send_random_data(websocket):
#     # Initialize time counter
#     time_count = 0

#     for i in range(60):
#         # Increment time counter by 1 second
#         time_count += 1

#         # Convert time counter to "HH:MM:SS" format
#         formatted_time = str(timedelta(seconds=time_count))

#         # Generate random value
#         random_value = random.choice([0, 1, -1])

#         # Create dictionary object
#         message = {
#             "time": formatted_time,
#             "value": random_value
#         }

#         # Send serialized JSON data through WebSocket
#         await websocket.send(json.dumps(message))

#         # Wait for 1 second before sending next message
#         await asyncio.sleep(1)
    
#     # Close the websocket after sending 60 numbers
#     await websocket.close()

# async def listen_to_redis(websocket):
#     # Continue listening as long as the socket is open
#     while not websocket.closed:
#         item = await asyncio.to_thread(pubsub.get_message)
#         if item and item['type'] == 'message':
#             message = item['data']
#             print(f"Received message: {message}")
#             await websocket.send(message)

# async def main(websocket, path):
#     # Create both tasks to run concurrently
#     sender_task = asyncio.create_task(send_random_data(websocket))
#     redis_task = asyncio.create_task(listen_to_redis(websocket))
    
#     # Await both tasks
#     await sender_task
#     await redis_task

# # Create the WebSocket server
# start_server = websockets.serve(main, "localhost", 5000)

# print("WebSocket server started")
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()













# import json
# import redis
# import asyncio
# import websockets
# import random
# from datetime import datetime, timedelta

# # Redis server URL and channel name
# redis_url = 'redis://localhost:6379/0'
# channel = 'test'

# # Create a Redis connection
# connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)

# # Create a Pub/Sub object
# pubsub = connection.pubsub(ignore_subscribe_messages=False)

# # Subscribe to the channel
# pubsub.subscribe(channel)

# async def main(websocket, path):
#     # Initialize time counter
#     time_count = 0

#     for i in range(60):
#         # Increment time counter by 1 second
#         time_count += 1

#         # Convert time counter to "HH:MM:SS" format
#         formatted_time = str(timedelta(seconds=time_count))

#         # Generate random value
#         random_value = random.choice([0, 1, -1])

#         # Create dictionary object
#         message = {
#             "time": formatted_time,
#             "value": random_value
#         }

#         # Send serialized JSON data through WebSocket
#         await websocket.send(json.dumps(message))

#         # Wait for 1 second before sending next message
#         await asyncio.sleep(1)

#     # for item in pubsub.listen():
#     #     message = item['data']

#     #     # Skip the subscription confirmation message
#     #     if type(message) != int:
#     #         # Deserialize the JSON data from Redis
#     #         message = json.loads(message)
#     #         print(f"Received message: {message}")
            
#     #         # Send the serialized JSON data through the WebSocket
#     #         await websocket.send(json.dumps(message))

# # Create the WebSocket server
# start_server = websockets.serve(main, "localhost", 5000)

# print("WebSocket server started")
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()
