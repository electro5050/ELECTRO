import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GameHistoryTable.css';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign  } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../src/common/constants';
// import { connect } from 'react-redux';
const circleStyle = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const formattedDate =
    `${
      date.getDate().toString().padStart(2, '0')
    }/${
      (date.getMonth() + 1).toString().padStart(2, '0')
    }/${
      date.getFullYear()
    } ${
      date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).toLowerCase()
    }`;

  return formattedDate;
}

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid white",
  padding: "10px"
};
const TopWinners = ({userData}) => {

  const [gameHistory, setGameHistory] = useState([]);
  const token = localStorage.getItem('token');

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setUser(userData);
  }, [userData]);

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

          console.log(data);
      })
      .catch(error => {
          console.error('Error fetching user game history:', error);
      });
  }, []);

  return (
    <div className="game-view-portfolio-table" style={{height:"70vh", background:"#43415B", marginTop:"1vh", borderRadius: "20px"}}>

<table className="table electra-table">

        <tbody style={{ maxHeight: "20vh", overflowY: "auto", paddingRight: "10px" }}>

        <tr className="th-title font-6"  style={{ position: 'sticky', top: '0', zIndex: '1', background:"#43415B" }}>
        <th className="column left-align" style={{ paddingLeft:"3%" }}>Date and Time</th>
            <th className="column">Win Amount</th>
            <th className="column">Room</th>
          </tr>

          {gameHistory && gameHistory.length > 0 && gameHistory.map((player, index) => (
            <tr key={index} className="item font-4">
              <td className="column">
                <div>
                <div className="user-view left-align">
                  <div className="media-user">
                    <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'calc(12px + 1.2vh + 1.2vw)'} />
                  </div>
                  <div className=''>
                  {formatTimestamp(player.startTime)}
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
                  <span style={{color:"#D77070", paddingLeft:'10px', fontWeight:"700"}}> {player.Room}</span>
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