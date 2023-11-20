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
      fontWeight:"700", color: "white", padding:"1.2em"}}>

          <div style={{width:"100%", textAlign:"center"}} className="font-10">
          contact us
          </div>

          <div style={{width:"100%", textAlign:"left",  marginTop:"1vh", fontWeight:"300"}} className="font-4">
          Welcome to Crapshooter Electro Games Innovations LLP.! We're committed to offering our players the best gaming experience possible. If you have any questions, concerns, or feedback, we're here to help.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Player Support:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh", fontWeight:"300"}} className="font-4">
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Player Support:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh", fontWeight:"300"}} className="font-4">
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Affiliate Partnerships:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh", fontWeight:"300"}} className="font-4">
          Interested in partnering with us? For affiliate inquiries and collaborations, get in touch at [affiliates@yourigamingwebsite.com](mailto:affiliates@yourigamingwebsite.com).
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Marketing &amp; Promotions:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh", fontWeight:"300"}} className="font-4">
          Experiencing issues or have questions about a game? Email our dedicated player support team at [support@yourigamingwebsite.com](mailto:support@yourigamingwebsite.com) or reach us via live chat for real-time assistance.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Feedback:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh", fontWeight:"300"}} className="font-4">
          We're always looking to improve! If you have suggestions or feedback, share them with us at [feedback@yourigamingwebsite.com](mailto:feedback@yourigamingwebsite.com).
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", marginTop:"2vh", fontWeight:"700"}} className="font-6">
          Chat With Us:
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1em", marginTop:"0.3vh",marginBottom:"2vh", fontWeight:"300"}} className="font-4">
          For instant assistance, click on our Live Chat button available at the bottom right of our site.
          </div>

          <div style={{width:"100%", textAlign:"left", fontSize:"1.2em", fontWeight:"700", display: "inline"}} className="font-6">
          Please note:

            <span style={{width:"100%", textAlign:"left", fontSize:"1em", marginLeft:"10px", fontWeight:"300"}} className="font-4">
            We encourage responsible gaming. If you believe you may have a gaming-related problem, please reach out for guidance and support.
            </span>
          </div>



      </div>
    </div>
  );
};

export default GameComponent;
