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
      fontWeight:"700", color: "white", padding:"1vw"}}>

          <div style={{width:"100%", textAlign:"center", fontSize:"1.5vw"}}>
          contact us
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"1vh", fontWeight:"300"}}>
          Welcome to Crapshooter Electro Games Innovations LLP.! We're committed to offering our players the best gaming experience possible. If you have any questions, concerns, or feedback, we're here to help.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Player Support:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh", fontWeight:"300"}}>
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Player Support:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh", fontWeight:"300"}}>
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Affiliate Partnerships:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh", fontWeight:"300"}}>
          Interested in partnering with us? For affiliate inquiries and collaborations, get in touch at [affiliates@yourigamingwebsite.com](mailto:affiliates@yourigamingwebsite.com).
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Marketing &amp; Promotions:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh", fontWeight:"300"}}>
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Feedback:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh", fontWeight:"300"}}>
          We're always looking to improve! If you have suggestions or feedback, share them with us at [feedback@yourigamingwebsite.com](mailto:feedback@yourigamingwebsite.com).
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", marginTop:"2vh", fontWeight:"700"}}>
          Chat With Us:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginTop:"0.3vh",marginBottom:"2vh", fontWeight:"300"}}>
          For instant assistance, click on our Live Chat button available at the bottom right of our site.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1vw", fontWeight:"700", display: "inline"}}>
          Please note:

            <span style={{width:"100%", textAlign:"left", fontSize:"0.8vw", marginLeft:"10px", fontWeight:"300"}}>
            We encourage responsible gaming. If you believe you may have a gaming-related problem, please reach out for guidance and support.
            </span>
          </div>



      </div>
    </div>
  );
};

export default GameComponent;
