import React from 'react'
import './refund.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/images/logo/logo_dark.png'

function Refund() {
    const navigate = useNavigate();
  return (
    <div className='terms-main-container'>
    <div className='terms-main'>
        <div className='terms-nav'>
            <div className='terms-logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='term-home'>
            <a href="/" className="home-link">HOME</a>
            </div>
            <div className='terms-button'>
                <div className='term-login'>
                <Button variant="outline-primary" onClick={() => navigate('/login')} >Log In</Button>{' '}
                </div>
                <div className='term-signup'>
                <Button variant="primary" onClick={() => navigate('/')}> Sign Up </Button>
                </div>
            </div>


        </div>
        <div className='term-header'>
        
            <div className='term-links'>
                <a href="/terms" className="other-link">Terms and Conditions</a>
                <a href="/Privacy" className="other-link">Privacy Policy</a>
                <a href="user" className="other-link">User Agreement</a>
                <a href="/" className="term-link">responsible gaming</a>
               

            </div>
            <div className='terms-condition'>
                <div className='terms-text'>
                    
                <p className='terms-contents'>
                    <h2 className='responsible'>Payments and transactions terms and conditions for electro5050</h2>
                    1. Accurate Information:<br></br><br></br>
When engaging in payments, purchases, and transactions within our online platform, it is imperative 
that users provide accurate and valid payment information. We rely on the integrity of the 
information provided to ensure seamless and secure transactions.<br></br><br></br>
2. No Refund for Gameplay:<br></br><br></br>
Our online bidding game, "Outcomes Electro5050," operates on a competitive bidding model. We do 
not entertain refund requests for virtual items, coins, or currency spent within the Game due to 
gameplay outcomes, including losses or unsuccessful bids. Users are encouraged to exercise 
prudence and strategic decision-making during gameplay.<br></br><br></br>
3. Payment Failures:<br></br><br></br>
In the event of a payment failure where funds are deducted from your bank account, but virtual 
items or coins are not received, please promptly contact our dedicated support team. We prioritize 
the resolution of such issues and will conduct a thorough investigation to ensure a swift resolution.<br></br><br></br>
4. Eligibility for Refund:<br></br><br></br>
Refunds may be considered in documented cases of payment failures or erroneous transactions. 
However, each case is subject to our review and approval. Users must adhere to the outlined 
procedures for refund requests.<br></br><br></br>
5. Payment Verification:<br></br><br></br>
If you encounter a payment failure, kindly provide us with the necessary payment details, including 
the transaction ID and date. Our diligent team will verify the payment information and conduct a 
comprehensive investigation to identify and rectify the issue.<br></br><br></br>
6. Refund Processing Time:<br></br><br></br>
Upon approval of a refund, the processing time will typically range from 2 to 7 business days from 
the date of approval. Please be aware that the exact timing may vary depending on your payment 
provider and banking institution.<br></br><br></br>
7. Original Payment Method:<br></br><br></br>
Refunds will be issued exclusively to the original payment method used for the transaction. In cases 
where the original payment method is unavailable, we reserve the right to use an alternative 
method at our discretion.<br></br><br></br>
8. Refund Requests:<br></br><br></br>
If you believe you qualify for a refund due to a payment failure, promptly contact our support team 
at [Support Email]. When reaching out, provide relevant transaction details and any supporting 
documentation to facilitate a swift and accurate resolution.<br></br><br></br>
9. Non-Refundable Circumstances:<br></br><br></br>
Refunds will not be entertained for any circumstances other than documented payment failures or 
erroneous transactions. This includes losses incurred during gameplay, as outcomes within the Game 
are part of its competitive nature.<br></br><br></br>
10. User Responsibility and Agreement:<br></br><br></br>
Users acknowledge and agree that they are responsible for the accuracy of the provided payment 
information. Any discrepancies leading to payment failures or erroneous transactions due to 
inaccurate details will not be eligible for refunds. By participating in transactions within our 
platform, users affirm their understanding and acceptance of these terms and conditions, 
contributing to a secure and transparent gaming experience for all participants.<br></br><br></br>
               
                </p>

               
                   
                </div>
                
            </div>
        </div>
        
       


    </div>
  
</div>
  )
}

export default Refund