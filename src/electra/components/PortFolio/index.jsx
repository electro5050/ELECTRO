import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameHistoryTable from 'electra/components/PortFolio/GameHistoryTable';

const rankingData = [
  {
    bidAmount: 100,
    win: 5,
    loss: 2,
  },
  {
    bidAmount: 150,
    win: 8,
    loss: 3,
  },
  {
    bidAmount: 80,
    win: 4,
    loss: 1,
  },
  {
    bidAmount: 100,
    win: 5,
    loss: 2,
  },
  {
    bidAmount: 150,
    win: 8,
    loss: 3,
  },
  {
    bidAmount: 80,
    win: 4,
    loss: 1,
  },
  {
    bidAmount: 100,
    win: 5,
    loss: 2,
  },
  {
    bidAmount: 150,
    win: 8,
    loss: 3,
  },
  {
    bidAmount: 80,
    win: 4,
    loss: 1,
  },
  {
    bidAmount: 100,
    win: 5,
    loss: 2,
  },
  {
    bidAmount: 150,
    win: 8,
    loss: 3,
  },
  {
    bidAmount: 80,
    win: 4,
    loss: 1,
  },
  {
    bidAmount: 100,
    win: 5,
    loss: 2,
  },
  {
    bidAmount: 150,
    win: 8,
    loss: 3,
  },
  {
    bidAmount: 80,
    win: 4,
    loss: 1,
  },
  // Add more data as needed
];

const GameComponent = ({isMobile}) => {
  const [gameHistory, setGameHistory] = useState(rankingData);
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
    <div className="win-history">
      {!isMobile && <TopSection  />}
      <GameHistoryTable rankingData={gameHistory} />
    </div>
  );
};

export default GameComponent;
