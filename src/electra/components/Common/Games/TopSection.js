import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Avathar from 'electra/components/Common/AvatharView';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "center"
};

const GameTopSection = ({}) => {

  return (
    <div className="game-view-top-section" style={{height:"15vh"}}>
      <div style={avatharContainerStyle}>
        <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'}/>
        <span style={{paddingLeft:"10px",fontSize: "1vw"}}>
            Hi Mark Antony, welcome back!
        </span>
      </div>
        <div style={{marginTop:"5px"}}>
            <span style={{fontSize: "1.8vw", fontWeight: "700"}}>
                BID AND WIN
            </span>
        </div>
        <div style={{marginTop:"5px"}}>
        <span style={{fontSize: "0.8vw", fontWeight: "400", color:"#FBF4B6"}}>
       Win every  <span style={{color:"#EFCA04"}}>30</span> seconds
      </span>
        </div>


    </div>
  );
};

export default GameTopSection;