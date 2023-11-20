import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GameHistoryTable.css';
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
    <div className="game-view-portfolio-table" style={{height:"70vh", background:"#43415B", marginTop:"1vh", borderRadius: "20px"}}>

<table className="table electra-table">

        <tbody style={{ maxHeight: "20vh", overflowY: "auto", paddingRight: "10px" }}>

        <tr className="th-title font-6"  style={{ position: 'sticky', top: '0', zIndex: '1', background:"#43415B" }}>
        <th className="column">Bid Amount</th>
            <th className="column">Win</th>
            <th className="column">Lose</th>
          </tr>

          {rankingData && rankingData.length > 0 && rankingData.map((player, index) => (
            <tr key={index} className="item font-4">
              <td className="column">
                <div>
                <div className="user-view">
                  <div className="media-user">
                    <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'calc(12px + 1.2vh + 1.2vw)'} />
                  </div>
                  <div className=''>
                  {player.bidAmount}
                  </div>
                </div>
                </div>


              </td>
              <td className="column">
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>

                  <span style={{color:"#70D77A", paddingLeft:'10px', fontWeight:"700"}}> {player.win}</span>
                </div>
                </div>

              </td>
              <td className="column">
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                  <span style={{color:"#D77070", paddingLeft:'10px', fontWeight:"700"}}> {player.loss}</span>
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