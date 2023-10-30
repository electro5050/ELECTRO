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
    <div className="game-view-top-winners" style={{height:"70vh", background:"rgba(0, 0, 0, 0.60)", marginTop:"1vh", borderRadius: "20px"}}>
      <div style={headerStyle}>
        Top 10
      </div>


          <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column">
                                    user ID  
                                    </div>
                                    <div className="column">
                                    Win amount
                                    </div>
                                    <div className="column">
                                    game
                                    </div>
                                </div>
                              <div style={{height:"60vh", overflowY:"auto", paddingRight: "10px"}}>
                              {
                                   rankingData && rankingData.map((player, index) => (
                                      <div  className="fl-item">
                                          <div className="item flex">
                                              <div className="infor-item flex column">
                                                  <div className="media">
                                                      <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'}/>
                                                  </div>
                                                  <div className='margin-vertical-center'>
                                                    {player.username}
                                                  </div>
                                              </div>
                                              <div className="column">
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                {/* <div style={{...circleStyle, border: "3px solid #C0C0C0"}}>
                                                  <FontAwesomeIcon icon={faDollarSign} style={{...iconStyle, color: '#C0C0C0'}} />
                                                </div> */}
                                                  <span style={{color:"#C0C0C0", paddingLeft:'10px', fontWeight:"700"}}>{player.totalWin}</span>
                                                </div>

                                              </div>
                                              <div className="column">
                                              <div style={{display:"flex", justifyContent: "center"}}>
                                              {/* <div style={{...circleStyle, border: "3px solid #DDA83E"}}>
                                              <FontAwesomeIcon icon={faDollarSign} style={{...iconStyle, color: '#DDA83E'}} />
                                                </div> */}
                                                  <span style={{color:"#C0C0C0", paddingLeft:'10px', fontWeight:"700"}}>bid and win</span>
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