import React, { useState, useEffect } from 'react';
import axios from 'common/electra_axios';
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

const Home02 = () => {
    const [data, setData] = useState([]);

    const [authError, setAuthError] = useState(false);
  
      const [showUserModal, setShowUserModal] = useState(false);


        const handleCloseModal = () => {
            // Close the user modal
            setShowUserModal(false);
        };


  const handleLinkClick = (e) => {
    // Show the user modal when a sidebar link is clicked
    const {name} = e.target;

    switch (name){
        case 'Games':
            setShowUserModal('Games Modal Content');
            break;
          case 'Tutorials':
            setShowUserModal('Tutorials Modal Content');
            break;
          case 'VIP Membership':
            setShowUserModal('VIP Membership Modal Content');
            break;
          case 'Portfolio':
            setShowUserModal('Portfolio Modal Content');
            break;
          case 'Live Support':
            setShowUserModal('Live Support Modal Content');
            break;
          case 'Contact us':
            setShowUserModal('Contact Us Modal Content');
            break;
          default:
            setShowUserModal(null);
        }
    
        
    }
    
  
    const backgroundStyle = {
        backgroundImage: `url(/assets/electra/bg.jpg)`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        minHeight: "100vh",
        fontFamily: "Poppins"
      };

    return (
        <div style={backgroundStyle}>
        <div style={{ display: 'flex' }}>
            <div style={{width: "15vw"}}>
                <NavBar handleLinkClick={handleLinkClick} />
            </div>
            <div style={{width: "85vw"}}>
                <Headers handleLinkClick={handleLinkClick}  selectedHeader={"Games"}/>
                <div>
                  coin wallet
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

export default Home02
