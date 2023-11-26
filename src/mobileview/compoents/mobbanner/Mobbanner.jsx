import React, { useState, useEffect } from 'react';
import './Mobbanner.css'
import { useNavigate } from 'react-router-dom';
import BannerA from '../../assets/banners/b4.png'
import BannerB from '../../assets/banners/b5.png'

import BannerD from '../../assets/banners/b6.png'
import BannerE from '../../assets/banners/b7.png'

import BannerG from '../../assets/banners/b8.png'
import BannerH from '../../assets/banners/b4.png'


function Mobbanner() {
  const handleScrollToSignUp = () => {
    const signUpSection = document.getElementById('signUp-section'); // Replace 'signup-section' with the ID of your sign-up section
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    BannerA,
    BannerB,
    
    
    
   
  ];
  const bannerImages2 = [
    
    BannerD,
    BannerE,
    
   
    
    
   
  ];
  const bannerImages3 = [
    
    BannerG,
    BannerH,
    
   
    
    
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === bannerImages.length - 1 ? 0 : prevBanner + 1
      );
    }, 3000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [bannerImages.length]);
  return (
    <div className='mob-banner-main'>
    <div className='mob-baner-page' >
    

    <div className='mob-banners-container'>
      <div className='mob-baner-first' style={{backgroundImage: `url(${bannerImages[currentBanner]})`, transition: 'background-image 0.3s ease'}}>
        <div className='mob-text01'>
          <div className='background-container'>

          
          <div className='mob-opacity'>
          <p className='mob-text-a'>World’s ONLY bidding game Platform that gives ALL players</p>

          </div>

          
          <p className='mob-text-b'>50-50</p>
          
          
          
          
          
          <p className='mob-text-c'>winning chance</p>
          </div>
          <button className='mob-plybutton'  onClick={handleScrollToSignUp}>Play Now!</button>
        </div>
      </div>
     
      
    </div>
    
    <div className='mob-baner-3' style={{backgroundImage: `url(${bannerImages2[currentBanner]})`, transition: 'background-image 0.3s ease'}}>

<div className='mob-text03'>
  
    <p className='mob-text-e'>Earn</p>
  <p className='mob-text-f'>2x</p>
  <div className='mob-onvery'>
  <p className='mob-text-g'>on every Bid</p>
  <p className='mob-text-h'>double your coins</p>
  </div>

  
  
  
  
</div>
<div className='mob-endtext'>
    <p className='mob-text-i'>“the best bidding game <br></br>experience in the world”</p>
    <button className='mob-plybutton03' type="button"  onClick={handleScrollToSignUp}>bid now</button>
  </div>
  
  
  
</div>

<div className='mob-baner-2'  style={{backgroundImage: `url(${bannerImages3[currentBanner]})`, transition: 'background-image 0.3s ease'}}>

<div className='mob-text02'>
  <div className='text02-box'>

  
  <div className='mob-text-int'>INTRODUCING</div>
  <p className='mob-text-vip'>VIP Membership</p>
  <div className='mob-membership'>
  <p className='mob-text-benefits'>Unimaginable Benefits </p>
  <p className='mob-text-invest'>invest more earn MORE</p>
 
  </div>
  </div>
  <div className='win-button-container'>
 
  <button className='mob-winbutton' type="button"  onClick={handleScrollToSignUp}>bid now</button>
  </div>
 
  
 
  
</div>

 
  

    
   
</div>






  
  </div>
  <div id='SignUp-section'></div>
  </div>
  )
}

export default Mobbanner
