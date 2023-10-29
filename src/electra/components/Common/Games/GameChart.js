import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Graph from 'electra/components/Common/Games/Graph';
import GameControllerButtons from 'electra/components/Common/Games/GameControllerButtons';
import ProgressBar from 'electra/components/Common/Games/ProgressBar';

const gameChartContainer = {
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.60)",
  boxShadow: "4px 4px 50px 0px #33375F",
  height:"45vh",
  width:"100%",
  padding:"20px",
  display: "flex"
};

const graphContainerStyle = {
  width: "70%", // Set the width of the container
  height:"95%", // Set the height of the container
  backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
  backgroundSize: '100% 50%', // Set the size of each background image
  backgroundRepeat: 'no-repeat', // Prevent image repetition
  backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
  border: "1px solid rgba(255, 255, 255, 0.5)"
};

const ButtonControllserStyle = {
  width: "30%", // Set the width of the container
  height:"100%", // Set the height of the container
};

const GameChart = ({}) => {

  return (
    <div className="game-view-chart" style={gameChartContainer}>
      {/* <div>

      </div> */}
      <div style={graphContainerStyle}>
        <Graph data={[1,0,1,-1,0,0,1,1,1,1, 1,0,1,-1,0,0,1,1,1,1, 1,0,1,-1,0,0,1,1,1,1]}/>
        <ProgressBar progressValue={30} />
      </div>

      <div style={ButtonControllserStyle}>
       <GameControllerButtons />
      </div>


    </div>
  );
};

export default GameChart;