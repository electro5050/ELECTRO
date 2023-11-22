import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chat.css';


function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const chatWindowRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);



  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
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
