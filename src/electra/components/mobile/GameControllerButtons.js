import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import axios from 'common/electra_axios';
import { connect } from 'react-redux';
import config from 'common/constants';
import {updateUserData} from 'redux/userActionActions';
import { useDispatch  } from 'react-redux';

const gameContollersStyle = {
    padding:"0",
    height: "100%",
    marginTop:"calc(2vh + 20px)"
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
  justifyContent: "space-between",
  height: "calc(100% - 20px)",
  width: "100%",
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


const GameControllerButtons = ({userData, websocketData, setAuthError}) => {
  const dispatch = useDispatch();

  const [result, setResult] = useState(1);
  // const [selectedValue, setSelectedValue] = useState(1);
  // const [buttonType, setButtonType] = useState("");
  const [textFieldData, setTextFieldData] = useState(1);

  const [lastGameStartedTime, setLastGameStartedTime] = useState(0);

  const [currentGameState, setCurrentGameState] = useState(null);
  // const [showSwitchRoomButton, setShowSwitchRoomButton] = useState(false);
  // const [totalBidAmount, setTotalBidAmount] = useState({amount:0, type:null});


  useEffect(() => {
    if (websocketData && websocketData.type === 'gameEnded') {
      setCurrentGameState(null);
      setResult(1);
    }

    if (websocketData && websocketData.type === 'live') {
      setLastGameStartedTime(30 - websocketData.chartData.length);
    }

    if (websocketData && websocketData.type === 'gameStart') {
      setLastGameStartedTime(30);
    }
  }, [websocketData]);

  
  useEffect(() => {
    let intervalId; // Declare intervalId outside the if block

    if (lastGameStartedTime > 0) {
        const decrementCounter = () => {
          setLastGameStartedTime(prevCounter => Math.max(0, prevCounter - 1));
        };
        // Set up an interval to call decrementCounter every second
        intervalId = setInterval(decrementCounter, 1000);
    } 

    // Cleanup the interval when the component is unmounted or when the condition is not met
    return () => clearInterval(intervalId);
  }, [lastGameStartedTime]);

  const [user, setUser] = useState(null);
  
    useEffect(() => {
      setUser(userData);
    }, [userData]);
  

  const handleDropdownChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
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
    if(user && result>user.coinbalance){
      alert("Dont have enough coins, please buy coins");
      setResult(user.coinbalance);
    }

    if(result>20000){
      alert("Max limit is 20,000");
      setResult(20000);
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
      dispatch(updateUserData(localUser));   

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
    setCurrentGameState(prevState => {
      // Ensure that prevState is not null or undefined
      if (prevState) {
        return {
          amount: prevState.amount, // Modify the state as needed
          type: prevState.type === "gold" ? "silver" : "gold"
        };
      } else {
        return null; // or return a default state
      }
    });

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
        <div style={{flex:"2"}} className="vertical-flex-sw">
        {lastGameStartedTime > 0 && 
          <div style={{background:"rgba(255, 255, 255)", color:'black',   borderRadius: "5px",marginBottom:'6px'}}>
          <div style={{ display:'flex', alignItems: "end", padding:"calc(2px + 0.2vh + 0.2vw)"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="calc(8px + 0.8vh + 0.8vw)" height="calc(8px + 0.8vh + 0.8vw)" viewBox="0 0 24 24" fill="black">
              <path d="M12.6271 2.77102V1.72502C12.6271 1.54821 12.5568 1.37864 12.4318 1.25361C12.3068 1.12859 12.1372 1.05835 11.9604 1.05835C11.7836 1.05835 11.614 1.12859 11.489 1.25361C11.364 1.37864 11.2937 1.54821 11.2937 1.72502V2.77702C6.05508 3.14102 1.90308 7.51602 1.90308 12.8457C1.90308 18.412 6.43274 22.9417 12.0001 22.9417C17.5674 22.9417 22.0971 18.412 22.0971 12.8457C22.0971 7.48935 17.9034 3.09602 12.6271 2.77102ZM12.0001 21.6083C7.16774 21.6083 3.23641 17.677 3.23641 12.8457C3.23641 8.01368 7.16774 4.08268 12.0001 4.08268C16.8324 4.08268 20.7637 8.01368 20.7637 12.8457C20.7637 17.677 16.8324 21.6083 12.0001 21.6083Z" fill="black"/>
              <path d="M8.57757 18.8964C6.40124 17.6621 5.04924 15.3431 5.04924 12.8454C5.04924 12.6608 4.90024 12.5121 4.7159 12.5121C4.53157 12.5121 4.38257 12.6608 4.38257 12.8454C4.38257 15.5828 5.86424 18.1238 8.2489 19.4768C8.32586 19.5204 8.41698 19.5316 8.50221 19.508C8.58745 19.4844 8.65982 19.4279 8.7034 19.3509C8.74699 19.274 8.75821 19.1829 8.73462 19.0976C8.71102 19.0124 8.65453 18.94 8.57757 18.8964ZM10.3956 19.8108C10.2665 19.7771 10.1383 19.74 10.0112 19.6994C9.92754 19.6744 9.83736 19.6832 9.7601 19.724C9.68283 19.7647 9.62466 19.8342 9.5981 19.9174C9.57154 20.0006 9.57871 20.091 9.61807 20.169C9.65743 20.247 9.72584 20.3064 9.80857 20.3344C9.94724 20.3791 10.0866 20.4191 10.2289 20.4554C10.3145 20.4775 10.4053 20.4647 10.4815 20.4198C10.5576 20.3749 10.6128 20.3017 10.6349 20.2161C10.6459 20.1738 10.6484 20.1297 10.6423 20.0864C10.6362 20.0431 10.6216 20.0014 10.5994 19.9638C10.5771 19.9261 10.5477 19.8932 10.5127 19.867C10.4777 19.8407 10.4379 19.8216 10.3956 19.8108ZM20.6022 6.24877C20.7274 6.3736 20.8971 6.44359 21.0738 6.44334C21.2506 6.44309 21.4201 6.37262 21.5449 6.24744C21.6697 6.12225 21.7397 5.95261 21.7395 5.77583C21.7392 5.59904 21.6688 5.4296 21.5436 5.30477L19.8126 3.5781C19.7506 3.51623 19.6771 3.46717 19.5962 3.43375C19.5152 3.40032 19.4285 3.38318 19.341 3.3833C19.2534 3.38343 19.1667 3.40081 19.0859 3.43447C19.0051 3.46812 18.9317 3.51738 18.8699 3.57944C18.7452 3.70467 18.6753 3.8743 18.6755 4.05104C18.6758 4.22779 18.7462 4.39722 18.8712 4.5221L20.6022 6.24877ZM12.6266 12.7214V7.39177C12.6266 7.21496 12.5563 7.04539 12.4313 6.92036C12.3063 6.79534 12.1367 6.7251 11.9599 6.7251C11.7831 6.7251 11.6135 6.79534 11.4885 6.92036C11.3635 7.04539 11.2932 7.21496 11.2932 7.39177V13.0094C11.2932 13.1931 11.3889 13.3681 11.5222 13.4938L13.4732 15.3171C13.6022 15.4384 13.7666 15.4991 13.9309 15.4991C14.0202 15.4992 14.1085 15.4807 14.1902 15.4446C14.2719 15.4086 14.3452 15.3558 14.4052 15.2898C14.6589 15.0218 14.6362 14.6001 14.3686 14.3474L12.6266 12.7214Z" fill="black"/>
              </svg>

              <span>s</span>
              <div className='font-4' style={{paddingLeft:"2px"}}>{lastGameStartedTime}</div>
            </div>
          </div>
}

        <div style={CenterStyle}>
          <div style={{width:"100%"}}>
            <div style={{...DropDownStyles.dropdownContainer, marginBottom:'6px'}}>
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

        
        <div style={{marginTop:'5px'}}>
             {IsSwitchRoomEnable() && (
           <button onClick={handleSwitchRoom} style={switchRoomStyle}>switch room</button>
             )}
        </div>




        </div>

        <div style={{flex:"3", marginLeft:'10px'}} className="vertical-flex-sw">
        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#D9D4D4"}} onClick={() => {
                     if(IsGameButtonValid("silver") ){
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



        <div style={{...CenterStyle,marginTop:'5px'}}>
        {currentGameState && currentGameState.amount > 0 && currentGameState.type != null  && (
           <button  style={getBidAmountStyle(currentGameState.type)} >
            {currentGameState.amount}</button>
             )}
        </div>


        <div style={{...CenterStyle,marginTop:'5px'}}>
          <div style={{...buttonStyle, background: "#FFD700"}} onClick={() => {
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

            
        </div>



      </div>


    </div>
  );
};

const mapStateToProps = (state) => ({
  websocketData: state.websocketReducer.websocketData,
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(GameControllerButtons);