import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Graph from 'electra/components/Common/Games/Graph';
import GameControllerButtons from 'electra/components/mobile/GameControllerButtons';
import ProgressBar from 'electra/components/Common/Games/ProgressBar';
import axios from 'common/electra_axios';

const gameChartContainer = {
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.90)",
  boxShadow: "4px 4px 50px 0px #33375F",
  width:"100%",
  padding:"20px",

};

const graphContainerStyle = {
  width: "100%", // Set the width of the container
  height:"25vh", // Set the height of the container
};

const ButtonControllserStyle = {
  width: "100%", // Set the width of the container
  height:"100%", // Set the height of the container
};

const GameChart = () => {
    const [authError, setAuthError] = useState(false);
  return (
    <div className="game-view-chart" style={gameChartContainer}>
      {/* <div>

      </div> */}
      <div style={graphContainerStyle}>
        <Graph setAuthError={setAuthError} authError={authError} />
      </div>

      <div style={ButtonControllserStyle}>
       <GameControllerButtons setAuthError={setAuthError} authError={authError} />
      </div>

    </div>


  );
};

export default GameChart;