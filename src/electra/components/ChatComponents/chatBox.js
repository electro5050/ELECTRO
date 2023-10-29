import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo  } from '@fortawesome/free-solid-svg-icons';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "flex-start"
};

const ChatSection = ({chatDetails}) => {


  return (
    <div className="chat-section" style={{overflowY:"auto", height:"100%", marginBottom:"10px"}}>
        <div style={avatharContainerStyle}>
        <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'}/>
        <div style={{paddingLeft:"10px"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems: "end"}}>
                <div style={{fontSize: "0.8vw"}}>
                    {chatDetails.name}
                </div>
                <div style={{marginLeft:"10px", fontSize: "0.5vw"}}>
                    {chatDetails.time}
                </div>
            </div>
            <div style={{fontSize: "0.8vw", background:"#474242", borderRadius:"0.2vw", padding:"5px 10px", marginTop: "5px"}}>
                {chatDetails.message}
            </div>
        </div>  

      </div>
    </div>
  );
};

export default ChatSection;
