import React from 'react';
import './Payment.css'
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import img2 from '../../assets/images/payment/Payments.svg'
function payments() {
  return (
    <div className='grandient02'>
      <div className="payment">
    <div className="secure">
      <h1 className='easy'>Secure & Easy</h1>
      <div className="wayto">way to <br></br>Get Started.</div>
      <button className='buycoins'>buy coins now</button>
      
    </div>
    <div className="gateway">
      <img src={img2} alt="Payment Gateway" />
    </div>
  </div>
    </div>
  )
}

export default payments