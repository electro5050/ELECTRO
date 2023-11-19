import React from 'react';
import './Payment.css'
import img2 from '../../assets/images/payment/Group 131 .png'
import { useNavigate } from 'react-router-dom';
function Payments() {
  const navigate = useNavigate();
  return (
    <div className='grandient02'>
      <div className="payment">
    <div className="secure">
      <h1 className='easy'>Secure & Easy</h1>
      <div className="wayto">way to <br></br>Get Started.</div>
      <button className='buycoins' onClick={() => navigate('/sign-up')}>buy coins now</button>
      
    </div>
    <div className="gateway">
      <img src={img2} alt="Payment Gateway" />
    </div>
  </div>
    </div>
  )
}

export default Payments