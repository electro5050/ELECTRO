import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameHistoryTable from 'electra/components/PortFolio/GameHistoryTable';
import config from 'common/constants';



const GameComponent = ({}) => {
  const [gameHistory, setGameHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch(config.gameApiUrl+ '/usergamehistory', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && Array.isArray(data)) {
              setGameHistory(data);
          }
      })
      .catch(error => {
          console.error('Error fetching user game history:', error);
      });
  }, []);
  return (
    <div className="win-history" style={{width:"100vw", textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"}}>
      
      <span className="font-5">Your Potfolio</span>
      <GameHistoryTable rankingData={gameHistory} />
    </div>
  );
};

export default GameComponent;
