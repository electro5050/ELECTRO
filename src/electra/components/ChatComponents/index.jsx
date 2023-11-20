
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatSection from 'electra/components/ChatComponents/chatBox';
import './index.css';
import config from 'common/constants';

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
        fetch(config.gameApiUrl + '/users', {
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

        axios.get(config.gameApiUrl + '/get-messages', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            setMessages(response.data.map(msg => ({
                text: msg.message,
                user: msg.sender,
                time: new Date(msg.timestamp).toLocaleTimeString(),
                type: 'received'
            })));
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    }, [token]);

    const socket = useRef(io(config.chatSocketUrl, {
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 10000,
    })).current;

    useEffect(() => {
        socket.on('message', (msg) => {
            // Add logic to prevent adding message if it's sent by the same user
            let jsonObject = JSON.parse(msg);
            setMessages(prevMessages => [...prevMessages, {
                text: jsonObject.message, user: jsonObject.user, time: getCurrentTime()
            }]);
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
                await axios.post(config.gameApiUrl + '/send-message', {
                    message
                }, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                let msgString = JSON.stringify({user: JSON.parse(localStorage.getItem('user')), message: message});

                socket.emit('message', msgString);

                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="game-chat-main" style={{ height: "100%", width:"100%" }}>
            <div className="game-chat-box" style={{ overflowY: "auto", height: "80%", background: "rgba(0, 0, 0, 0.80)", padding: "1vh" }} ref={chatWindowRef}>
                <div className="game-chat-header" style={{ marginBottom: "10px" }}>
                    <span style={{ color: "#FBF4B6", fontWeight: "bold", fontFamily: "sans-serif" }} className="font-5">
                        Electro Community
                    </span>
                    {/* <div style={circleStyle}>
                        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
                    </div> */}
                </div>
                <div>

                    {messages.map((msg, index) => (
                        <ChatSection key={index} chatDetails={{
                            user: msg.user,
                            time: msg.time,
                            message: msg.text,
                            type: msg.type
                        }}/>
                    ))}
                </div>
            </div>
            <div style={{ height: "18%", background: "rgba(0, 0, 0, 0.80)", marginTop: "1%", borderRadius: "5px" }}>
                <div style={{ padding: "10px", display: "flex" }}>
                    <input type="text" value={message} className="custom-text-box font-4" placeholder="Type Here..." onChange={handleMessageChange} />
                    <button style={sendButtonStyle} onClick={sendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} style={iconSendButtonStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;





