import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown  } from '@fortawesome/free-solid-svg-icons';

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
  margin:"20px"
}

const CenterStyle={
  display: "flex",
  justifyContent: "center"
}

const TextStyle={
  color: '#FFF',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontFamily: 'cursive',
  fontSize: '1.8vw',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
}

const buttonStyle={
  borderRadius: "5px", boxShadow: "0px 4px 40px 0px #FFF", minWidth: "60%", height: "8vh",
  display: "flex",
  alignItems: "center",
  padding: "0 5px",
  justifyContent: "space-around"

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
    width:"60px"
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


const GameControllerButtons = ({BidValue}) => {
  const [result, setResult] = useState(1);
  const [selectedValue, setSelectedValue] = useState(1);

  const handleDropdownChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSelectedValue(newValue);
    setResult(newValue);
  };

  const handleMultiply = () => {
    setResult(result * 2);
  };

  const handleDivide = () => {
    if(result >= 2)
      {
        const newResult = result / 2;
        setResult(Math.floor(newResult));
      }
  };

  return (
    <div className="game-controller" style={gameContollersStyle}>
       <div style={circleStyle}>
        <FontAwesomeIcon icon={faInfo} style={iconStyle} />
      </div>
      <div style={ButtonGroupContainer}>
        <div style={CenterStyle}>
          <div style={{...buttonStyle, background: "#D9D4D4"}}>
              <span style={TextStyle}>
                  Bid
              </span>
              <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/silver-coin.png"}
                          alt=""
                          style={{width:"2vw" , paddingLeft:"3px"}}
                      />

              <span style={{...TextStyle, paddingLeft:"3px"}}>
              {result}
              </span>
          </div>
        </div>

        <div style={CenterStyle}>
          <div>
            <div style={DropDownStyles.dropdownContainer}>
              <select value={selectedValue} onChange={handleDropdownChange} style={DropDownStyles.dropdown}>
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
          <div style={{...buttonStyle, background: "#FFD700"}}>
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
          <button onClick={handleMultiply} style={switchRoomStyle}>switch room</button>
        </div>
      </div>


    </div>
  );
};

export default GameControllerButtons;