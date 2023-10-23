const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',  // Adjust according to your security needs
    methods: ['GET', 'POST'],
  },
});

app.use(
  cors({
    origin: '*',  // Adjust according to your security needs
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Socket-specific error handler
  socket.on('error', (error) => {
    console.error("Socket-specific Error:", error);
  });

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Global error listeners
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled promise rejection at:', promise, 'reason:', reason);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(3002, '192.168.29.85', () => {
    console.log('Server is running on http://192.168.29.85:3002');
  });
  
