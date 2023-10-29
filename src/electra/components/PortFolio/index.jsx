import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameHistoryTable from 'electra/components/PortFolio/GameHistoryTable';



const GameComponent = ({}) => {
  let rankingData=[
    {
      amount: 180,
      isWin: true
    },
    {
      amount: 180,
      isWin: true
    },
    {
      amount: 180,
      isWin: true
    },
    {
      amount: 180,
      isWin: true
    },
    {
      amount: 180,
      isWin: true
    },
    {
      amount: 180,
      isWin: false
    },

    
  ]
  return (
    <div className="win-history">
      <TopSection />
      <GameHistoryTable rankingData={rankingData} />
    </div>
  );
};

export default GameComponent;
