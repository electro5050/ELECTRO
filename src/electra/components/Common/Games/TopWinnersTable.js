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
    <div className="game-view-top-winners" style={{ height: "27vh", background: "rgba(0, 0, 0, 0.60)", marginTop: "1vh", borderRadius: "20px" }}>
      <div className="table-ranking">
        <div className="flex th-title">
          <div className="column">bidder</div>
          <div className="column">bid amount</div>
          <div className="column">win amount</div>
        </div>
        <div style={{ maxHeight: "20vh", overflowY: "auto", paddingRight: "10px" }}>
          {
            rankingData && rankingData.length > 0 && rankingData.map((player, index) => (
              <div key={index} className="fl-item">
                <div className="item flex">
                  <div className="infor-item flex column">
                    <div className="media">
                      <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'2vw'} />
                    </div>
                    <div className='margin-vertical-center'>
                      {player.userId}
                    </div>
                  </div>
                  <div className="column">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ ...circleStyle, border: "3px solid #C0C0C0" }}>
                        <FontAwesomeIcon icon={faDollarSign} style={{ ...iconStyle, color: '#C0C0C0' }} />
                      </div>
                      <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>{player.bidAmount}</span>
                    </div>
                  </div>
                  <div className="column">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ ...circleStyle, border: "3px solid #DDA83E" }}>
                        <FontAwesomeIcon icon={faDollarSign} style={{ ...iconStyle, color: '#DDA83E' }} />
                      </div>
                      <span style={{ color: "#C0C0C0", paddingLeft: '10px', fontWeight: "700" }}>{player.winningBonus}</span>
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

TopWinners.propTypes = {
  rankingData: PropTypes.array.isRequired
};

TopWinners.defaultProps = {
  rankingData: []
};

export default TopWinners;
