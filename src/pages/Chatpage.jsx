import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://192.168.29.85:3002', { 
  transports: ['websocket'], 
  withCredentials: true,
  reconnectionAttempts: 5, 
  reconnectionDelay: 2000 
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [chatVisible, setChatVisible] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages([...messages, { text: msg, user: 'received' }]);
    });

    // Add error listener
    socket.on('connect_error', (error) => {
      console.error('Connection failed!', error);
    });

  }, [messages]);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div className={`chat-container ${chatVisible ? 'false' : 'open'}`}>
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
