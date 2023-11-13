import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '20vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const GameComponent = ({}) => {

  return (
    <div className="win-history">
      <TopSection  />
      <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", overflowX:"hidden"}}>
      <div className="row" style={{justifyContent: "space-evenly"}}>
        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

           <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

      </div>


      </div>
    </div>
  );
};

export default GameComponent;
