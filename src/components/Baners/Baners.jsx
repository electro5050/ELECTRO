// Baners.js
import React, { useState, useEffect } from 'react';
import './baner.css';

import { useNavigate } from 'react-router-dom';
import Banner1 from '../../assets/images/banners/b8.png'
import Banner2 from '../../assets/images/banners/b4.png'

import Banner4 from '../../assets/images/banners/b6.png'
import Banner5 from '../../assets/images/banners/b5.png'

import Banner7 from '../../assets/images/banners/b7.png'
import Banner8 from '../../assets/images/banners/b3.png'




function Baners() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    Banner1,
    Banner2,
  
    
   
  ];
  const bannerImages2 = [
    Banner4,
    Banner5,
   
    
   
    
    
   
  ];
  const bannerImages3 = [
    Banner7,
    Banner8,
   
    
   
    
    
   
  ];
  const handleScrollToSignUp = () => {
    const signUpSection = document.getElementById('signUp-section'); // Replace 'signup-section' with the ID of your sign-up section
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === bannerImages.length - 1 ? 0 : prevBanner + 1
      );
    }, 3000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [bannerImages.length]);
  return (
    <div className='banner-main'>
    <div className='baner-page' >
    

    <div className='banners-container'>
      <div className='baner-first' style={{backgroundImage: `url(${bannerImages[currentBanner]})`, transition: 'background-image 0.3s ease'}}>
        <div className='text01'>
          <div className='desk-background-container'>

          
          <div className='opacity'>
          <p className='text-a'>World’s ONLY bidding game Platform that gives ALL players</p>

          </div>

          
          <p className='text-b'>50-50</p>
          
          
          
          
          
          <p className='text-c'>winning chance</p>
          </div>
          <div className='playbutton-1'>
          <button className='plybutton' onClick={handleScrollToSignUp} >Play Now!</button>
          </div>
         
        </div>
      </div>
     
      
    </div>
    
    <div className='baner-3' style={{backgroundImage: `url(${bannerImages2[currentBanner]})`, transition: 'background-image 0.3s ease'}}>

<div className='text03'>
  
    <p className='text-e'>Earn</p>
  <p className='text-f'>2x</p>
  <div className='onvery'>
  <p className='text-g'>on every Bid</p>
  <p className='text-h'>double your coins</p>
  </div>

  
  
  
  
</div>
<div className='endtext'>
    <p className='text-i'>“the best bidding game <br></br>experience in the world”</p>
    <button className='plybutton03' type="button"  onClick={handleScrollToSignUp}>bid now</button>
  </div>
  
  
  
</div>

<div className='baner-2'  style={{backgroundImage: `url(${bannerImages3[currentBanner]})`, transition: 'background-image 0.3s ease'}}>

<div className='text02-desktop'>
  <div className='desk-text02-box'>

  
  <div className='text-int'>INTRODUCING</div>
  <p className='text-vip'>VIP Membership</p>
  <div className='membership'>
  <p className='text-benefits'>Unimaginable Benefits </p>
  <p className='text-invest'>invest more earn MORE</p>
 
  </div>
  </div>
  <div className='win-button'>
 
  <button className='winbutton' type="button" onClick={handleScrollToSignUp} >bid now</button>
  </div>
 
  
 
  
</div>

 
  

    
   
</div>






  
  </div>
  <div id='signup-section'></div>
 
  </div>
  );
}

export default Baners;
