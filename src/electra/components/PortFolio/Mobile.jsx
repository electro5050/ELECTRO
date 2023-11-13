import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameHistoryTable from 'electra/components/PortFolio/GameHistoryTable';



const GameComponent = ({}) => {
  const [gameHistory, setGameHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch('http://192.168.29.85:3000/usergamehistory', {
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
    <div className="win-history" style={{width:"80vw", textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"}}>
      <span>Your game protfolio</span>
      <GameHistoryTable rankingData={gameHistory} />
    </div>
  );
};

export default GameComponent;
