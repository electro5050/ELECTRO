// Baners.js
import React from 'react';
import './baner.css';
import pic01 from '../../assets/images/baners/7b15e980925f5b2039af3b47e1066542.png';

function Baners() {
  return (
    <div className='garndient'>
      <div className='baner-page'>
      <div className='banners-container'>
        <div className='baner-first'>
          <div className='text01'>
            <p className='text-a'>World’s ONLY bidding game Platform that gives ALL players</p>
            <p className='text-b'>50-50</p>
            <p className='text-c'>winning chance</p>
            <button className='plybutton' type="button">Play Now!</button>
          </div>
        </div>
        <div className='baner-2nd'>
         <p className='text02'>WELCOME TO THE WORLD<br></br> OF ELECTRO5050<br></br> “THE WORLD’S FIRST BIDDING GAME</p>
         <button className='plybutton2' type="button">bid now</button>
        </div>
        
      </div>
      
      <div className='baner-3'>
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
      <button className='plybutton03' type="button">bid now</button>
    </div>
</div>
    
    </div>
    </div>
  );
}

export default Baners;
