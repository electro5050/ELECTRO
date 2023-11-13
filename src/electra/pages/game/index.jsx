import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headers from 'electra/components/header';
import NavBar from 'electra/components/navbar';
// import Footer from '@components/footer/Footer';
// import heroSliderData from 'assets/fake-data/data-slidergm';
// import Slider from 'components/slider/Slider';
// import Graph from 'components/slider/Graph'
// import TopSeller from 'components/layouts/TopSeller';
// import topSellerData from 'assets/fake-data/data-top-seller'
// import { Modal, Button } from 'react-bootstrap';
// import './index.css';
// import { Container, Row, Col } from 'react-bootstrap';
import GameComponent from 'electra/components/Games'
import Chat from 'electra/components/ChatComponents';
import WinHistoryComponent from 'electra/components/WinHistory'
import PortfolioComponent from 'electra/components/PortFolio'
import ProfileComponent from 'electra/components/Profile'
import TutorialComponent from 'electra/components/Tutorials'
import VIPMembershipComponent from 'electra/components/Membership'
import ContactUsComponent from 'electra/components/ContactUs'
import ReferralComponent from 'electra/components/Referral'


const GamePage = () => {
  const [activeTab, SetTab] = useState('Games');
  const [data, setData] = useState([]);
  const [ws, setWs] = useState(null);
  const [gameState, setGameState] = useState({
      gameEnded: false,
      endGameMessage: "",
      activeGameButton: ""
  });
  const [authError, setAuthError] = useState(false);
  const [rankingData, setRankingData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);



  useEffect(() => {
    const websocket = new WebSocket("ws://192.168.29.85:5000");

    websocket.onopen = () => {
        const token = localStorage.getItem('token');
        if (token) {
            websocket.send(JSON.stringify({ type: 'auth', token: token }));
        }
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received WebSocket message:", event.data);
  
      if (message.type && message.type === 'winners') {
          setRankingData(message.winners);
      } else if (message.gameId) {
          setGameState(prevState => ({ ...prevState, gameId: message.gameId }));
      } else if (message.message) {
          setGameState(prevState => ({
              ...prevState,
              endGameMessage: message.message,
              gameEnded: true,
              gameId: message.gameId
          }));
  
          setData([]);
  
          setTimeout(() => {
              setGameState(prevState => ({
                  ...prevState,
                  gameEnded: false,
                  endGameMessage: ""
              }));
          }, 10000);
      } else {
          // Only update if the message value is different
          if (!data.includes(message.value)) {
              setData(prevData => [...prevData, message.value]);
          }
      }
  };
  

    websocket.onerror = (error) => {
        console.error("WebSocket Error:", error);
    };

    setWs(websocket);

    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        setAuthError(true);
    }

    return () => {
        websocket.close();
    };
},[] )

  const handleLinkClick = (name) => {
    SetTab(name);
  }
    
  
    const backgroundStyle = {
        backgroundImage: `url(/assets/electra/bg1.png)`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        minHeight: "100vh",
      };

      const renderComponent = () => {
        switch (activeTab) {
          case 'Games':
            return <GameComponent />;
          case 'Tutorials':
            return <TutorialComponent />;
          case 'VIP Membership':
            return <VIPMembershipComponent />;
          case 'Portfolio':
            return <PortfolioComponent />;
          // case 'LiveSupport':
          //   return <LiveSupportComponent />;
          case 'Contact us':
            return <ContactUsComponent />;
          case 'Win History':
            return <WinHistoryComponent />;
          case 'Referal':
            return <ReferralComponent />;

          case 'Profile':
            return <ProfileComponent />;

          default:
            return null;
        }
      };

      
  const handleCollapse = () => {
    // Close the user modal
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const [chatStatus, setChatStatus] = useState(true);


  const handleChatToggle = () => {
    // Close the user modal
    setChatStatus((prevchatStatus) => !prevchatStatus);
  };

    return (
        <div style={backgroundStyle} className={`main-game-container ${collapsed ? 'collapse' : ''}`}>
        <div style={{ display: 'flex' }}>
            <div >
                <NavBar handleLinkClick={handleLinkClick} activeTab={activeTab} handleCollapse={handleCollapse}/>
            </div>
            <div style={{width: "85vw"}}>
                <Headers handleLinkClick={handleLinkClick}  selectedHeader={activeTab} gameState={gameState} handleChatToggle={handleChatToggle}/>

                <div style={{display: "flex"}}>

                  <div style={{padding: "1vh", width: chatStatus?"65vw":  "85vw"}}>
                    {renderComponent()}
                  </div>

                  <div style={{width: "20vw", maxHeight:"90vh", display:chatStatus?"block":  "none"}}>
                        <Chat />
                  </div>
                </div>
            </div>
        </div>
       
      </div>
    );
  };

export default GamePage
