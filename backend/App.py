from flask import Flask
from flask_socketio import SocketIO
import random
import time
from threading import Thread

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/")
def main():
    return "Server is running"

def generate_random_numbers():
    for i in range(30):
        random_value = random.choice([0, 1, -1])
        print(f"Random value at second {i+1}: {random_value}")
        socketio.emit("message", f"Random value at second {i+1}: {random_value}", callback=ack)

def ack():
    print("Message was received by the client!")
    time.sleep(1)
    generate_random_numbers()

@socketio.on("start")
def handle_start(msg):
    print(f"Received message: {msg}")
    thread = Thread(target=generate_random_numbers)
    thread.start()

if __name__ == "__main__":
    socketio.run(app, debug=True)
