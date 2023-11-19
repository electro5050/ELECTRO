import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
  if(type == 'Red'){
    switchRoomStyle.background = '#D9D4D4';
  }

  else  if(type == 'Green'){
    switchRoomStyle.background = '#FFD700';
  }

  return switchRoomStyle;
}


const GameControllerButtons = ({BidValue,data, gameState, setGameState, authError, setAuthError,gameId}) => {
  const [result, setResult] = useState(1);
  // const [selectedValue, setSelectedValue] = useState(1);
  const [buttonType, setButtonType] = useState("");
  const [textFieldData, setTextFieldData] = useState("");
  const [showSwitchRoomButton, setShowSwitchRoomButton] = useState(false);
  const [totalBidAmount, setTotalBidAmount] = useState({amount:0, type:null});


  useEffect(() => {
    setTotalBidAmount({amount:2050, type:"Green"});
    const timer = setTimeout(() => {
      setShowSwitchRoomButton(true);
    }, 24000); // 24 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [gameState.gameEnded]);


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

  
  useEffect(() => {
    setTextFieldData(result);
  }, [result]);

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

  return (
    <div className="game-controller" style={gameContollersStyle}>
       {/* <div style={circleStyle}>
        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
      </div> */}
      <div style={ButtonGroupContainer}>
        <div style={{flex:"2"}} className="vertical-flex-sw">

          

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

        <div style={{...CenterStyle,marginTop:'5px'}}>
             {totalBidAmount.amount > 0 && totalBidAmount.type != null  && (
           <button  style={getBidAmountStyle(totalBidAmount.type)} >
            {totalBidAmount.amount}</button>
             )}
        </div>




        </div>

        <div style={{flex:"3", marginLeft:'10px'}} className="vertical-flex-sw">
        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#D9D4D4"}} onClick={() => {
            if(buttonType != 'Red')
              handleButtonClick("Green");
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

        
        <div style={{marginTop:'5px'}}>
             {(showSwitchRoomButton || true) && (
           <button onClick={handleSwitchRoom} style={switchRoomStyle}>switch room</button>
             )}
        </div>


        <div style={{...CenterStyle,marginTop:'5px'}}>
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

export default GameControllerButtons;