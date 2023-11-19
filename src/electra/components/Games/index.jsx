import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameChart from 'electra/components/Common/Games/GameChart';
import TopWinnersTable from 'electra/components/Common/Games/TopWinnersTable';
import axios from 'axios';
import Modal from './model'

const shareButtonStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(244, 225, 124, 0.9) 100%)',
    backdropFilter: 'blur(50px)',
    width: 'fit-content',
    height: '20px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px 20px',
    fontWeight: 700
  };


  const exampleRankingData = [
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    // Add more data as needed
  ];

const GameComponent = ({}) => {
  const [data, setData] = useState([]);
  const [ws, setWs] = useState(null);
  const [gameState, setGameState] = useState({
      gameEnded: false,
      endGameMessage: "",
      activeGameButton: ""
  });
  const [authError, setAuthError] = useState(false);
  const [rankingData, setRankingData] = useState(exampleRankingData);


  const [user, setUser] = useState([]);
 
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://192.168.29.85:3000/users', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && typeof data === 'object') {
              setUser(data.id); 
              
          }
      })
      .catch(error => {
          console.error('Error fetching user data:', error);
      });
    }
  }, []);

  useEffect(() => {
    const websocket = new WebSocket("ws://192.168.29.85:5000");// Replace with actual user ID retrieval method
    
    websocket.onopen = () => {
      const token = localStorage.getItem('token');
      if (token) {
        websocket.send(JSON.stringify({ type: 'auth', token: token }));
      }
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received WebSocket message:", event.data);
     
  
  
      if (message.type === 'winners') {
        setRankingData(message.winners);
        console.log("Received winners message:", message)
        const currentUserId = user
        const isCurrentUserWinner = message.winners.some(winners => winners.userId === currentUserId);
        if (isCurrentUserWinner) {
          SetIsWinModal(true); // Open the modal if the current user is a winner
        }
      } else if (message.type === 'valueUpdate') {
        console.log("Received valueUpdate message:", message);
        // Here, handle the value update. You might want to update a state or perform some action
        // For example, if you're tracking the game's progress or other values:
         setData(prevData => [...prevData, message.value]);
      } else if (message.gameId) {
        setGameState(prevState => ({ ...prevState, gameId: message.gameId }));
      } else if (message.message) {
        setGameState(prevState => ({
          ...prevState,
          endGameMessage: message.message,
          gameEnded: true,
          gameId: message.gameId
        }));
  
        setData([]); // Reset data
  
        setTimeout(() => {
          setGameState(prevState => ({
            ...prevState,
            gameEnded: false,
            endGameMessage: ""
          }));
        }, 10000);
      }
    };
  
    websocket.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setAuthError(true); // Handle WebSocket error
    };
  
    setWs(websocket);
  
    return () => {
      websocket.close();
    };
  }, []);
  

const [winModel, SetIsWinModal] = useState(false);


const closeWinModal = () => {
    SetIsWinModal(false)
};

  return (



    <div className="game-view" >
      <TopSection />
      <div style={{  height:"45vh"}}>
      <GameChart />
      </div>

      <TopWinnersTable rankingData={rankingData} />

        
      <Modal isOpen={winModel} onClose={closeWinModal}>
            <div>
            <img src={"assets/electra/win-shield.png"}  alt=""  style={{height:"50vh"}}/>
            <div style={shareButtonStyle}>
                    share &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M7.5 0V3C1.5 3 0 6.075 0 10.5C0.78 7.53 3 6 6 6H7.5V9L12 4.26L7.5 0Z" fill="#6D6520"/>
                    </svg>
            </div>
            </div>

        </Modal>
    </div>
  );
};

export default GameComponent;
