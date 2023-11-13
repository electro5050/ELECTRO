import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const gameContollersStyle = {
    padding:"10px",
    height: "100%"
};

const circleStyle = {
  width: '20px',
  height: '20px',
  border: "2px solid white",
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-15px',
  float: "right"
};
const iconStyle = {
  fontSize: '10px',
  color: 'white',
  fontWeight:"900"
};

const ButtonGroupContainer = {
  // background: "red",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  height: "calc(100% - 20px)",
  margin:"2%",
  width: "100%"
}

const CenterStyle={
  display: "flex",
  justifyContent: "center"
}

const TextStyle={
  color: '#FFF',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontSize: '2rem',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
  marginLeft:"10%"
}

const buttonStyle={
  borderRadius: "5px", boxShadow: "0px 4px 40px 0px #FFF", width: "fit-content", height: "auto",
  display: "flex",
  alignItems: "center",
  padding: "0 5px",
  justifyContent: "space-around",
  cursor:"pointer",
  padding:"5%"
}

const CoinMultiplyButtonStyle={
  borderRadius: "5px",
  background: "#212020",
  border: "1px solid white",
  padding:"2px",
  width: "30px",
  marginLeft:"5px"
}

const DropDownStyles = {
  dropdownContainer: {
    position: 'relative',
    display: 'inline-block',
    borderRadius: "5px",
    background: "#212020",
    border: "1px solid white",
    color:"white",
    padding: '0',
    cursor: 'pointer',
    userSelect: 'none',
  },
  dropdown: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    padding: '3px',
    color: "white",
    width:"100%"
  },
  dropdownArrow: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
  },
};

const switchRoomStyle={
  borderRadius: "5px",
  boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.60)",
  backgroundColor:"#363636",
  padding:"2px 5px",
  marginLeft:"5px"
}


const GameControllerButtons = ({BidValue,data, gameState, setGameState, authError, setAuthError,gameId}) => {
  const [result, setResult] = useState(1);
  const [selectedValue, setSelectedValue] = useState(1);
  const [buttonType, setButtonType] = useState("");
  const [textFieldData, setTextFieldData] = useState("");
  const [showSwitchRoomButton, setShowSwitchRoomButton] = useState(false);
  


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwitchRoomButton(true);
    }, 24000); // 24 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [gameState.gameEnded]);

  useEffect(() => {
    if (gameState.gameEnded) {
      setShowSwitchRoomButton(false);
      setButtonType('');
      setResult(1);
      setTextFieldData('');
      
    }
    
  }, [gameState.gameEnded]);

  const handleDropdownChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSelectedValue(newValue);
    setResult(newValue);
    setTextFieldData(event.target.value);
  };

  const handleMultiply = () => {
    setResult(result * 2);
  };

  const handleDivide = () => {
    if (result >= 2) {
      setResult(Math.floor(result / 2));
    }
  };

  const handleButtonClick = (type) => {
    setButtonType(type);
    sendDataToAPI(type); // Sending the type as a parameter to the function
  };

  const sendDataToAPI = (type) => {
    
    if (!gameState || gameState.gameId === undefined) {
      console.error('gameState or gameId is undefined!');
      return;
    }

    // if (typeof textFieldData === 'string' && textFieldData.trim() === '') {
    //   console.error("Coin count is empty");
    //   return;
    // }

    axios.post('http://192.168.29.85:3000/bid', {
      coinCount: result,
      buttonType: type,
      gameId: gameState.gameId
    })
    .then(response => {
      setGameState({
        ...gameState,
        activeGameButton: type
      });
      console.log("Data sent successfully:", response.data);
    })
    .catch(error => {
      console.error("Error sending data:", error);
      if (error.response && error.response.status === 401) {
        console.log('Authentication error. Please login again.');
        setAuthError(true);
      }
    });
  };

const handleSwitchRoom = () => {
  const userIdFromLocalStorage = localStorage.getItem('userId');
  axios.post('http://192.168.29.85:3000/switch', {
      userId: userIdFromLocalStorage
  })
  .then(response => {
      console.log("Switch room success:", response.data); 
  })
  .catch(error => {
      console.error("Error switching room:", error);
  });
};
console.log('gameState:', gameState);
console.log('gameId:', gameState ? gameState.gameId : 'gameState is undefined');


  return (
    <div className="game-controller" style={gameContollersStyle}>
       {/* <div style={circleStyle}>
        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
      </div> */}
      <div style={ButtonGroupContainer}>
        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#D9D4D4"}} onClick={() => {
            if(buttonType != 'Red')
              handleButtonClick("Green");
    // sendDataToAPI();
}} >
              <span style={TextStyle}>
                  Bid
              </span>
              <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/silver-coin.png"}
                          alt=""
                          style={{width:"2vw" , marginLeft:"10%"}}
                      />

              <span style={{...TextStyle, marginRight:"10%"}}>
              {result}
              </span>
          </div>
        </div>

        <div style={CenterStyle}>
          <div>
            <div style={DropDownStyles.dropdownContainer}>
              <select value={textFieldData} onChange={(e) => {handleDropdownChange(e);}} style={DropDownStyles.dropdown}>
                <option value={1}>1</option>
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
              </select>
              <span style={DropDownStyles.dropdownArrow}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
          </div>
            <button onClick={handleMultiply} style={CoinMultiplyButtonStyle}>x2</button>
            <button onClick={handleDivide} style={CoinMultiplyButtonStyle}>/2</button>
          </div>
        </div>

        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#FFD700"}} onClick={() => {
            if(buttonType != 'Green')
           handleButtonClick("Red");
          //  sendDataToAPI();
               }}  >
              <span style={TextStyle}>
                  Bid
              </span>
              <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          alt=""
                          style={{width:"2vw" , paddingLeft:"3px"}}
                      />

              <span style={{...TextStyle, paddingLeft:"3px"}}>
              {result}
              </span>
          </div>
        </div>

        <div style={CenterStyle}>
             {showSwitchRoomButton && (
           <button onClick={handleSwitchRoom} style={switchRoomStyle}>switch room</button>
             )}
        </div>

      </div>


    </div>
  );
};

export default GameControllerButtons;