import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Graph from 'electra/components/Common/Games/Graph';
import GameControllerButtons from 'electra/components/mobile/GameControllerButtons';
import ProgressBar from 'electra/components/Common/Games/ProgressBar';
import axios from 'axios';

const gameChartContainer = {
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.60)",
  boxShadow: "4px 4px 50px 0px #33375F",
  width:"100%",
  padding:"20px",

};

const graphContainerStyle = {
  width: "100%", // Set the width of the container
  height:"25vh", // Set the height of the container
};

const ButtonControllserStyle = {
  width: "100%", // Set the width of the container
  height:"100%", // Set the height of the container
};

const GameChart = () => {


  const [data, setData] = useState([]);
    const [ws, setWs] = useState(null);
    const [gameState, setGameState] = useState({
        gameEnded: false,
        endGameMessage: "",
        activeGameButton: ""
    });
    const [authError, setAuthError] = useState(false);
    const [rankingData, setRankingData] = useState([]);

  
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

  return (
    <div className="game-view-chart" style={gameChartContainer}>
      {/* <div>

      </div> */}
      <div style={graphContainerStyle}>
        <Graph data={data} setAuthError={setAuthError} gameState={gameState} setGameState={setGameState} authError={authError} />
      </div>

      <div style={ButtonControllserStyle}>
       <GameControllerButtons data={data} setAuthError={setAuthError} gameState={gameState} setGameState={setGameState} authError={authError} />
      </div>

    </div>


  );
};

export default GameChart;