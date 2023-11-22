
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'common/electra_axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatSection from 'electra/components/ChatComponents/chatBox';
import './index.css';
import config from 'common/constants';
import { connect } from 'react-redux';
import Modal from 'electra/components/Games/model'


const shareButtonStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(244, 225, 124, 0.9) 100%)',
    backdropFilter: 'blur(50px)',
    width: 'fit-content',
    height: '20px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px 20px',
    fontWeight: 700,
    cursor:"pointer"
  };

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
    return getFormatedTime(now);
}

function getFormatedTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
}

const ChatBox = ({userData, websocketData}) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const chatWindowRef = useRef(null);
    const token = localStorage.getItem('token');

    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(userData);
    }, [userData]);
      
    const [winModel, SetIsWinModal] = useState(0);

    const closeWinModal = () => {
        SetIsWinModal(0)
    };
    
    
  useEffect(() => {
    if (user && websocketData && websocketData.type === 'gameEnded') {
      const currentUserId =  user.userId;
      const CurrentUserWinner = websocketData.winners.find(winners => winners.userId === currentUserId);

      if (CurrentUserWinner) {
        SetIsWinModal(CurrentUserWinner.winningBonus); // Open the modal if the current user is a winner
      }
    }
  }, [websocketData]);


    useEffect(() => {
        axios.get(config.gameApiUrl + '/get-messages', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            setMessages(response.data.map(msg => ({
                text: msg.message,
                user: msg.sender,
                time: getFormatedTime(new Date(msg.timestamp)),
                type: msg.type
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
                text: jsonObject.message, user: jsonObject.user, time: getCurrentTime(),
                type:jsonObject.type
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

    const shareMessage = async (ogMessage, msgType) => {
        try {
            await axios.post(config.gameApiUrl + '/send-message', {
                message: ogMessage,
                type: msgType
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            let msgString = JSON.stringify({user: user, message: ogMessage, type: msgType});

            socket.emit('message', msgString);

            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }


    const sendMessage = async () => {
        if (message.trim() !== '') {
            await shareMessage(message, '')
        }
    };

    const shareWin = async () => {
        await shareMessage(winModel.toString(), 'win');
        closeWinModal();
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
      };

    return (
        <>
        
        <Modal isOpen={winModel > 0} onClose={closeWinModal}>
            <div>
            <img src={"assets/electra/win-shield.png"}  alt=""  style={{height:"50vh"}}/>
            <div style={shareButtonStyle} onClick={shareWin}>
                    share &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M7.5 0V3C1.5 3 0 6.075 0 10.5C0.78 7.53 3 6 6 6H7.5V9L12 4.26L7.5 0Z" fill="#6D6520"/>
                    </svg>
            </div>
            </div>

        </Modal>
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
                    <input type="text" value={message} className="custom-text-box font-4" placeholder="Type Here..." onChange={handleMessageChange}   onKeyPress={onKeyPress} />
                    <button style={sendButtonStyle} onClick={sendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} style={iconSendButtonStyle} />
                    </button>
                </div>
            </div>
        </div>
        </>

    );
};

const mapStateToProps = (state) => ({
    websocketData: state.websocketReducer.websocketData,
    userData: state.userReducer.userData,
  });
  
  export default connect(mapStateToProps)(ChatBox);





