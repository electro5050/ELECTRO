import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Avathar from 'electra/components/Common/AvatharView';
import './TopWinnersTable.css';

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
  fontWeight: "900"
};

const TopWinners = ({ rankingData }) => {
  return (
    <div className="game-view-top-winner table-responsive" style={{ height: "20vh", background: "rgba(0, 0, 0, 0.90)", marginTop: "1vh", borderRadius: "20px" }}>
     <table className="table electra-table">
        {/* <thead>
          <tr className="th-title">
            <th className="column" style={{width: "50%"}}>Bidder</th>
            <th className="column">Bid Amount</th>
            <th className="column">Win Amount</th>
          </tr>
        </thead> */}

        <tbody style={{ maxHeight: "20vh", overflowY: "auto", paddingRight: "10px" }}>
        <tr className="th-title font-4"  style={{ position: 'sticky', top: '0', zIndex: '1', background:" rgba(0, 0, 0, 0.7)" }}>
            <th className="column left-align" style={{paddingLeft:"2%", width:"40%"}}>Bidder</th>
            <th className="column">Bid Amount</th>
            <th className="column">Win Amount</th>
          </tr>

          {rankingData && rankingData.length > 0 && rankingData.map((player, index) => (
            <tr key={index} className="item font-5">
              <td className="column">
                <div>
                <div className="user-view left-align">
                  <div className="media-user ">
                    <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'calc(16px + 1.6vh + 1.6vw)'} />
                  </div>
                  <div className=''>
                    {player.userId}
                  </div>
                </div>
                </div>


              </td>
              <td className="column">
                <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                  <div style={{ ...circleStyle, border: "3px solid #C0C0C0" }}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ ...iconStyle, color: '#C0C0C0' }} />
                  </div>
                  <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>{player.bidAmount}</span>
                </div>
                </div>

              </td>
              <td className="column">
                <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                  <div style={{ ...circleStyle, border: "3px solid #DDA83E" }}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ ...iconStyle, color: '#DDA83E' }} />
                  </div>
                  <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>{player.winningBonus}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TopWinners.propTypes = {
  rankingData: PropTypes.array.isRequired
};

TopWinners.defaultProps = {
  rankingData: []
};

export default TopWinners;
