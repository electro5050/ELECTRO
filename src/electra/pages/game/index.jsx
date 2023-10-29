import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headers from 'electra/components/header';
import NavBar from 'electra/components/navbar';
// import Footer from '@components/footer/Footer';
import heroSliderData from 'assets/fake-data/data-slidergm';
import Slider from 'components/slider/Slider';
import Graph from 'components/slider/Graph'
import TopSeller from 'components/layouts/TopSeller';
import topSellerData from 'assets/fake-data/data-top-seller'
import { Modal, Button } from 'react-bootstrap';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import GameComponent from 'electra/components/Games'

const GamePage = () => {
  const [activeTab, SetTab] = useState('Games');

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
          // case 'Tutorials':
          //   return <TutorialsComponent />;
          // case 'VIPMembership':
          //   return <VIPMembershipComponent />;
          // case 'Portfolio':
          //   return <PortfolioComponent />;
          // case 'LiveSupport':
          //   return <LiveSupportComponent />;
          // case 'ContactUs':
          //   return <ContactUsComponent />;
          // case 'WinHistory':
          //   return <WinHistoryComponent />;
          // case 'Referal':
          //   return <ReferalComponent />;
          default:
            return null;
        }
      };

    return (
        <div style={backgroundStyle} className='main-game-container'>
        <div style={{ display: 'flex' }}>
            <div style={{width: "15vw", height:"100vh"}}>
                <NavBar handleLinkClick={handleLinkClick} activeTab={activeTab}/>
            </div>
            <div style={{width: "85vw"}}>
                <Headers handleLinkClick={handleLinkClick}  selectedHeader={activeTab}/>
                <div style={{padding: "1vh", width: "65vw"}}>
                  {renderComponent()}
                </div>

            </div>
        </div>
        {/* <Row>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <NavBar handleLinkClick={handleLinkClick} />
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <Headers handleLinkClick={handleLinkClick} />
            </Col>
        </Row> */}

        {/* <Slider data={[heroSliderData]} /> */}
        {/* <Graph
          data={data}
          setAuthError={setAuthError}
          gameState={gameState}
          setGameState={setGameState}
          authError={authError}
        />
        <TopSeller data={topSellerData} /> */}
        {/* <Modal show={showUserModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p>This is the content of my modal.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant='primary' onClick={handleCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    );
  };

export default GamePage
