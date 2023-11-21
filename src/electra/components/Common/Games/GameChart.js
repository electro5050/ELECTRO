import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Graph from 'electra/components/Common/Games/Graph';
import GameControllerButtons from 'electra/components/Common/Games/GameControllerButtons';
import ProgressBar from 'electra/components/Common/Games/ProgressBar';
import axios from 'common/electra_axios';
import TopWinners from './TopWinnersTable';

const gameChartContainer = {
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.9)",
  boxShadow: "4px 4px 50px 0px #33375F",
  height:"100%",
  width:"100%",
  padding:"0",
  display: "flex"
};

const graphContainerStyle = {
  width: "70%", // Set the width of the container
  height:"95%",
  padding:"20px"
  // Set the height of the container
  // backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
  // backgroundSize: '100% 50%', // Set the size of each background image
  // backgroundRepeat: 'no-repeat', // Prevent image repetition
  // backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
};

const ButtonControllserStyle = {
  width: "30%", // Set the width of the container
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