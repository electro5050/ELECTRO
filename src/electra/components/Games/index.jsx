import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameChart from 'electra/components/Common/Games/GameChart';
import TopWinnersTable from 'electra/components/Common/Games/TopWinnersTable';

const avatharContainerStyle = {

};

const GameComponent = ({}) => {
  let rankingData=[
    {
      name:"shafeer",
      bidamount: 180
    },
    {
      name:"suhail",
      bidamount: 1000
    },
    {
      name:"jubin",
      bidamount: 400
    },
    {
      name:"fari",
      bidamount: 600
    }
  ]
  return (
    <div className="game-view">
      <TopSection />
      <GameChart />
      <TopWinnersTable rankingData={rankingData} />
    </div>
  );
};

export default GameComponent;
