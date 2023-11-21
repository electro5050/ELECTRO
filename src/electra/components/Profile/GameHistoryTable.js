import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GameHistoryTable.css';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign  } from '@fortawesome/free-solid-svg-icons';
import config from 'common/constants';


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
const TopWinners = ({rankingData}) => {
  const [gameHistory, setGameHistory] = useState(rankingData);
  const token = localStorage.getItem('token');
  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser || null);

  useEffect(() => {
      fetch(config.gameApiUrl + '/usergamehistory', {
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
    <div className="game-view-top-history-profile" style={{height:"30vh", background:"#43415B", marginTop:"4vh", borderRadius: "20px"}}>
        
<div style={headerStyle}>
  <Avathar  imageUrl={(user && user.profilePictureUrl) || "assets/Avatars/avathar_1.png"} imageSize={'calc(10px + 1vw + 1vh)'} />
    <span  style={{marginLeft:"10px"}} className="font-6">Your Game History</span>
      </div>

      <table className="table electra-table">
        <tbody style={{ overflowY: "auto", paddingRight: "10px" }}>

        <tr className="th-title font-6"  style={{ position: 'sticky', top: '0', zIndex: '1', background:"#43415B" }}>
            <th className="column left-align">game type</th>
            <th className="column" style={{width:"34.6%"}}>date and time</th>
            <th className="column" >bid amount</th>
            <th className="column" style={{width:"10.6%"}}>win</th>
            <th className="column" style={{width:"10.6%"}}>lose</th>
            <th className="column" style={{width:"10.6%"}}></th>
          </tr>

            {gameHistory && gameHistory.length > 0 && gameHistory.map((player, index) => (
            <tr key={index} className="item font-5">

          <td className="column">
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <span style={{color:"#FFFFFF", paddingLeft:'10px'}}>BID AND WIN</span>
                </div>
                </div>

              </td>

              <td className="column" style={{width:"34.6%"}}>
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <span style={{color:"#FFFFFF", paddingLeft:'10px'}}>{player.startTime}</span>
                </div>
                </div>

              </td>

              <td className="column">
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <span style={{color:"#FFFFFF", paddingLeft:'10px'}}>{player.bidAmount}</span>
                </div>
                </div>

              </td>

              <td className="column" style={{width:"10.6%"}}>
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <span style={{color:"#70D77A", paddingLeft:'10px'}}> {player.win}</span>
                </div>
                </div>

              </td>
              <td className="column" style={{width:"10.6%"}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <span style={{color:"#D77070", paddingLeft:'10px'}}> {player.loss}</span>
                </div>
              </td>

              <td className="column" style={{width:"10.6%"}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          alt=""
                          style={{width:"calc(10px + 1vw + 1vh)" , paddingLeft:"3px"}}
                      />
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