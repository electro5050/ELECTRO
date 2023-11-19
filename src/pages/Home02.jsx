
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Headers from '../components/header/Headergm';
// import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slidergm';
import Slider from '../components/slider/Slider';
import Graph from '../components/slider/Graph'
import TopSeller from '../components/layouts/TopSeller';
import topSellerData from '../assets/fake-data/data-top-seller'
import { Modal, Button } from 'react-bootstrap';


const Home02 = () => {
    const [data, setData] = useState([]);
    const [ws, setWs] = useState(null);
    const [gameState, setGameState] = useState({
        gameEnded: false,
        endGameMessage: "",
        activeGameButton: ""
    });
    const [authError, setAuthError] = useState(false);
  
      const [showUserModal, setShowUserModal] = useState(false);


        const handleCloseModal = () => {
            // Close the user modal
            setShowUserModal(false);
        };

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
          if (message.message) {
              setGameState({
                  ...gameState,
                  endGameMessage: message.message,
                  gameEnded: true
              });
              
              setData([]);
              
              setTimeout(() => {
                  setGameState({
                      ...gameState,
                      gameEnded: false,
                      endGameMessage: ""
                  });
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
  },[] );

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
    
  

    return (
        <div className='home-1'>
        <Headers handleLinkClick={handleLinkClick} />
        <Slider data={heroSliderData} />
        <Graph
          data={data}
          setAuthError={setAuthError}
          gameState={gameState}
          setGameState={setGameState}
          authError={authError}
        />
        <TopSeller data={topSellerData} />
        <Modal show={showUserModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Modal content goes here */}
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
        </Modal>
      </div>
    );
  };

export default Home02
