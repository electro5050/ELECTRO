
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatSection from 'electra/components/ChatComponents/chatBox';
import './index.css';

// Styles
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
  fontSize: '1.1em',
  color: 'white',
  fontWeight:"900"
};

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
}

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const chatWindowRef = useRef(null);
    const token = localStorage.getItem('token');
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://192.168.29.85:3000/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data && typeof data === 'object') {
                setUser([data]);
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

        axios.get('http://192.168.29.85:3000/get-messages', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            setMessages(response.data.map(msg => ({
                text: msg.message,
                user: msg.sender.name,
                time: new Date(msg.timestamp).toLocaleTimeString(),
                type: 'received'
            })));
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    }, [token]);

    const socket = useRef(io('http://192.168.29.85:3002', {
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 10000,
    })).current;

    useEffect(() => {
        socket.on('message', (msg) => {
            // Add logic to prevent adding message if it's sent by the same user
        });

        return () => {
            socket.off('message');
        };
    }, [socket]);

    useEffect(() => {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, [messages]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = async () => {
        if (message.trim() !== '') {
            try {
                await axios.post('http://192.168.29.85:3000/send-message', {
                    message
                }, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                setMessages(prevMessages => [...prevMessages, {
                    text: message, user: 'sent', time: getCurrentTime()
                }]);
                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="game-chat-main" style={{ height: "100%", width:"100%" }}>
            <div className="game-chat-box" style={{ overflowY: "auto", height: "80%", background: "rgba(27, 27, 27, 0.80)", padding: "1vh" }} ref={chatWindowRef}>
                <div className="game-chat-header" style={{ marginBottom: "10px" }}>
                    <span style={{ color: "#FBF4B6", fontSize: "1em", fontWeight: "bold", fontFamily: "sans-serif" }}>
                        electro community
                    </span>
                    <div style={circleStyle}>
                        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
                    </div>
                </div>
                <div>
                    {messages.map((msg, index) => (
                        <ChatSection key={index} chatDetails={{
                            name: user && user[0] ? user[0].name : 'Loading...',
                            time: msg.time,
                            message: msg.text,
                            type: msg.type
                        }}/>
                    ))}
                </div>
            </div>
            <div style={{ height: "18%", background: "rgba(27, 27, 27, 0.80)", marginTop: "1%", borderRadius: "5px" }}>
                <div style={{ padding: "10px", display: "flex" }}>
                    <input type="text" value={message} className="custom-text-box" placeholder="Type Here..." onChange={handleMessageChange} />
                    <button style={sendButtonStyle} onClick={sendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} style={iconSendButtonStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;





