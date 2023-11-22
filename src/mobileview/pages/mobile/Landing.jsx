import React, { useState,useEffect } from 'react';
import axios from 'common/electra_axios';
import './Landing.css'
import  Mobilenavbar from'../../compoents/Mobilenavbar/Mobilenavbar'
import Graph from '../../../electra/components/Common/Games/Graph';
import Ranking from '../../../electra/components/Common/Games/TopWinnersTable'
import Mobbanner from '../../compoents/mobbanner/Mobbanner'
import Mobupi from '../../compoents/mobpayment/Mobupi'
import Step from '../../compoents/mobstep/Mobsteps'
import SignUp from '../../../pages/SignUp';
import Footer from '../../compoents/mobfooter/Mobfooter'
import Boxlanding from '../../assets/box.png'
import Live from '../../assets/live.jpeg'
import { connect } from 'react-redux';

const graphContainerStyle = {
    width: "90%", // Set the width of the container
    height:"70%", // Set the height of the container
    background: "rgba(0, 0, 0, 0.8)",
    // backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
    // backgroundSize: '100% 50%', // Set the size of each background image
    // backgroundRepeat: 'no-repeat', // Prevent image repetition
    // backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
    // border: "1px solid rgba(255, 255, 255, 0.5)"
  };
function Landing({rankingData}) {
    const [authError, setAuthError] = useState(false);


  
  return (
    <div className='mobile-main'>
      <Mobilenavbar/>
      <div className='landing-graph'>
                
           
                <div style ={{width:'80vw' , height:'40vh', display:"flex", justifyContent:"center",alignItems:'center',marginLeft:'10vw' }} >
                <div  style ={graphContainerStyle}>
                <Graph setAuthError={setAuthError} authError={authError} />
    
                </div>
                </div>
                </div>

                <div className='mob-mainlatest' style={{height:'50%'}}>
                <div className='mob-latest'>
                    <div className='mob-tableicon'>
                    <img src={Boxlanding} alt="" />

                    </div>

                    
                <h2 className='mob-winning'>Latest winnings</h2>
                <div className='mob-livebutton'>
                    <img src={Live} />
                </div>
                

                </div>
                <div className='mob-ranking' style={{width:'90vw' , height:'40vh', display:"flex", justifyContent:"center",alignItems:'center',right:'17vw',     marginLeft: "auto", marginRight: "auto" }}>
                <div style={{height:'80%'}}>
                <Ranking rankingData={rankingData} />
                </div>

                </div>
                
            
                </div>
                
      <Mobbanner/>
      <Mobupi/>
      <Step/>
      <div className='mob-signup'>
      <SignUp/>
      <Footer/>

      </div>
      
      
    </div>
  )
}

  export default Landing;
