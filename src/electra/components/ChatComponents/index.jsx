
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import ChatSection from 'electra/components/ChatComponents/chatBox';

const getCurrentTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const circleStyle = {
  width: '15px',
  height: '15px',
  border: "2px solid white",
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  float: "right"
};
const iconStyle = {
  fontSize: '10px',
  color: 'white',
  fontWeight:"900"
};

let chatMessageDict = {
  name:"antony123",
  time:"9:49",
  message:"It’s my lucky day! i won 13 times today, yay"
}

const sendButtonStyle={
  borderRadius: "5px",
  background: "#5357B9",
  border: "1px solid #6E73F6",
  // padding:"5px",
  width: "20%",
  marginLeft:"5px",
  color:"white",
  height:"30px",
  padding: 0
}

const iconSendButtonStyle = {
  fontSize: '0.9vw',
  color: 'white',
  fontWeight:"900"
};


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


const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const chatWindowRef = useRef(null);

  const socket = useRef(io('http://192.168.29.85:3002', {
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 10000,
  })).current;
  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, user: 'received', time: getCurrentTime() }]);
    });

    return () => {
      socket.off('message');
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const timestamp = getCurrentTime();
      socket.emit('message', { text: message, time: timestamp }); // Emitting both message and its time
      setMessages((prevMessages) => [...prevMessages, { text: message, user: 'sent', time: timestamp }]);
      setMessage('');
    }
  };

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  return (
    <div className="game-chat-main" style={{ height: "100%" }}>
      <div 
        className="game-chat-box" 
        style={{ overflowY: "auto", height: "80%", background: "rgba(27, 27, 27, 0.80)", padding: "1vh" }} 
        ref={chatWindowRef}
      >
        <div className="game-chat-header" style={{ marginBottom: "10px" }}>
          <span style={{ color: "#FBF4B6", fontSize: "0.8vw", fontWeight: "bold", fontFamily: "sans-serif" }}>
            electro community
          </span>
          <div style={circleStyle}>
            <FontAwesomeIcon icon={faInfo} style={iconStyle} />
          </div>
        </div>
    
        {messages.map((msg, index) => (
          <ChatSection 
              key={index}
              chatDetails={{
                  name: msg.user,        // Adjust this as per your needs
                  time: msg.time,        // Now displaying the timestamp
                  message: msg.text
              }}
          />
        ))}

      </div>

      <div style={{ height: "18%", background: "rgba(27, 27, 27, 0.80)", marginTop: "1%", borderRadius: "5px" }}>
        <div style={{ padding: "10px", display: "flex" }}>
          <input
            type="text"
            className="custom-text-box"
            placeholder="Type Here..."
            onChange={handleMessageChange}
          />
          <button style={sendButtonStyle} onClick={sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} style={iconSendButtonStyle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
