import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopWinnersTable.css';
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
const iconStyle = {
  fontSize: '15px',
  fontWeight:"900"
};
const TopWinners = ({rankingData}) => {

  return (
    <div className="game-view-top-winners" style={{height:"27vh", background:"rgba(0, 0, 0, 0.60)", marginTop:"1vh", borderRadius: "20px"}}>

{/* <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody height="15vh">
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>

          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>

          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>

          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>

          
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>

        </tbody>
      </table>
    </div> */}

          <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column">
                                    bidder  
                                    </div>
                                    <div className="column">
                                    bid amount
                                    </div>
                                    <div className="column">
                                    win amount
                                    </div>
                                </div>
                              <div style={{maxHeight:"20vh", overflowY:"auto", paddingRight: "10px"}}>
                              {
                                   rankingData && rankingData.map((player, index) => (
                                      <div  className="fl-item">
                                          <div className="item flex">
                                              <div className="infor-item flex column">
                                                  <div className="media">
                                                      <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'}/>
                                                  </div>
                                                  <div className='margin-vertical-center'>
                                                    {player.name}
                                                  </div>
                                              </div>
                                              <div className="column">
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                <div style={{...circleStyle, border: "3px solid #C0C0C0"}}>
                                                  <FontAwesomeIcon icon={faDollarSign} style={{...iconStyle, color: '#C0C0C0'}} />
                                                </div>
                                                  <span style={{color:"#C0C0C0", paddingLeft:'10px', fontWeight:"700"}}>{player.bidamount}</span>
                                                </div>

                                              </div>
                                              <div className="column">
                                              <div style={{display:"flex", justifyContent: "center"}}>
                                              <div style={{...circleStyle, border: "3px solid #DDA83E"}}>
                                              <FontAwesomeIcon icon={faDollarSign} style={{...iconStyle, color: '#DDA83E'}} />
                                                </div>
                                                  <span style={{color:"#C0C0C0", paddingLeft:'10px', fontWeight:"700"}}>{player.bidamount * 2}</span>
                                                </div>
                                              </div>
                                          </div>
                                      </div>
                                    ))
                                }
                              </div>

                        
                            </div>


    </div>
  );
};

export default TopWinners;