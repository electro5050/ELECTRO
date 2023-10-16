const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Use CORS middleware to allow requests from any origin
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3001'],
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
   
  })
);
app.options('*', cors()); // Handle pre-flight requests for all routes


io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('message', (msg) => {
    io.emit('message', msg); // Broadcast the message to all connected clients
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
