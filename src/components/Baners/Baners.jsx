// Baners.js
import React, { useState, useEffect } from 'react';
import './baner.css';

import { useNavigate } from 'react-router-dom';
import Banner1 from '../../assets/images/baners/b1.png'
import Banner2 from '../../assets/images/baners/b2.png'
import Banner3 from '../../assets/images/baners/b3.png'
import Banner4 from '../../assets/images/baners/b4.png'
import Banner5 from '../../assets/images/baners/b5.png'
import Banner6 from '../../assets/images/baners/b6.png'

function Baners() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    Banner1,
    Banner2,
    Banner3,
    
   
  ];
  const bannerImages2 = [
    Banner4,
    Banner5,
    Banner6,
    
   
    
    
   
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
    <div className='garndient'>
      <div className='baner-page' >
      

      <div className='banners-container'>
        <div className='baner-first' style={{backgroundImage: `url(${bannerImages[currentBanner]})`}}>
          <div className='text01'>
            <p className='text-a'>World’s ONLY bidding game Platform that gives ALL players</p>
            <p className='text-b'>50-50</p>
            <p className='text-c'>winning chance</p>
            <button className='plybutton' type="button" onClick={() => navigate('/sign-up')}>Play Now!</button>
          </div>
        </div>
       
        
      </div>
      
      <div className='baner-3' style={{backgroundImage: `url(${bannerImages2[currentBanner]})`}}>
  <div className='text03'>
    <div className='text-e'>Earn</div>
    <p className='text-f'>200%</p>
    <div className='onvery'>
    <p className='text-g'>on every Bid</p>
    <p className='text-h'>double your coins</p>
    </div>
    
    
  </div>
  <div className='endtext'>
      <p className='text-i'>“the best bidding game <br></br>experience in the world”</p>
      <button className='plybutton03' type="button" onClick={() => navigate('/sign-up')}>bid now</button>
    </div>
</div>





    
    </div>
    </div>
  );
}

export default Baners;
