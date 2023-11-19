import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chat.css';

// Socket configuration and event listeners
const socket = io('http://192.168.29.85:3002', {
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
  reconnectionDelayMax: 10000,
});

socket.on('connect', () => {
  console.log('Successfully connected to the server!');
});

socket.on('reconnect_failed', () => {
  console.error('Reconnection failed after several attempts.');
});

socket.on('disconnect', (reason) => {
  console.warn('Disconnected. Reason:', reason);
});

socket.on('reconnect', (attemptNumber) => {
  console.log(`Reconnected after ${attemptNumber} attempts.`);
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

socket.on('connect_timeout', (timeout) => {
  console.error('Connection timeout:', timeout);
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const chatWindowRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, user: 'received' }]);
    });
  }, []);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessages((prevMessages) => [...prevMessages, { text: message, user: 'sent' }]);
      setMessage('');
    }
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className={`chat-container ${chatVisible ? 'open' : 'closed'}`}>
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="send" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
