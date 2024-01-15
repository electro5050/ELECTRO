import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import TopSection from 'electra/components/Common/Games/TopSection';

const containerStyle = {
  background: 'rgb(0, 0, 0)',
  height: '20vh',
  borderRadius: '0.6vw',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const GameComponent = ({}) => {

  return (
    <div className="win-history">
      <TopSection  />
      {/* <div className="container" style={{background:"rgba(40, 40, 40, 0.60)", borderRadius: "1.2vw", height: "70vh", overflowY: "auto", overflowX:"hidden"}}>
      <div className="row" style={{justifyContent: "space-evenly"}}>
        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

           <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

        <div className="col-3 m-3" style={containerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" style={{width: "20%"}}>
          <circle cx="50" cy="50" r="50" fill="#585858"/>
          <path d="M70 50L40 67.3205V32.6795L70 50Z" fill="#FBD313"/>
          </svg>
        </div>

      </div>


      </div> */}




<div className="container" style={{ backgroundSize: '100% 100%',backgroundposition:'center', backgroundRepeat: 'no-repeat', borderRadius: "1.2vw", height: "70vh",width:"100%", overflowY: "auto", 
      fontWeight:"700", color: "white", padding:"2vw"}}>

          <div style={{width:"100%", textAlign:"center"}} className="font-6">
          HOW TO PLAY ?
          </div>
          <div className='tutorial-mainparent'>
            <div className='tutorial-parent'>
              <div className='tutorial-inner'>
                <div className='innertutorail-chaild'>
                  <div className='innertutorial-chaild01'>
                  STEP 1
                  </div>

                </div>

                <div className='innertutorail-chaild01'>
                  <div className='innertutorial-chaild02'>
                  Buy Coins
                  </div>

                </div>

                <div className='innertutorail-chaild02'>
                  <div className='innertutorial-chaild03'>
                  In this system, 1 coin is equivalent to 1 dollar,To participate, you need to purchase coins;for instance, buying $100 means acquiring 100 coins.These coins can then be used for bidding and earning.
                  </div>

                </div>

              </div>
            </div>


            <div className='tutorial-parent'>
              <div className='tutorial-inner'>
                <div className='innertutorail-chaild'>
                  <div className='innertutorial-chaild01'>
                  STEP 2
                  </div>

                </div>

                <div className='innertutorail-chaild01'>
                  <div className='innertutorial-chaild02'>
                  Select a room (Gold or Silver)
                  </div>

                </div>

                <div className='innertutorail-chaild02'>
                  <div className='innertutorial-chaild03'>
                  In a single game session, you are limited to bidding in only one room However,you have the option to switch rooms during the last 5 seconds by clicking the 'switch' button and analyzing the graph.
                  </div>

                </div>

              </div>
            </div>

            <div className='tutorial-parent'>
              <div className='tutorial-inner'>
                <div className='innertutorail-chaild'>
                  <div className='innertutorial-chaild01'>
                  STEP 3
                  </div>

                </div>

                <div className='innertutorail-chaild01'>
                  <div className='innertutorial-chaild02'>
                  30 Seconds
                  </div>

                </div>

                <div className='innertutorail-chaild02'>
                  <div className='innertutorial-chaild03'>
                  Each session has a duration of 30 seconds,and users are not permitted to place bids during the final 5 seconds.
                  </div>

                </div>

              </div>
            </div>

            <div className='tutorial-parent'>
              <div className='tutorial-inner'>
                <div className='innertutorail-chaild'>
                  <div className='innertutorial-chaild01'>
                  STEP 4
                  </div>

                </div>

                <div className='innertutorail-chaild01'>
                  <div className='innertutorial-chaild02'>
                  Analyse the graph's
                  </div>

                </div>

                <div className='innertutorail-chaild02'>
                  <div className='innertutorial-chaild03'>
                  The gold and silver bars symbolize bidders competing against each other from opposite sides.The side with a greater number of bidders will be represented by a higher volume on the graph.The position of the silver and gold bars,located below the graph,will fluctuate to the left or right,reflecting the traffic in the gold or silver rooms,respectively.
                  </div>

                </div>

              </div>
            </div>

            <div className='tutorial-parent'>
              <div className='tutorial-inner'>
                <div className='innertutorail-chaild'>
                  <div className='innertutorial-chaild01'>
                  STEP 5
                  </div>

                </div>

                <div className='innertutorail-chaild01'>
                  <div className='innertutorial-chaild02'>
                  Win or Lose
                  </div>

                </div>

                <div className='innertutorail-chaild02'>
                  <div className='innertutorial-chaild03'>
                  After 30 seconds,the game concludes,marking the end of the session.The winning side,either gold or silver,is determined by which side had greater traffic.Each winner will receive double their bid amount,which will be instantly credited to their wallet.  
                  </div>

                </div>

              </div>
            </div>

          </div>
          
     
          

          {/* <div style={{width:"100%", textAlign:"left", marginTop:"0.5vh",}}className="font-6">
          Follow these steps to know how to bid and win
          </div> */}

          {/* <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 1 : Buy coins
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          Here 1 coin has a value of 1$ , buying 100 coins means you have to pay 100$. Use the coins for bidding and earning
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 2 : Select a room to bid either gold or silver
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          you can only bid in one room in a game. However, you can switch the room by analysing the graph at the last 5 seconds of the game
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 3 : Analyse the graph and bar
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          The 2 graphs represents bidders who are bidding against the opposite room, which ever room has higher number of bidders graph will go higher. The bar moves left or right according to the traffic of these 2 rooms. there are 2 bars gold and silver which the represents the gold and silver rooms.
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 4 : 30 Seconds
          </div>

          <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          Each bidding has a timeline of 30 seconds and the last 5 seconds no new users or existing users can bid , however users can switch rooms if they are already bid against any rooms.
          </div>

          <div style={{width:"100%", textAlign:"left", marginTop:"2vh"}} className="font-6">
          Step 5 : Win or Lose
          </div> */}

          {/* <div style={{width:"100%", textAlign:"center", marginTop:"0.5vh",}} className="font-6">
          After the 30 seconds the game will end, means this has bidding stoped. if the winning room is gold of the bidders who bid against the room will win and double their coins!. A 10 second gap is provided for each bidding to start. If you win you can withdraw the amount to your account.
          </div> */}



          


      </div>
      
      
    </div>
  );
};

export default GameComponent;