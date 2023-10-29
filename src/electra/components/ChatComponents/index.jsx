import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import ChatSection from 'electra/components/ChatComponents/chatBox';

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
  padding:"7px",
  width: "20%",
  marginLeft:"5px",
  color:"white",
}

const iconSendButtonStyle = {
  fontSize: '1.2vw',
  color: 'white',
  fontWeight:"900"
};

const ChatBox = ({}) => {


  return (
    <div className="game-chat-main" style={{height: "100%"}}>
      <div className="game-chat-box" style={{ overflowY: "auto", height: "80%", background: "rgba(27, 27, 27, 0.80)", padding: "1vh",  }}>
        <div className="game-chat-header" style={{ marginBottom: "10px" }}>
          <span style={{ color: "#FBF4B6", fontSize: "0.8vw", fontWeight: "bold", fontFamily: "sans-serif" }}>
            electro community
          </span>
          <div style={circleStyle}>
            <FontAwesomeIcon icon={faInfo} style={iconStyle} />
          </div>
        </div>
    
        <div>
          {[...Array(20)].map((_, index) => (
            <ChatSection key={index} chatDetails={chatMessageDict} />
          ))}
        </div>
      </div>
      <div style={{height: "18%",  background: "rgba(27, 27, 27, 0.80)", marginTop:"1%", borderRadius: "5px"}}>
            <div style={{padding:"10px"}}>
            <input
                type="text"
                className="custom-text-box"
                placeholder="Type Here..."
              />

              <button  style={sendButtonStyle}>  <FontAwesomeIcon icon={faPaperPlane} style={iconSendButtonStyle} /></button>
            </div>
      </div>
    </div>

  );
  
};

export default ChatBox;
