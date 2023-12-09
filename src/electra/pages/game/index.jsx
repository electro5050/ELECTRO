import React, { useState, useEffect } from 'react';
import axios from 'common/electra_axios';
import Headers from 'electra/components/header';
import MobileHeaders from 'electra/components/header/mobileHeader';

import BottomNavigation from 'electra/components/mobile/bottomNaviagation';

import NavBar from 'electra/components/navbar';
import MobileMenu from 'electra/components/sidebar/mobile';
import TopSectionMobile from 'electra/components/Common/Games/TopSectionMobile';
// import Footer from '@components/footer/Footer';
// import heroSliderData from 'assets/fake-data/data-slidergm';
// import Slider from 'components/slider/Slider';
// import Graph from 'components/slider/Graph'
// import TopSeller from 'components/layouts/TopSeller';
// import topSellerData from 'assets/fake-data/data-top-seller'
// import { Modal, Button } from 'react-bootstrap';
// import './index.css';
// import { Container, Row, Col } from 'react-bootstrap';
import GameComponent from 'electra/components/Games';
import MobileGameComponent from 'electra/components/Games/mobileGame';

import Chat from 'electra/components/ChatComponents';
import WinHistoryComponent from 'electra/components/WinHistory'
import PortfolioComponent from 'electra/components/PortFolio'
import MobilePortfolioComponent from 'electra/components/PortFolio/Mobile'

import ProfileComponent from 'electra/components/Profile'
import MobileProfileComponent from 'electra/components/Profile/mobile'

import TutorialComponent from 'electra/components/Tutorials'
import MobileTutorialComponent from 'electra/components/Tutorials/Mobile'

import VIPMembershipComponent from 'electra/components/Membership'
import ContactUsComponent from 'electra/components/ContactUs'
import ReferralComponent from 'electra/components/Referral'
import TawkItem from 'electra/components/ChatComponents/tawkItem';
import OrientationLock from 'electra/pages/orientationLock'; 
import GameChart from 'electra/components/Common/Games/GameChart';
import WalletComponent from 'electra/components/wallet';
import { useNavigate } from 'react-router-dom';
import config from 'common/constants';
import {updateUserData} from 'redux/userActionActions';
import { useDispatch  } from 'react-redux';

const GamePage = () => {

  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
      setIsMobile(windowWidth < 768)
    }, [windowWidth]);


  const [activeTab, SetTab] = useState('Wallet');

  const [collapsed, setCollapsed] = useState(false);

  const [isLock, setIslock] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    else{
      fetch(config.gameApiUrl+ '/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(updateUserData(data));   
    })
    .catch(error => {
        navigate('/login');
    });
    }

  },[] );


  const handleLinkClick = (name) => {
    SetTab(name);
  }
    
  
    const backgroundStyle = {
        backgroundImage: `url(/assets/electra/bg1.jpg)`,
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
            return <VIPMembershipComponent  isMobile={false} />;
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

          case 'Wallet':
              return <WalletComponent />;

          default:
            return <GameComponent />;
        }
      };

      const renderMobileComponent = () => {
        switch (activeTab) {
          case 'Games':
            return <MobileGameComponent />;
          case 'Menu':
              return <MobileMenu handleLinkClick={handleLinkClick}/>;

          case 'Chat':
                return  <Chat />;
          case 'Tutorials':
            return <MobileTutorialComponent />;
          case 'VIP Membership':
            return <VIPMembershipComponent isMobile={true} />;
          case 'Portfolio':
            return <MobilePortfolioComponent />;
          // case 'LiveSupport':
          //   return <LiveSupportComponent />;
          case 'Contact us':
            return <ContactUsComponent isMobile={true} />;
          case 'Win History':
            return <WinHistoryComponent isMobile={true} />;
          case 'Referal':
            return <ReferralComponent />;

          case 'Profile':
            return <MobileProfileComponent />;

          default:
            return <MobileGameComponent />;
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

  
  const enterFullScreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  // useEffect(() => {
  //   if (isLock) {
  //     enterFullScreen();
  //   }
  //   else{
  //     exitFullScreen();
  //   }
  // }, [isLock]);

  return (
    <>
      <OrientationLock handleDisable={setIslock} isMobile={isMobile} />
      <TawkItem />
  
      {!isLock ? (
        <>
          {isMobile ? (
            // Render mobile-specific components
            <div style={backgroundStyle} className={`main-game-container ${collapsed ? 'collapse' : ''}`}>
              <MobileHeaders handleLinkClick={handleLinkClick} selectedHeader={activeTab} handleChatToggle={handleChatToggle} />
              <TopSectionMobile handleLinkClick={handleLinkClick}  />
              <div style={{ height: "80vh", maxHeight: "80vh", overflowY: "auto" }}>
                {renderMobileComponent()}
              </div>
              <BottomNavigation handleLinkClick={handleLinkClick} selectedMenu={activeTab} />
            </div>
          ) : (
            // Render desktop-specific components
            <div style={backgroundStyle} className={`main-game-container ${collapsed ? 'collapse' : ''}`}>
              <div style={{ display: 'flex' }}>
                <div>
                  <NavBar handleLinkClick={handleLinkClick} activeTab={activeTab} handleCollapse={handleCollapse} />
                </div>
                <div style={{ width: "85vw" }}>
                  <Headers handleLinkClick={handleLinkClick} selectedHeader={activeTab} handleChatToggle={handleChatToggle} />
                  <div style={{ display: "flex" }}>
                    <div style={{ padding: "1vh", width: chatStatus ? "65vw" : "80vw" }}>
                      {renderComponent()}
                    </div>
                    <div style={{ width: "20vw", maxHeight: "90vh", display: chatStatus ? "block" : "none" }}>
                      <Chat />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : <div style={{...backgroundStyle,  width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", }}>
        

          <div style={{minHeight:"100vh", width:"90vw", height:"100vh"}} >
            <GameChart />
            </div>
        </div>}
    </>
  );
          } 

export default GamePage;
