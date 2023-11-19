import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import GameChart from 'electra/components/mobile/GameChartMobile';
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

const GameComponent = ({}) => {
  const [data, setData] = useState([]);
  const [ws, setWs] = useState(null);
  const [gameState, setGameState] = useState({
      gameEnded: false,
      endGameMessage: "",
      activeGameButton: ""
  });
  const [authError, setAuthError] = useState(false);
  const [rankingData, setRankingData] = useState([{userId: '653429098a38fa3f2b4ef952', bidAmount: 10, winningBonus: 20},{userId: '653429098a38fa3f2b4ef952', bidAmount: 10, winningBonus: 20},{userId: '653429098a38fa3f2b4ef952', bidAmount: 10, winningBonus: 20},{userId: '653429098a38fa3f2b4ef952', bidAmount: 10, winningBonus: 20}, {userId: '653429098a38fa3f2b4ef952', bidAmount: 10, winningBonus: 20}]);

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


const [winModel, SetIsWinModal] = useState(false);


const closeWinModal = () => {
    SetIsWinModal(false)
};

  return (



    <div className="game-view">

      <GameChart />
      <TopWinnersTable rankingData={rankingData} />

        
      <Modal isOpen={winModel} onClose={closeWinModal}>
            <div>
            <img src={"assets/electra/win-shield.png"}  alt=""  style={{height:"30vh"}}/>
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
