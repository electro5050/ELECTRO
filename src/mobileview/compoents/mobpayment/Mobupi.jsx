import React from 'react'
import './Mobupi.css'
import img from '../../assets/paymnet/Group 287 (1).png'
function Mobupi() {
  return (
    <div className='upi-main-container'>
    <div className="upi-payment">
  <div className="upi-secure">
    <h1 className='upi-easy'>Secure & Easy</h1>
    <div className="upi-wayto">way to <br></br>Get Started.</div>
    <button className='upi-buycoins' >buy coins now</button>
  
  </div>
 
 

<div className="upi-gateway">
    <img src={img} alt="Payment Gateway" />
  </div>

  
</div>
  </div>
  )
}

export default Mobupi
