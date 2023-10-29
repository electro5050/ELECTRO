import React from 'react';

const ProgressBar = ({ progressValue, firstColor, secondColor }) => {
  const progressBarStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: '1px',
    // padding: '5px',
    marginTop: "5px",
    textAlign: 'center',
  };

  let progressWidth = progressValue/30 * 100;
  if(progressValue > 25){
    progressWidth = 83.3;
  }
  const progressStyle = {
    height: '1vh',
    backgroundColor: 'transparent',
    borderRadius: '1px',
    position: 'relative',
    overflow: 'hidden',
    display: "flex",
    width:"100%"
  };

  const barStyle = {
    height: '100%',
    width: progressWidth+"%",
    background: "#C0C0C0",
    boxShadow: "0px -1px 2px 0px #939393, 0px 1px 4px 0px #939393",
  };


  let secondProgressWidth = 0;
  if(progressValue > 25){
    secondProgressWidth = (progressValue -25)/30 * 100
  }

  const secondBarStyle = {
    height: '100%',
    width: secondProgressWidth+"%",
    background: "#FFD700",
    boxShadow: "0px -2px 4px 0px #9F7B2C, 0px 2px 4px 0px #9F7B2C"
  };

  const labelsStyle = {
    display: 'flex',
    marginTop: '10px',
    position: "relative"
  };

  const label2Style = {
    marginLeft: "83%",
    position:"relative"
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
        <div style={{position: "absolute"}}>0</div>
        {progressValue >= 25 && <div style={{marginLeft: "83%", position:"absolute" }}>25</div>}
        {progressValue === 30 && <div style={{marginLeft: "99%", position:"absolute" }}>30</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
