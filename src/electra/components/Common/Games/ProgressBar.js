import React from 'react';

const ProgressBar = ({ progressValue, firstColor, secondColor }) => {
  const progressBarStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: '1px',
    marginTop: "5px",
    textAlign: 'center',
  };

  const progressStyle = {
    height: '1vh',
    backgroundColor: 'transparent',
    borderRadius: '1px',
    position: 'relative',
    overflow: 'hidden',
    display: "flex",
    width: "100%",
    transition: 'width 0.5s ease', // Add transition property for smooth width changes
  };

  let progressWidth = (progressValue / 30) * 100;

  const barStyle = {
    height: '100%',
    width: progressValue + "%",
    background: "#C0C0C0",
    boxShadow: "0px -1px 2px 0px #939393, 0px 1px 4px 0px #939393",
    transition: 'width 0.5s ease', // Add transition property for smooth width changes
  };

  let secondProgressWidth = ((30 - progressValue) / 30) * 100;

  const secondBarStyle = {
    height: '100%',
    width: (100 - progressValue) + "%",
    background: "#FFD700",
    boxShadow: "0px -2px 4px 0px #9F7B2C, 0px 2px 4px 0px #9F7B2C",
    transition: 'width 0.5s ease', // Add transition property for smooth width changes
  };

  const labelsStyle = {
    display: 'flex',
    position: "relative",
  };

  const label2Style = {
    marginLeft: "83%",
    position: "relative",
  };

  return (
    <div>
      <div style={progressBarStyle}>
        <div style={progressStyle}>
          <div style={barStyle}></div>
          <div style={secondBarStyle}></div>
        </div>
      </div>
      <div style={labelsStyle}>
        <div style={{ position: "absolute", color:"#C0C0C0" }}>|</div>
        {<div style={{ width: "100%", display: "flex", justifyContent: "center", position: "absolute" }}>|</div>}
        {<div style={{ width: "100%", display: "flex", justifyContent: "end", position: "absolute", color:"#FFD700" }}>|</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
