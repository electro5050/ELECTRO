import React from 'react';
import './Payment.css'
import img2 from '../../assets/images/payment/Group 131 .png'
import { useNavigate } from 'react-router-dom';
function Payments() {
  const navigate = useNavigate();
  const handleScrollToSignUp = () => {
    const signUpSection = document.getElementById('signUp-section'); // Replace 'signup-section' with the ID of your sign-up section
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  return (
    <div className='upi-container'>
    <div className="upi-payment-box">
  <div className="secure">
    <p className='easy'>Secure & Easy</p>
    <p className="wayto">way to <br></br>Get Started.</p>
    <div className='upi-payment-button'>
  <button className='upi-payment-buycoins' onClick={handleScrollToSignUp}>buy coins now</button>
  </div>
    
   
  </div>
   <div className="main-gateway">
   <div className="desk-gateway">
    <img  src={img2} alt="Payment Gateway" />
  </div>
  </div>
  
  
  
 
 



  
</div>
<div id='signup-section'></div>

  </div>
  )
}

export default Payments