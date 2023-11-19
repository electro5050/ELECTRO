import React from 'react'
import './mobilenavbar.css'
import mobilelogo from '../../assets/logo_dark.png'
import Button from 'react-bootstrap/Button';
import Arrow from '../../assets/arrow-right.svg'

function Mobilenavbar() {
  return (
    <div className='nav-mob-main'>
        <div className='nav-mob'>
        <div className='mob-logo'>
        <img src={mobilelogo} alt="" />

        </div>
        <div className='mob-button'>
            <div className='mob-login'>
            <Button variant="outline-primary" >Log In</Button>{' '}
            </div>
            <div className='mob-signup'>
            <Button variant="primary"> Sign up </Button> 
                            
                  
            </div>

        </div>
        <div className='mob-header'>
        <div className='mob-electro'>
            <h2>Electro5050</h2>
            <h2 className='mob-text'> World’s First Bidding Game Platform</h2>
            <h3 className='mob-every'>WIN EVERY 30 SECONDS</h3>
            <button type="button" class="mob-bidnow">BID NOW <img src={Arrow }alt="" /></button>
        </div>

        </div>

        </div>
       

      
    </div>
  )
}

export default Mobilenavbar


