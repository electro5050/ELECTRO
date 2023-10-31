import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '30vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const GameComponent = ({}) => {
  
  return (
    <div className="membership-game">
      <TopSection  />
      <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

          <div style={{width:"100%", textAlign:"center", fontSize:"2vw"}}>
            membership coming soon..
          </div>

          <div style={{width:"100%", textAlign:"center", fontSize:"1vw", marginTop:"0.5vh"}}>
          stay tuned...
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"2vw", marginTop:"2vh"}}>
          Want to have early access to VIP Membership?
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"0.5vh"}}>
          here's how you can avail it
          </div>


      </div>
    </div>
  );
};

export default GameComponent;
