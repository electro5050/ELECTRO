import React, { useRef, useState, useEffect } from 'react';
import './index.css';
import GameHistoryTable from 'electra/components/Profile/GameHistoryTable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import Details from  './DetailsMobile'
import AccountInfo from  './AccountsInfoMobile'
import Modal from './model';

const avatharContainerStyle = {
  display: "flex",
  alignItems: "center"
};

let rankingData=[
  {
    amount: 180,
    startTime: '24/20/2023 10:00:30 am',
    isWin: true
  },
  {
    amount: 180,
    startTime: '24/20/2023 10:00:30 am',
    isWin: true
  },

  {
    amount: 180,
    startTime: '24/20/2023 10:00:30 am',
    isWin: true
  },

  {
    amount: 180,
    startTime: '24/20/2023 10:00:30 am',
    isWin: true
  },


  
]



const ProfileUpdate = ({user}) => {

  return (
    <div className="profile-page-main" style={{height:'80vh', background:"rgba(40, 40, 40, 0.60)", borderRadius:"1vw", padding:"1vw",   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',}}>
      {/* <GameHistoryTable rankingData={rankingData} /> */}
      
      <Details />

      <div className="profile-section" style={{height:'70vh', borderRadius:"1vw", padding:"2vh 4vw"}}>

        <AccountInfo />
      </div>
    </div>

    
  );
};

export default ProfileUpdate;
