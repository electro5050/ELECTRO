import React, { useState, useEffect } from 'react';
import './Mobbanner.css'
import { useNavigate } from 'react-router-dom';
import BannerA from '../../assets/mobbanner/ma.png'
import BannerB from '../../assets/mobbanner/mb.png'
import BannerC from '../../assets/mobbanner/m3.png'
import BannerD from '../../assets/mobbanner/b1.png'
import BannerE from '../../assets/mobbanner/b2.png'
import BannerF from '../../assets/mobbanner/b6.png'
import BannerG from '../../assets/mobbanner/0ab300b303ca1649ad631abb9aa5e72e.png'
import BannerH from '../../assets/mobbanner/27026be076ec03e39f95fa0f585684b1.png'
import BannerI from '../../assets/mobbanner/9d56d697ee2cf25a885ed54cf38ea779.png'

function Mobbanner() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    BannerA,
    BannerB,
    BannerC,
    
    
   
  ];
  const bannerImages2 = [
    
    BannerD,
    BannerE,
    BannerF,
   
    
    
   
  ];
  const bannerImages3 = [
    
    BannerG,
    BannerH,
    BannerI,
   
    
    
   
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
      <div className='mob-baner-first' style={{backgroundImage: `url(${bannerImages[currentBanner]})`}}>
        <div className='mob-text01'>
          <p className='mob-text-a'>World’s ONLY bidding game Platform that gives ALL players</p>
          <p className='mob-text-b'>50-50</p>
          <p className='mob-text-c'>winning chance</p>
          <button className='mob-plybutton' >Play Now!</button>
        </div>
      </div>
     
      
    </div>
    
    <div className='mob-baner-3' style={{backgroundImage: `url(${bannerImages2[currentBanner]})`}} >
<div className='mob-text03'>
  <p className='mob-text-e'>Earn</p>
  <p className='mob-text-f'>200%</p>
  <div className='mob-onvery'>
  <p className='mob-text-g'>on every Bid</p>
  <p className='mob-text-h'>double your coins</p>
  </div>
  
  
</div>
<div className='mob-endtext'>
    <p className='mob-text-i'>“the best bidding game <br></br>experience in the world”</p>
    <button className='mob-plybutton03' type="button" >bid now</button>
  </div>
</div>

<div className='mob-baner-2'  style={{backgroundImage: `url(${bannerImages3[currentBanner]})`}} >
<div className='mob-text02'>
  <div className='mob-text-int'>introducing</div>
  <p className='mob-text-vip'>VIP Membership</p>
  <div className='mob-membership'>
  <p className='mob-text-benefits'>Unimaginable Benefits </p>
  <p className='mob-text-invest'>invest more earn MORE</p>
  
  </div>
  
  
</div>
<div className='mob-endtext'>
    
    <button className='mob-winbutton' type="button" >bid now </button>
  </div>
</div>






  
  </div>
  </div>
  )
}

export default Mobbanner
