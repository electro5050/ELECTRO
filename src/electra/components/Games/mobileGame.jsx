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
import {updateUserData} from 'redux/userActionActions';
import { useDispatch  } from 'react-redux';
import winsound from '../../../assets/sounds/Lose.wav'
import losesound from '../../../assets/sounds/win popup.wav'
const Winsound = new Audio(winsound);
const Losesound = new Audio(losesound);

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

  const exampleRankingData = [
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    {
      userId: "User1",
      bidAmount: 100,
      winningBonus: 50,
    },
    {
      userId: "User2",
      bidAmount: 150,
      winningBonus: 75,
    },
    {
      userId: "User3",
      bidAmount: 120,
      winningBonus: 60,
    },
    // Add more data as needed
  ];

const GameComponent = ({userData, websocketData}) => {
    const [rankingData, setRankingData] = useState([]);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    const [gameEndModal, SetIsGameEndModal] = useState(false);
    const [gameCounter, SetGameCounter] = useState(0);
    const [winModel, SetIsWinModal] = useState(0);
    const [loseModel,SetLoseModal] = useState(0);

    const closeWinModal = () => {
        SetIsWinModal(0)
    };

    const closeLoseModal = () => {
      SetLoseModal(0)
  };

    const [user, setUser] = useState(null);
  
    useEffect(() => {
      setUser(userData);
    }, [userData]);

 
  
  
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

              
                let localUser = JSON.parse(localStorage.getItem('user'));
                localUser.coinbalance += CurrentUserWinner.winningBonus;
                localStorage.setItem('user', JSON.stringify(localUser));
                dispatch(updateUserData(localUser));   

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
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              // Check if the gameId is available in the websocketData
              const gameId = websocketData && websocketData.gameId;
              
              // Proceed only if gameId is available
              if (gameId) {
                  const response = await axios.get(config.gameApiUrl + '/game-outcome?gameId=${gameId}', {
                      headers: {
                          'Authorization': `Bearer ${token}`,
                          'Content-Type': 'application/json'
                      }
                  });
  
                  const userGameOutcome = response.data;
                  console.log('User Game Outcome:', userGameOutcome);
  
                  // Process the outcome only if the game has ended
                  if (userGameOutcome.participated && userGameOutcome.gameEnded) {
                      if (userGameOutcome.outcome === 'win') {
                          SetIsWinModal(userGameOutcome.winningAmount); // Open the win modal and display the winning amount
                      } else if (userGameOutcome.outcome === 'loss') {
                          SetLoseModal(true); // Open the lose modal
                      }
                  }
              }
          } catch (error) {
              console.error('Error fetching user game outcome:', error);
          }
      };
  
      // Trigger the fetchData function if websocketData contains gameId
      if (websocketData && websocketData.gameId) {
          fetchData();
      }
  }, [websocketData, token]);

  useEffect(() => {
    if (winModel > 0) {
        Winsound.play();
    }
    if (loseModel > 0){
        Losesound.play();
    }

}, [winModel,loseModel]);


  return (



    <div className="game-view">

      <GameChart />

      <div style={{height:'25vh', display:"flex", justifyContent:"center",alignItems:'center' }} >
        <TopWinnersTable rankingData={rankingData} />

      </div>


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

        <Modal isOpen={loseModel > 0} onClose={closeLoseModal}>
                <div>
                    <img src={"assets/electra/lose.png"} alt="" style={{ height: "60vw" }} />
                    {/* Additional content for lose modal if needed */}
                </div>
            </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
    websocketData: state.websocketReducer.websocketData,
    userData: state.userReducer.userData,
  });
  
  export default connect(mapStateToProps)(GameComponent);
