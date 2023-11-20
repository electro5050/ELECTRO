import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import TopEarnersTable from 'electra/components/WinHistory/TopEarnersTable';

const rankingData = [
  {
    username: "User1",
    totalWin: 500,
  },
  {
    username: "User2",
    totalWin: 300,
  },
  {
    username: "User3",
    totalWin: 700,
  },
  {
    username: "User1",
    totalWin: 500,
  },
  {
    username: "User2",
    totalWin: 300,
  },
  {
    username: "User3",
    totalWin: 700,
  },
  {
    username: "User1",
    totalWin: 500,
  },
  {
    username: "User2",
    totalWin: 300,
  },
  {
    username: "User3",
    totalWin: 700,
  },
  {
    username: "User1",
    totalWin: 500,
  },
  {
    username: "User2",
    totalWin: 300,
  },
  {
    username: "User3",
    totalWin: 700,
  },
  // Add more data as needed
];

const GameComponent = ({isMobile}) => {
  const [allUsersGameHistory, setAllUsersGameHistory] = useState(rankingData);
  const token = localStorage.getItem('token');



  useEffect(() => {
      fetch('http://192.168.29.85:3000/allusersgamehistory', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && Array.isArray(data)) {
              setAllUsersGameHistory(data);
          }
      })
      .catch(error => {
          console.error('Error fetching all users game history:', error);
      });
  }, []);

  return (
    <div className="win-history">
        {!isMobile && <TopSection  />}
      <TopEarnersTable rankingData={allUsersGameHistory} />
    </div>
  );
};

export default GameComponent;
