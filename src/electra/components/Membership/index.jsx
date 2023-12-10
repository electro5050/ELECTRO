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
      <div className="container" style={{background:"url(/assets/electra/vip.jpeg)", backgroundSize: '100% 100%',backgroundposition:'center', backgroundRepeat: 'no-repeat', borderRadius: "1.2vw", height: "50vh",width:"100%", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

          <div style={{width:"100%", textAlign:"center"}} className="font-10">
          for becoming a VIP member Purchase coins for
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",color:'gold'}}className="font-10">
          $10000
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"2vh"}} className="font-10">
          get exclusive access to
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",color:'gold'}} className="font-10">
          Gold Level Benefits
          </div>


      </div>
    </div>
  );
};

export default GameComponent;
