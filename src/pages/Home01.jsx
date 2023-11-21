
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Payment from '../components/Upi/Payment'
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import Graph from '../electra/components/Common/Games/Graph';
import SignUp from './SignUp';
import Ranking from '../electra/components/Common/Games/TopWinnersTable'
import Picture from '../components/Baners/Baners'
import Steps from '../components/steps/Steps'
import Boxlanding from '../assets/images/steps/box.png'
// import liveAuctionData from '../assets/fake-data/data-live-auction';
// import LiveAuction from '../components/layouts/LiveAuction';
// import TopSeller from '../components/layouts/TopSeller';
// import topSellerData from '../assets/fake-data/data-top-seller'
// import TodayPicks from '../components/layouts/TodayPicks';
// import todayPickData from '../assets/fake-data/data-today-pick';
// import PopularCollection from '../components/layouts/PopularCollection';
// import popularCollectionData from '../assets/fake-data/data-popular-collection';
// import Create from '../components/layouts/Create';
import { Element } from 'react-scroll';
import Live from '../assets/images/grandient/live.jpeg'

const graphContainerStyle = {
    width: "70%", // Set the width of the container
    height:"85%", // Set the height of the container
    // backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
    // backgroundSize: '100% 50%', // Set the size of each background image
    // backgroundRepeat: 'no-repeat', // Prevent image repetition
    // backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
    // border: "1px solid rgba(255, 255, 255, 0.5)"
  };

const Home01 = () => {
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
        <div className='home-landing'>
            <Header gameState={gameState}/>
            <Slider data={heroSliderData} />
            <div className='landing-graph'>
                
           
            <div style ={{width:'90vw' , height:'60vh', display:"flex", justifyContent:"center",alignItems:'center',}} >
            <div  style ={graphContainerStyle}>
                
            <Graph data={data} setAuthError={setAuthError} gameState={gameState} setGameState={setGameState} authError={authError} gameId={gameState.gameId} />

            </div>
            </div>
            </div>
            <div className='mainlatest' style={{width: '50%',marginLeft:'23%',height:'50%'}}>
                <div className='latest'>
                    <div className='tableicon'>
                    <img src={Boxlanding} alt="" />

                    </div>
                    
                <h2>Latest winnings</h2>
                <div className='livebutton'>
                    <img src={Live} />
                </div>
                

                </div>
                <div className='landing-ranking' style={{width:'50vw' , height:'30vh', display:"flex", justifyContent:"center",alignItems:'center',right:'5vw' }} >
                <Ranking rankingData={rankingData} />

                </div>
                
            
                </div>
          

            {/* <LiveAuction data={liveAuctionData} /> */}
            {/* <TopSeller data={topSellerData} /> */}
            {/* <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} /> */}
            {/* <Create /> */}
            <Element name='signup-section' className='element'>
           
            </Element>
            <Picture/>
            <Payment />
            <Steps/>
            <SignUp/>
            <Footer />
           
        </div>
    );
}

export default Home01;
