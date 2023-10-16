
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import Graph from '../components/slider/Graph'
import SignUp from './SignUp';
// import liveAuctionData from '../assets/fake-data/data-live-auction';
// import LiveAuction from '../components/layouts/LiveAuction';
// import TopSeller from '../components/layouts/TopSeller';
// import topSellerData from '../assets/fake-data/data-top-seller'
// import TodayPicks from '../components/layouts/TodayPicks';
// import todayPickData from '../assets/fake-data/data-today-pick';
// import PopularCollection from '../components/layouts/PopularCollection';
// import popularCollectionData from '../assets/fake-data/data-popular-collection';
// import Create from '../components/layouts/Create';

const Home01 = () => {
    const [data, setData] = useState([]);
    const [ws, setWs] = useState(null);
    const [gameState, setGameState] = useState({
        gameEnded: false,
        endGameMessage: "",
        activeGameButton: ""
    });
    const [authError, setAuthError] = useState(false);
  
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
          if (message.message) {
              setGameState({
                  ...gameState,
                  endGameMessage: message.message,
                  gameEnded: true
              });
              
              setData([]);
              
              setTimeout(() => {
                  setGameState({
                      ...gameState,
                      gameEnded: false,
                      endGameMessage: ""
                  });
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
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} />
            <Graph data={data} setAuthError={setAuthError} gameState={gameState} setGameState={setGameState} authError={authError} />
            {/* <LiveAuction data={liveAuctionData} /> */}
            {/* <TopSeller data={topSellerData} /> */}
            {/* <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} /> */}
            {/* <Create /> */}
            <SignUp/>
            <Footer />
        </div>
    );
}

export default Home01;
