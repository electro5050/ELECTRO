import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import axios from 'common/electra_axios';
import { connect } from 'react-redux';
import config from 'common/constants';

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
  padding:"2%",
  width: "100%",
  maxWidth: "fit-content"
}

const CenterStyle={
  display: "flex",
  justifyContent: "center"
}

const StartStyle={
  display: "flex",
  justifyContent: "center"
}

const TextStyle={
  color: 'black',
  fontSize: 'calc(8px + 0.8vh + 0.8vw)',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
  marginLeft:"10px"
}

const buttonStyle={
  borderRadius: "5px", width: "100%", height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor:"pointer",
  padding:"2% 0"
}

const CoinMultiplyButtonStyle={
  borderRadius: "5px",
  background: "#212020",
  border: "1px solid white",
  padding:"2px",
  width: "30px",
  marginLeft:"0",
  fontSize: 'calc(4px + 0.4vh + 0.4vw)',
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
    width:'100%',

  },
  dropdown: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 'calc(4px + 0.4vh + 0.4vw)',
    padding: '2%',
    color: "white",
    width:"100%",
    lineHeight: "normal",
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
  padding:"1% 2%",
  fontSize: 'calc(4px + 0.4vh + 0.4vw)',
}

function getBidAmountStyle(type){
  let switchRoomStyle={
    borderRadius: "5px",
    boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.60)",
    background:"#D9D4D4",
    padding:"1% 2%",
    border:"none",
    color:"black",
    width:"100%",
    textAlign:"left",
    fontSize: 'calc(4px + 0.4vh + 0.4vw)',
    fontWeight:"900"
  };
  if(type == 'silver'){
    switchRoomStyle.background = '#D9D4D4';
  }

  else  if(type == 'gold'){
    switchRoomStyle.background = '#FFD700';
  }

  return switchRoomStyle;
}


const GameControllerButtons = ({websocketData, setAuthError}) => {
  const [result, setResult] = useState(1);
  // const [selectedValue, setSelectedValue] = useState(1);
  // const [buttonType, setButtonType] = useState("");
  const [textFieldData, setTextFieldData] = useState(1);

  const [currentGameState, setCurrentGameState] = useState(null);
  // const [showSwitchRoomButton, setShowSwitchRoomButton] = useState(false);
  // const [totalBidAmount, setTotalBidAmount] = useState({amount:0, type:null});


  useEffect(() => {
    if (websocketData && websocketData.type === 'gameEnded') {
      setCurrentGameState(null);
      setResult(1);
    }
  }, [websocketData]);

  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser || null);

  const handleDropdownChange = (event) => {
    alert(event.target.value);
    let newValue = parseInt(event.target.value, 10);
    alert(newValue);
    if(isNaN(newValue) || newValue < 1){
      newValue = 1;
    }
    // setSelectedValue(newValue);
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

  const IsGameOngoing = () => {
    if (websocketData && websocketData.gameId && (websocketData.type == "live" || websocketData.type == "gameStart")) {
      return true;
    }
  };

  const IsSwitchRoomEnable = () => {
    if (IsGameOngoing()  && websocketData.type == "live" && websocketData.chartData.length > 24 && currentGameState) {
      return true;
    }
  };

  const IsGameButtonValid = (type) => {
    if (IsGameOngoing() && !(currentGameState && currentGameState.type != type) && !IsSwitchRoomEnable()) {
      return true;
    }
  };

  
  useEffect(() => {
    setTextFieldData(result);
    console.log("user.coinbalance", user?.coinbalance);
    if(user && result>user.coinbalance){
      alert("Dont have enough coins, please buy coins");
      setResult(user.coinbalance);
    }
  }, [result]);

  const handleButtonClick = (type) => {
    // setButtonType(type);
    sendDataToAPI(type); // Sending the type as a parameter to the function
  };

  const sendDataToAPI = (type) => {
    
    if (!websocketData || websocketData.gameId === undefined) {
      console.error('gameState or gameId is undefined!');

      return;
    }

    axios.post(config.gameApiUrl + '/bid', {
      coinCount: result,
      buttonType: type,
      gameId: websocketData.gameId
    })
    .then(response => {
      setCurrentGameState(prevState => ({
        amount: (prevState && prevState.amount) ? prevState.amount + result : result,
        type: type
      }));

      let localUser = JSON.parse(localStorage.getItem('user'));
      localUser.coinbalance -= result;
      localStorage.setItem('user', JSON.stringify(localUser));

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
  // const userIdFromLocalStorage = JSON.parse(localStorage.getItem('user')).id;
  axios.post(config.gameApiUrl + '/switch', {
      gameId: websocketData.gameId
  })
  .then(response => {
    setCurrentGameState(prevState => ({
      amount: prevState.amount,
      type: prevState.type === "gold" ? "silver" : "gold"
    }));

  })
  .catch(error => {
      console.error("Error switching room:", error);
  });
};

  return (
    <div className="game-controller" style={gameContollersStyle}>
       {/* <div style={circleStyle}>
        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
      </div> */}
      <div style={ButtonGroupContainer}>
        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#D9D4D4", cursor: IsGameButtonValid("silver")  ?  "pointer" : "not-allowed"}} onClick={() => {
              if(IsGameButtonValid("silver")){
                handleButtonClick("silver");
              }

          }} >
              <span style={TextStyle}>
                  Bid
              </span>
              <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/silver-coin.png"}
                          alt=""
                          style={{width:"calc(6px + 0.6vh + 0.6vw)" , marginLeft:"3px"}}
                      />

              <span style={{...TextStyle}}>
              {result}
              </span>
          </div>
        </div>

        <div style={CenterStyle}>
          <div style={{width:"100%"}}>
            <div style={{...DropDownStyles.dropdownContainer, marginBottom:'10px'}}>
              {/* <select value={textFieldData} onChange={(e) => {handleDropdownChange(e);}} style={DropDownStyles.dropdown}>
                <option value={1}>1</option>
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
              </select> */}
              <input style={DropDownStyles.dropdown} type="number" onChange={(e) => {handleDropdownChange(e);}} value={textFieldData} />
              {/* <span style={DropDownStyles.dropdownArrow}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span> */}
          </div>
            <button onClick={handleMultiply} style={CoinMultiplyButtonStyle}>x2</button>
            <button onClick={handleDivide} style={CoinMultiplyButtonStyle}>/2</button>
          </div>
        </div>

        <div style={CenterStyle}>
             {currentGameState && currentGameState.amount > 0 && currentGameState.type != null  && (
           <button  style={getBidAmountStyle(currentGameState.type)} >
            {currentGameState.amount}</button>
             )}
        </div>


        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#FFD700" , cursor: IsGameButtonValid("gold")  ?  "pointer" : "not-allowed"}} onClick={() => {
              if(IsGameButtonValid("gold") ){
                handleButtonClick("gold");
              }

            }}  >
              <span style={TextStyle}>
                  Bid
              </span>
              <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          alt=""
                          style={{width:"calc(6px + 0.6vh + 0.6vw)" , marginLeft:"3px"}}
                      />

              <span style={{...TextStyle}}>
              {result}
              </span>
          </div>
        </div>

        <div >
             {IsSwitchRoomEnable() && (
           <button onClick={handleSwitchRoom} style={switchRoomStyle}>switch room</button>
             )}
        </div>

      </div>


    </div>
  );
};

const mapStateToProps = (state) => ({
  websocketData: state.websocketReducer.websocketData,
});

export default connect(mapStateToProps)(GameControllerButtons);