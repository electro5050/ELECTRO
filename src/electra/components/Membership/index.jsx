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

const GameComponent = ({isMobile}) => {
  
  return (
    <div className="membership-game">
      {!isMobile && <TopSection  />}
      <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

          <div style={{width:"100%", textAlign:"center"}} className="font-10">
            membership coming soon..
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh"}} className="font-6">
          stay tuned...
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-10">
          Want to have early access to VIP Membership?
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"0.5vh"}} className="font-6">
          here's how you can avail it
          </div>


      </div>
    </div>
  );
};

export default GameComponent;
