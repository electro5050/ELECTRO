import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import King from '../../../assets/vip/king.png'

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
      <div className="container" style={{background:"rgba(0,0,0,.25)", backgroundSize: '100% 100%',backgroundposition:'center', backgroundRepeat: 'no-repeat', borderRadius: "1.2vw", height: "70vh",width:"100%", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>
        <div className='parent-vip'> 
          <div className='chaild-vip'>
            <div className='top-left'>

            </div>
            {/* <div className='top-right'>

            </div> */}

          </div>
          <div className='vip-center'>
            <div className='center-main'>
              <div className='center-first'>
              VIP <img src={King} alt="" style={{width:'7%'}}/>CLUB
              </div>
              

              </div>
               <div className='center-second'>
                <div className='chaild-second'>
                  <div className='vip-text'>Reach Level 2 to to get 10 XP</div>
                  <div className='vip-text'>GET 1 LC On Every level UP</div>
                  <div className='vip-text'>Earn XP on First Deposit</div>
                </div>
              </div>
              <div className='center-third'>
                <div className='chaild-third'>
                  
                </div>
                <div className='chaild-third01'>
                  
                  </div>
              </div>
              <div className='center-lasttop'>
                <div className='chaild-lasttop'>
                  
                </div>
              </div>
              <div className='vip-end'>
                <div className='chaild-end'>
                FAQ about LC
                </div>
              </div>
              <div className='vip-endlast'>

              </div>
            </div>
          
         
        </div>

          


      </div>
    </div>
  );
};

export default GameComponent;