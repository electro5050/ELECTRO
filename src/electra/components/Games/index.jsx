import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';
import GameChart from 'electra/components/Common/Games/GameChart';
import TopWinnersTable from 'electra/components/Common/Games/TopWinnersTable';
import axios from 'axios';

const avatharContainerStyle = {

};

const GameComponent = ({}) => {
  const [data, setData] = useState([]);
  const [ws, setWs] = useState(null);
  const [gameState, setGameState] = useState({
      gameEnded: false,
      endGameMessage: "",
      activeGameButton: ""
  });
  const [authError, setAuthError] = useState(false);
  const [rankingData, setRankingData] = useState([]);


//   useEffect(() => {
//     const websocket = new WebSocket("ws://192.168.29.85:5000");

//     websocket.onopen = () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             websocket.send(JSON.stringify({ type: 'auth', token: token }));
//         }
//     };

//     websocket.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       console.log("Received WebSocket message:", event.data);
  
//       if (message.type && message.type === 'winners') {
//           setRankingData(message.winners);
//       } else if (message.gameId) {
//           setGameState(prevState => ({ ...prevState, gameId: message.gameId }));
//       } else if (message.message) {
//           setGameState(prevState => ({
//               ...prevState,
//               endGameMessage: message.message,
//               gameEnded: true,
//               gameId: message.gameId
//           }));
  
//           setData([]);
  
//           setTimeout(() => {
//               setGameState(prevState => ({
//                   ...prevState,
//                   gameEnded: false,
//                   endGameMessage: ""
//               }));
//           }, 10000);
//       } else {
//           // Only update if the message value is different
//           if (!data.includes(message.value)) {
//               setData(prevData => [...prevData, message.value]);
//           }
//       }
//   };
  

//     websocket.onerror = (error) => {
//         console.error("WebSocket Error:", error);
//     };

//     setWs(websocket);

//     const token = localStorage.getItem('token');
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         setAuthError(true);
//     }

//     return () => {
//         websocket.close();
//     };
// },[] )


useEffect(() => {
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/653ff927a84dd54dc486d3b7/1he0uahf0';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);

  // Cleanup on component unmount
  return () => {
      s0.parentNode.removeChild(s1);
  };
}, [])

  return (
    <div className="game-view">
      <TopSection />
      <GameChart />
      <TopWinnersTable rankingData={rankingData} />
    </div>
  );
};

export default GameComponent;
