import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import GameChart from 'electra/components/mobile/GameChartMobile';
import TopWinnersTable from 'electra/components/Common/Games/TopWinnersTable';
import axios from 'common/electra_axios';
import Modal from './model'
import { connect } from 'react-redux';
import config from 'common/constants';


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:"2vw",
    height: '70vw',
    width:"70vw",
    background: 'transparent',
    position: 'relative',
  };

  const textDivStyle = {
    position: 'absolute',
    top: '50%', // Adjust as needed
    transform: 'translateY(-50%)',
    opacity: 1,
    color: 'white',
    fontSize:"calc(50px + 5vw + 5vh)",
    fontWeight:"800"
    // Additional styles for the text div as needed
  };

  const textDivStyleSpan = {
    position: 'absolute',
    top: '15%', // Adjust as needed
    transform: 'translateY(-50%)',
    opacity: 1,
    color: 'white',
  }

  const blackDivStyle = {
    borderRadius:"2vw",
    border:"1px solid yellow",
    position: 'absolute',
    width: '100%', // Full width
    height: '100%', // Adjust the height as needed
    // background: 'yellow', // Background color for the black div
    opacity: 0.9,
    background: 'black',
    // Additional styles for the black div as needed
  };

  const shareButtonStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(244, 225, 124, 0.9) 100%)',
    backdropFilter: 'blur(50px)',
    width: 'fit-content',
    height: '20px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px 20px',
    fontWeight: 700
  };

const GameComponent = ({websocketData}) => {
    const [rankingData, setRankingData] = useState([]);
    const token = localStorage.getItem('token');

    const [user, setUser] = useState(null);

    const [winModel, SetIsWinModal] = useState(0);

    const closeWinModal = () => {
        SetIsWinModal(0)
    };
    

  
    useEffect(() => {
      const localUser = JSON.parse(localStorage.getItem('user'));
      setUser(localUser); 
    }, []);
    
  const [gameEndModal, SetIsGameEndModal] = useState(false);
  const [gameCounter, SetGameCounter] = useState(0);
  
  
  const closeGameEndModal = () => {
    SetIsGameEndModal(false)
  };
  
   
    useEffect(() => {
        let intervalId; // Declare intervalId outside the if block
  
        if (user && websocketData && websocketData.type === 'gameEnded') {

            const currentUserId =  user.userId;
            const CurrentUserWinner = websocketData.winners.find(winners => winners.userId === currentUserId);
      
            if (CurrentUserWinner) {
              SetIsWinModal(CurrentUserWinner.winningBonus); // Open the modal if the current user is a winner
            }

          setRankingData(websocketData.winners);
            SetIsGameEndModal(true);
            SetGameCounter(10);
  
            const decrementCounter = () => {
              SetGameCounter(prevCounter => Math.max(0, prevCounter - 1));
            };
  
            // Set up an interval to call decrementCounter every second
            intervalId = setInterval(decrementCounter, 1000);
          
        } else {
          closeGameEndModal();
        }
  
        // Cleanup the interval when the component is unmounted or when the condition is not met
        return () => clearInterval(intervalId);
      }, [websocketData]);
  

      const shareWin = async () => {
        closeWinModal();
        try {
            await axios.post(config.gameApiUrl + '/send-message', {
                message: winModel.toString(),
                type: 'win'
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
  

  return (



    <div className="game-view">

      <GameChart />
      <TopWinnersTable rankingData={rankingData} />

      <Modal isOpen={gameEndModal} onClose={closeGameEndModal}>

        <div style={containerStyle}>


        <div style={blackDivStyle}>
            {/* Content for the black div goes here */}
            <img src={"assets/electra/logo_dark.png"} alt={`pic`} style={{ height: "100%", width:'100%', opacity:"0.2" }}/>
        </div>
        {/* 
        <div style={textDivStyle} className="font-10"> */}
            <div style={textDivStyleSpan} className="font-10">
            next bid starts in...
            </div>

            <div style={textDivStyle}>
            {gameCounter}
            </div>
        </div>
        </Modal>

        <Modal isOpen={winModel > 0} onClose={closeWinModal}>
            <div>
            <img src={"assets/electra/win-shield.png"}  alt=""  style={{height:"60vw"}}/>
            <div style={shareButtonStyle} onClick={shareWin}>
                    share &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M7.5 0V3C1.5 3 0 6.075 0 10.5C0.78 7.53 3 6 6 6H7.5V9L12 4.26L7.5 0Z" fill="#6D6520"/>
                    </svg>
            </div>
            </div>

        </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
    websocketData: state.websocketReducer.websocketData,
  });
  
  export default connect(mapStateToProps)(GameComponent);
