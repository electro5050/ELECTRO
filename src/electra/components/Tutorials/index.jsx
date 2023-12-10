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
      {/* <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", overflowX:"hidden"}}>
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


      </div> */}




<div className="container" style={{background:"#252525", backgroundSize: '100% 100%',backgroundposition:'center', backgroundRepeat: 'no-repeat', borderRadius: "1.2vw", height: "55vh",width:"100%", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

          <div style={{width:"100%", textAlign:"left"}} className="font-10">
          HOW TO PLAY THE GAME?
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"0.5vh",}}className="font-6">
          Follow these steps to know how to bid and win
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 1 : Buy coins
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          Here 1 coin has a value of 1$ , buying 100 coins means you have to pay 100$. Use the coins for bidding and earning
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 2 : Select a room to bid either gold or silver
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          you can only bid in one room in a game. However, you can switch the room by analysing the graph at the last 5 seconds of the game
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 3 : Analyse the graph and bar
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          The 2 graphs represents bidders who are bidding against the opposite room, which ever room has higher number of bidders graph will go higher. The bar moves left or right according to the traffic of these 2 rooms. there are 2 bars gold and silver which the represents the gold and silver rooms.
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 4 : 30 Seconds
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          Each bidding has a timeline of 30 seconds and the last 5 seconds no new users or existing users can bid , however users can switch rooms if they are already bid against any rooms.
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 5 : Win or Lose
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          After the 30 seconds the game will end, means this has bidding stoped. if the winning room is gold of the bidders who bid against the room will win and double their coins!. A 10 second gap is provided for each bidding to start. If you win you can withdraw the amount to your account.
          </div>



          


      </div>
    </div>
  );
};

export default GameComponent;
