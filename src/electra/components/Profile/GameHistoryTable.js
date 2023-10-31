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
  justifyContent: "start",
  borderBottom: "1px solid white",
  padding: "10px",
  alignItems: "center"
};
const TopWinners = () => {
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
    <div className="game-view-top-history-profile" style={{height:"40vh", background:"#43415B", marginTop:"4vh", borderRadius: "20px"}}>
        
<div style={headerStyle}>
  <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'} />
    <span  style={{marginLeft:"10px"}}>Your Game History</span>
      </div>

          <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column">
                                    game type
                                    </div>
                                    <div className="column" style={{width:"34.6%"}}>
                                    date and time
                                    </div>
                                    <div className="column">
                                    bid amount
                                    </div>
                                    <div className="column" style={{width:"10.6%"}}>
                                    win
                                    </div>
                                    <div className="column" style={{width:"10.6%"}}>
                                    lose
                                    </div>
                                    <div className="column" style={{width:"10.6%"}}>
                                    
                                    </div>
                                </div>
                              <div style={{height:"35vh", overflowY:"auto", paddingRight: "10px"}}>
                              {
                                   gameHistory && gameHistory.map((player, index) => (
                                      <div  className="fl-item" style={{paddingTop:"10px"}}>
                                          <div className="item flex">
                                              <div className="column">
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                  <span style={{color:"#FFFFFF", paddingLeft:'10px', fontWeight:"700"}}>BID AND WIN</span>
                                                </div>

                                              </div>
                                              <div className="column" style={{width:"34.6%"}}>
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                  <span style={{color:"#FFFFFF", paddingLeft:'10px', fontWeight:"700"}}>{player.startTime}</span>
                                                </div>

                                              </div>

                                              <div className="column" >
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                  <span style={{color:"#FFFFFF", paddingLeft:'10px', fontWeight:"700"}}>{player.bidAmount}</span>
                                                </div>

                                              </div>

                                              <div className="column"style={{width:"10.6%"}}>
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                  <span style={{color:"#70D77A", paddingLeft:'10px', fontWeight:"700"}}> {player.win}</span>
                                                </div>

                                              </div>
                                              <div className="column" style={{width:"10.6%"}}>
                                              <div style={{display:"flex", justifyContent: "center"}}>
                                                  <span style={{color:"#D77070", paddingLeft:'10px', fontWeight:"700"}}> {player.loss}</span>
                                                </div>
                                              </div>

                                              <div className="column"style={{width:"10.6%"}}>
                                                <div style={{display:"flex", justifyContent: "center"}}>
                                                <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          alt=""
                          style={{width:"2vw" , paddingLeft:"3px"}}
                      />
                                                  
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