import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './Index.css';
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
        <div className='mobilevip-parent'>
            <div className='mobilevip-chaild'>
                <div className='mobilechaild-top'>
                    VIP <img src={King} alt="" style={{width:'7%'}}/>CLUB
                </div>
            </div>
            <div className='mobilevip-chaild02'>
                <div className='mobilevip-secondtop'>
                <div className='mobilevip-text'>Reach Level 2 to to get 10 XP</div>

                </div>
            </div>
            <div className='mobilevip-chaild03'>
                <div className='mobilevip-pic'>

                </div>
            </div>
            <div className='mobilevip-chaild04'>
                <div className='mobilevip-pic02'>
                    
                </div>
            </div>
            <div className='mobilevip-chaild05'>
                <div className='mobilevip-pic03'>
                    
                </div>
            </div>
            <div className='mobilevip-chaild06'>
                <div className='mobilevip-pic04'>
                    
                </div>
            </div>
            <div className='mobilevip-chaild07'>
                <div className='mobilevip-pic05'>
                    
                </div>
            </div>
            <div className='mobilevip-chaild08'>
                <div className='mobilevip-pic06'>
                    
                </div>
            </div>

            
        </div>
       

          


      </div>
    </div>
  );
};

export default GameComponent;