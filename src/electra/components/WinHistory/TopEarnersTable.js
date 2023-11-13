import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopEarnersTable.css';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign  } from '@fortawesome/free-solid-svg-icons';

const circleStyle = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const headerStyle = {
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid white",
  padding: "10px"
};
const TopWinners = ({rankingData}) => {

  return (
    <div className="game-view-top-earners" style={{height:"70vh", background:"rgba(0, 0, 0, 0.60)", marginTop:"1vh", borderRadius: "20px"}}>
      <div style={headerStyle}>
        Top 10
      </div>

      <table className="table electra-table">
        <thead>
          <tr className="th-title">
            <th className="column" style={{width: "50%"}}> user ID </th>
            <th className="column">Win amount</th>
            <th className="column">Game</th>
          </tr>
        </thead>

        <tbody style={{ maxHeight: "20vh", overflowY: "auto", paddingRight: "10px" }}>
          {rankingData && rankingData.length > 0 && rankingData.map((player, index) => (
            <tr key={index} className="item">
              <td className="column" style={{width: "50%"}}>
                <div>
                <div className="user-view">
                  <div className="media-user">
                    <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'} />
                  </div>
                  <div className=''>
                  {player.username}
                  </div>
                </div>
                </div>


              </td>
              <td className="column">
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                  <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>{player.totalWin}</span>
                </div>
                </div>

              </td>
              <td className="column">
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                  <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>bid and win</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default TopWinners;