import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import {   Routes , Route } from 'react-router-dom';
import routes from './pages/index'
// import { AuthProvider } from './contexts/AuthContext.jsx';
import axios from 'common/electra_axios';
import config from 'common/constants';
import { Provider, useDispatch  } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import websocketReducer from 'redux/websocketReducer';
import {updateWebSocketData} from 'redux/websocketActions';

const rootReducer = combineReducers({
    websocketReducer,
  });

  const store = createStore(rootReducer);

function App() {

    

  const [data, setData] = useState([]);
  const [ws, setWs] = useState(null);
  const [gameState, setGameState] = useState({
      gameEnded: false,
      endGameMessage: "",
      activeGameButton: ""
  });
  const [authError, setAuthError] = useState(false);
  const [rankingData, setRankingData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const websocket = new WebSocket(config.gameSocketUrl);

    websocket.onopen = () => {
        // const token = localStorage.getItem('token');
        // if (token) {
        //     websocket.send(JSON.stringify({ type: 'auth', token: token }));
        // }
    };

    websocket.onmessage = (event) => {
        console.log("socket_data", event.data);
        const message = JSON.parse(event.data);
        dispatch(updateWebSocketData(message));     
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
},[] );


    return (
        // <Provider store={store}>
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
    //   </Provider>
    );
}

export default App;
