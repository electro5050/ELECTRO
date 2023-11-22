
import React, { useState,useEffect } from 'react';
import axios from 'common/electra_axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Payment from '../components/Upi/Payment'
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import Graph from '../electra/components/Common/Games/Graph';
import SignUp from './SignUp';
import Ranking from '../electra/components/Common/Games/TopWinnersTable'
import Picture from '../components/Baners/Baners'
import Steps from '../components/steps/Steps'
import Boxlanding from '../assets/images/steps/box.png'
// import liveAuctionData from '../assets/fake-data/data-live-auction';
// import LiveAuction from '../components/layouts/LiveAuction';
// import TopSeller from '../components/layouts/TopSeller';
// import topSellerData from '../assets/fake-data/data-top-seller'
// import TodayPicks from '../components/layouts/TodayPicks';
// import todayPickData from '../assets/fake-data/data-today-pick';
// import PopularCollection from '../components/layouts/PopularCollection';
// import popularCollectionData from '../assets/fake-data/data-popular-collection';
// import Create from '../components/layouts/Create';
import { Element } from 'react-scroll';
import Live from '../assets/images/grandient/live.jpeg'
import MobileLanding from "mobileview/pages/mobile/Landing";
import { connect } from 'react-redux';

const graphContainerStyle = {
    width: "70%", // Set the width of the container
    height:"85%", // Set the height of the container
    background: "rgba(0, 0, 0, 0.8)",
    // backgroundImage: 'url(/assets/electra/silver-graph.png), url(/assets/electra/gold-graph.png)', // Set the two background images
    // backgroundSize: '100% 50%', // Set the size of each background image
    // backgroundRepeat: 'no-repeat', // Prevent image repetition
    // backgroundPosition: '0% 0%, 0% 100%', // Position the two background images vertically
    // border: "1px solid rgba(255, 255, 255, 0.5)"
  };

const Home01 = ({websocketData}) => {
    const [authError, setAuthError] = useState(false);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    // Update window width on resize
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    
    useEffect(() => {
        setIsMobile(windowWidth < 768)
      }, [windowWidth]);


      const [rankingData, setRankingData] = useState([]);

  useEffect(() => {

    if (websocketData && websocketData.type === 'gameEnded') { 

      setRankingData(websocketData.winners);
    }

  }, [websocketData]);

 
    return (
        <>
     
    {!isMobile ? (
        <div className='home-landing'>
            <Header />
            <Slider data={heroSliderData} />
            <div className='landing-graph'>
                
           
            <div style ={{width:'100vw' , height:'60vh', display:"flex", justifyContent:"center",alignItems:'center',}} >
            <div  style ={graphContainerStyle}>
                
            <Graph  setAuthError={setAuthError} authError={authError}  />

            </div>
            </div>
            </div>
            <div className='mainlatest' style={{width: '70%',marginLeft:'auto',marginRight:'auto',height:'50%'}}>
                <div className='latest'>
                    <div className='tableicon'>
                    <img src={Boxlanding} alt="" />

                    </div>
                    
                <h2>Latest winnings</h2>
                <div className='livebutton'>
                    <img src={Live} />
                </div>
                

                </div>
                <div className='landing-ranking' style={{width:'70vw' , height:'70vh', display:"flex", justifyContent:"center",alignItems:'center',right:'5vw' }} >
                
                <div style={{height:'80%'}}>
                <Ranking rankingData={rankingData} />
                </div>
            

                </div>
                
            
                </div>
          

            {/* <LiveAuction data={liveAuctionData} /> */}
            {/* <TopSeller data={topSellerData} /> */}
            {/* <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} /> */}
            {/* <Create /> */}
            <Element name='signup-section' className='element'>
           
            </Element>
            <Picture/>
            <Payment />
            <Steps/>
            <SignUp/>
            <Footer />
           
        </div>
        ) : <MobileLanding rankingData={rankingData}/>
    }

        </>
    );
}

const mapStateToProps = (state) => ({
    websocketData: state.websocketReducer.websocketData,
  });
  
  export default connect(mapStateToProps)(Home01);