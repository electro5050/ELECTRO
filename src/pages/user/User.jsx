import React from 'react'
import './user.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/images/logo/logo_dark.png'
function User() {
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
                <a href="/privacy" className="other-link">Privacy Policy</a>
                <a href="/" className="term-link">User Agreement</a>
                <a href="/responsible" className="other-link">responsible gaming</a>
               

            </div>
            <div className='terms-condition'>
                <div className='terms-text'>
                <p className='terms-contents'>
                This User Agreement ("Agreement") governs your use of the Electro5050 online bidding game ("Game") provided by CRAPSHOOTER ELECTRO GAME INNOVATIONS ("Company," "we," "us," or "our"). By accessing or using the Game, you agree to comply with and be bound by this Agreement, including our Terms and Conditions and Privacy Policy. If you do not agree with these terms, please do not use the Game.<br></br><br></br>
                1. Eligibility: You must be at least 18 years old to create an account and use the Game. By creating an account and accessing the Game, you represent and warrant that you are 18 years of age or older.<br></br><br></br>
                2. Acceptance of Terms and Conditions: To create an account and use the Game, you must read, understand, and agree to our Terms and Conditions. Your use of the Game constitutes your acceptance of these terms, which form a legally binding agreement between you and the Company.<br></br>
                3. Privacy Policy: Your privacy is important to us. By creating an account and using the Game, you also agree to our Privacy Policy, which outlines how we collect, use, and disclose your personal information. You acknowledge that your use of the Game may involve the collection and processing of personal data as described in the Privacy Policy.<br></br><br></br>
                4. Account Security: You are responsible for maintaining the security of your account credentials. You agree to notify us immediately of any unauthorized use or suspected breach of your account<br></br><br></br>
                5. Prohibited Activities: You agree not to use the Game for any purpose that is unlawful, harmful, fraudulent, or in violation of our terms. This includes, but is not limited to, using automated tools or bots, engaging in cheating or exploiting vulnerabilities, and engaging in activities that disrupt the experience of other users.
                6. Changes to the Agreement: We reserve the right to modify this Agreement at any time. Any changes will be effective upon posting the revised Agreement on the Game's platform. Your continued use of the
                Game after such changes indicates your acceptance of the revised Agreement.<br></br><br></br>
                7. Termination: We reserve the right to suspend, terminate, or restrict your access to the Game at our sole discretion, without prior notice, for any reason, including, but not limited to, violation of this Agreement.<br></br><br></br>
                8. Disclaimer of Warranties: The Game is provided "as is" and "as available." We do not make any warranties regarding the accuracy, reliability, or availability of the Game. Your use of the Game is at your own risk.<br></br><br></br>
                9. Limitation of Liability: To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.<br></br><br></br>
                10. Governing Law: This Agreement is governed by and construed in accordance with the laws of India/Kerala, without regard to its conflict of law principles. Contact Information: If you have any questions or concerns about this Agreement, please contact us at info@electro5050.com. By creating an account and using the Electro5050 Game, you acknowledge that you have read, understood, and agreed to this User Agreement, including our Terms and Conditions and Privacy Policy.<br></br><br></br><br></br><br></br>
                Last Updated: [Date]<br></br>
                CRAPSHOOTER ELECTRO GAME INNOVATIONS LLP.<br></br>
                info@electro5050.com<br></br>
                Wayanad, Kerala, India.<br></br>
                9778239776<br></br>
                -TO BE DETERMINED!<br></br>
                </p>

               
                   
                </div>
                
            </div>
        </div>
        
       


    </div>
  
</div>
  )
}

export default User
