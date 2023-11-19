import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Landing.css'
import  Mobilenavbar from'../../compoents/Mobilenavbar/Mobilenavbar'
import Graph from '../../../electra/components/Common/Games/Graph';
import Ranking from '../../../electra/components/Common/Games/TopWinnersTable'
import Mobbanner from '../../compoents/mobbanner/Mobbanner'
import Mobupi from '../../compoents/mobpayment/Mobupi'
import Step from '../../compoents/mobstep/Mobsteps'
import SignUp from '../../../pages/SignUp';
import Footer from '../../compoents/mobfooter/Mobfooter'

const graphContainerStyle = {
    width: "70%", // Set the width of the container
    height:"95%", // Set the height of the container
    backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
    backgroundSize: '100% 50%', // Set the size of each background image
    backgroundRepeat: 'no-repeat', // Prevent image repetition
    backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
    border: "1px solid rgba(255, 255, 255, 0.5)"
  };
function Landing() {
    const [data, setData] = useState([]);
    const [ws, setWs] = useState(null);
    const [gameState, setGameState] = useState({
        gameEnded: false,
        endGameMessage: "",
        activeGameButton: ""
    });
    const [authError, setAuthError] = useState(false);
    const [rankingData, setRankingData] = useState([]);

  
    useEffect(() => {
      const websocket = new WebSocket("ws://192.168.29.85:5000");
  
      websocket.onopen = () => {
          const token = localStorage.getItem('token');
          if (token) {
              websocket.send(JSON.stringify({ type: 'auth', token: token }));
          }
      };
  
      websocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("Received WebSocket message:", event.data);
    
        if (message.type && message.type === 'winners') {
            setRankingData(message.winners);
        } else if (message.gameId) {
            setGameState(prevState => ({ ...prevState, gameId: message.gameId }));
        } else if (message.message) {
            setGameState(prevState => ({
                ...prevState,
                endGameMessage: message.message,
                gameEnded: true,
                gameId: message.gameId
            }));
    
            setData([]);
    
            setTimeout(() => {
                setGameState(prevState => ({
                    ...prevState,
                    gameEnded: false,
                    endGameMessage: ""
                }));
            }, 10000);
        } else {
            // Only update if the message value is different
            if (!data.includes(message.value)) {
                setData(prevData => [...prevData, message.value]);
            }
        }
    };
    
  
      websocket.onerror = (error) => {
          console.error("WebSocket Error:", error);
      };
  
      setWs(websocket);
  
      const token = localStorage.getItem('token');
      if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
          setAuthError(true);
      }
  
      return () => {
          websocket.close();
      };
  },[] )
  return (
    <div className='mobile-main'>
      <Mobilenavbar/>
      <div className='landing-graph'>
                
           
                <div style ={{width:'70vw' , height:'70vh', display:"flex", justifyContent:"center",alignItems:'center',marginLeft:'12vw'}} >
                <div  style ={graphContainerStyle}>
                <Graph data={data} setAuthError={setAuthError} gameState={gameState} setGameState={setGameState} authError={authError} gameId={gameState.gameId} />
    
                </div>
                </div>
                </div>
                <div className='landing-ranking'>
                <Ranking rankingData={rankingData} />

                </div>
      <Mobbanner/>
      <Mobupi/>
      <Step/>
      <div className='mob-signup'>
      <SignUp/>
      <Footer/>

      </div>
      
      
    </div>
  )
}

export default Landing