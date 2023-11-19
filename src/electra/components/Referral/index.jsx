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

const overlayColor1 = 'rgba(255, 0, 0, 0.5)'; // First overlay color
const overlayColor2 = 'rgba(0, 0, 0, 0.5)';

  const backgroundStyle = {
    background: `url(/assets/electra/referal-bg.jpg), lightgray 50% / cover no-repeat`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '25vh',
    width: '100%',
    borderRadius: '1.5vw',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    position: 'relative', // Set the container's position to relative
  };

  const overlayStyle = {
    content: '',
    background: overlayColor2,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none', // Prevent overlay from blocking interactions
    borderRadius: '1.5vw', // Match the container's border-radius
  };

  const contentStyle = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '60%',
    textAlign: 'left',
    fontSize: '2vw',
    padding: '0.6vw',
    color:"white",
    position: 'absolute',
    display: "flex",
    alignItems: "center"
  };

  const linkStyle = {
    right: 10,
    bottom: 10,
    // width: '100%',
    textAlign: 'right',
    fontSize: '0.6vw',
    padding: '0.6vw',
    color:"white",
    position: 'absolute',
    borderRadius: "1.5vw",
  background: "rgba(0, 0, 0, 0.50)",
  display: "flex",
    alignItems: "center"
  };

const GameComponent = ({}) => {
  
  return (
    <div className="referral">
      <TopSection  />
      <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

        <div style={backgroundStyle}>
              <div style={overlayStyle}></div> {/* Pseudo-element for the overlay */}
              <div style={contentStyle}>
                refer your friends and earn commission up to 100* free coins 1 free coin for a successful referral
              </div>

              <div style={linkStyle}>
              <span style={{marginRight:"10px"}}>https://electro5050.com/i-t05bg5y7-n/ </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
              <path d="M9.66898 12.961V14.4561C9.66898 15.2819 9.01047 15.9512 8.19811 15.9512H2.31462C1.50228 15.9512 0.84375 15.2819 0.84375 14.4561V6.23293C0.84375 5.4072 1.50228 4.73781 2.31462 4.73781H3.78549M8.70166 1H5.25637C4.44403 1 3.78549 1.66939 3.78549 2.49512V11.4659C3.78549 12.2916 4.44403 12.961 5.25637 12.961H11.1399C11.9522 12.961 12.6107 12.2916 12.6107 11.4659V4.91844C12.6107 4.51608 12.4512 4.13071 12.1681 3.84941L9.72995 1.4261C9.45512 1.15295 9.08608 1 8.70166 1Z" stroke="white" stroke-width="1.49512" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>

            </div>


      </div>
    </div>
  );
};

export default GameComponent;
