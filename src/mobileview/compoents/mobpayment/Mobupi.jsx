import React from 'react'
import './Mobupi.css'

import img from '../../assets/paymnet/upi.png'
function Mobupi() {
  const handleScrollToSignUp = () => {
    const signUpSection = document.getElementById('signUp-section');
    signUpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='upi-main-container'>
    <div className="upi-payment">
  <div className="upi-secure">
    <p className='upi-easy'>Secure & Easy</p>
    <p className="upi-wayto">way to <br></br>Get Started.</p>
    
    <div className="upi-gateway">
    <img  src={img} alt="Payment Gateway" />
  </div>
  </div>
  
  <div className='upi-button'>
  <button className='upi-buycoins' onClick={handleScrollToSignUp} >buy coins now</button>
  </div>
  
 
 



  
</div>
<div id='signup-section'></div>
  </div>
  )
}

export default Mobupi
