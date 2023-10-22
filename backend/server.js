const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://192.168.29.85:8000', 'http://192.168.29.85:3002'],
    methods: ['GET', 'POST']
  },
  transports: ['websocket']
});

app.use(
  cors({
    origin: ['http://192.168.29.85:8000', 'http://192.168.29.85:3002'],
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.options('*', cors());

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Add connection error listener
io.on('connect_error', (error) => {
  console.log("Connection Error: ", error);
});

server.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
