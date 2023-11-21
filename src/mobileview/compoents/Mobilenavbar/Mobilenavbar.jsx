import React from 'react';
import './mobilenavbar.css'
import mobilelogo from '../../assets/logo_dark.png'
import Button from 'react-bootstrap/Button';
import Arrow from '../../assets/arrow-right.svg'
import { useNavigate } from 'react-router-dom';

function Mobilenavbar() {
  const navigate = useNavigate();
  return (
    <div className='nav-mob-main'>
        <div className='nav-mob'>
        <div className='mob-logo'>
        <img src={mobilelogo} alt="" />

        </div>
        <div className='mob-button'>
            <div className='mob-login'>
            <Button variant="outline-primary" onClick={() => navigate('/login')} >Log In</Button>{' '}
            </div>
            <div className='mob-signup'>
            <Button variant="primary" onClick={() => navigate('/sign-up')}> Sign up </Button> 
                            
                  
            </div>

        </div>


        </div>
       
        <div className='mob-header'>
        <div className='mob-electro'>
            <h2>Electro5050</h2>
            <h2 className='mob-text'> World’s First Bidding Game Platform</h2>
            <h3 className='mob-every'onClick={() => navigate('/sign-up')} >WIN EVERY 30 SECONDS</h3>
            <button type="button" class="mob-bidnow">BID NOW <img src={Arrow }alt="" /></button>
        </div>

        </div>

      
    </div>
  )
}

export default Mobilenavbar


