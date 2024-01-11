import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameChart from 'electra/components/Common/Games/GameChart';
import TopWinnersTable from 'electra/components/Common/Games/TopWinnersTable';
import axios from 'common/electra_axios';
import Modal from './model'
import { connect } from 'react-redux';
import {updateUserData} from 'redux/userActionActions';
import { useDispatch  } from 'react-redux';


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:"5vw",
    height: '5vw',
    width:"30vw",
    background: 'transparent',
    position: 'relative',
  };

  const textDivStyle = {
    position: 'absolute',
    top: '50%', // Adjust as needed
    transform: 'translateY(-50%)',
    opacity: 1,
    color: 'white',
    fontSize:"calc(10px + 2vw + 2vh)",
    fontWeight:"100"
    // Additional styles for the text div as needed
  };

  const textDivStyleSpan = {
    position: 'absolute',
    top: '45%', // Adjust as needed
    transform: 'translateY(-50%)',
    opacity: 1,
    color: 'white',
  }

  const blackDivStyle = {
    borderRadius:"1.5vw",
    border:"1px solid yellow",
    position: 'absolute',
    width: '100%', // Full width
    height: '100%', // Adjust the height as needed
    // background: 'yellow', // Background color for the black div
    opacity: 0.9,
    background: 'black',
    // Additional styles for the black div as needed
  };


const GameComponent = ({userData, websocketData}) => {
  const [rankingData, setRankingData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [user, setUser] = useState(null);
    useEffect(() => {
      setUser(userData);
    }, [userData]);
  
const [gameEndModal, SetIsGameEndModal] = useState(false);
const [gameCounter, SetGameCounter] = useState(0);
const [token, setToken] = useState(null);


const location = useLocation();
useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const tokenFromUrl = queryParams.get('token');

  if (tokenFromUrl) {
    console.log('Token:', tokenFromUrl);
    localStorage.setItem('token', tokenFromUrl);
    setToken(tokenFromUrl);
  } else {
    console.error('Token not received');
  }
}, [location]);

useEffect(() => {
  const storedToken = localStorage.getItem('token');
  if (token || storedToken) {
    // If token is available either in state or localStorage, navigate to the game page
    navigate('/game');
  } else {
    // If token is not available, redirect to login
    navigate('/login');
  }
}, [token, navigate]);


// const axiosInstance = axios.create({
//   headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
// });


const closeGameEndModal = () => {
  SetIsGameEndModal(false)
};

 
  useEffect(() => {
      let intervalId; // Declare intervalId outside the if block

      if (user && websocketData && websocketData.type === 'gameEnded') {

        const currentUserId =  user.userId;
        const CurrentUserWinner = websocketData.winners.find(winners => winners.userId === currentUserId);
  
        if (CurrentUserWinner) {
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


  return (



    <div className="game-view" >
      <TopSection />
      <div style={{  height:"45vh"}}>
      <GameChart />
      </div>

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
            next bid starts in...    {gameCounter}
            </div>

            {/* <div style={textDivStyle}>
              
            </div> */}
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
