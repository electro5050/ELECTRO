# import json
# import redis
# import gevent
# from flask import Flask
# from flask_sockets import Sockets

# redis_url = 'redis://localhost:6379/0'
# channel = 'test'

# connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)

# class PubSubListener(object):
#     def __init__(self):
#         self.clients = []
#         self.pubsub = connection.pubsub(ignore_subscribe_messages=False)
#         self.pubsub.subscribe(**{channel: self.handler})
#         self.thread = self.pubsub.run_in_thread(sleep_time=0.001)

#     def register(self, client):
#         self.clients.append(client)

#     def handler(self, message):
#         _message = message['data']

#         if type(_message) != int:
#             self.send(_message)

#     def send(self, data):
#         for client in self.clients:
#             try:
#                 client.send(data)
#             except Exception:
#                 self.clients.remove(client)

# pslistener = PubSubListener()

# app = Flask(__name__)
# sockets = Sockets(app)

# @sockets.route('/echo')
# def echo_socket(ws):
#     pslistener.register(ws)

#     while not ws.closed:
#         gevent.sleep(0.1)

# @app.route('/')
# def hello():
#     return 'Hello World!'

# if __name__ == "__main__":
#     from gevent import pywsgi
#     from geventwebsocket.handler import WebSocketHandler
#     print("Started")
#     server = pywsgi.WSGIServer(('', 5000), app, handler_class=WebSocketHandler)
#     server.serve_forever()
