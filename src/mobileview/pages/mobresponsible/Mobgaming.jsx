import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo_dark.png'
import './mobgaming.css'

function Mobgaming() {
    const navigate = useNavigate();
  return (
    <div className='mobterms-main-container'>
    <div className='mobterms-main'>
        <div className='mobterms-nav'>
            <div className='mobterms-logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='mobterm-home'>
            <a href="/" className="mobhome-link">HOME</a>
            </div>
            <div className='mobterms-button'>
                <div className='mobterm-login'>
                <Button variant="outline-primary" onClick={() => navigate('/login')} >Log In</Button>{' '}
                </div>
                <div className='mobterm-signup'>
                <Button variant="primary" onClick={() => navigate('/')}> Sign Up </Button>
                </div>
            </div>


        </div>
        <div className='mobterm-header'>
        
            <div className='mobterm-links'>
                <a href="/term" className="mobother-link">Terms and Conditions</a>
                <a href="/policy" className="mobother-link">Privacy Policy</a>
                <a href="/users" className="mobother-link">User Agreement</a>
                <a href="/" className="mobterm-link">responsible gaming</a>
               

            </div>
            <div className='mobterms-condition'>
                <div className='mobterms-text'>
                   <p className='mobterms-contents'>
                   <h2 className='responsible'>ELECTRO5050 - Responsible Gaming Guidelines</h2>
                Welcome to ELECTRO5050!<br></br><br></br>
                ELECTRO5050 is an exciting online bidding game that uses virtual coins for gameplay. Players can purchase these coins with real money and also have the option to sell them back and <br></br>
                withdraw funds to their accounts. However, like any game involving real money, there are important guidelines and considerations every player should be aware of. <br></br><br></br>
                Understand the Risks<br></br>
                Game of Chance: Remember, ELECTRO5050 is a game that involves elements of chance. While you can win, there is also a possibility of losing.<br></br><br></br>


                Invest Responsibly: Only bid with amounts you are comfortable losing. The thrill of the game should not lead to financial distress.<br></br><br></br>

                No Guaranteed Wins: Every game is independent, and past wins do not guarantee future successes. <br></br><br></br>

                Playing Within Limits<br></br><br></br>

                Set Your Limits: Before playing, decide on a budget. Stick to it regardless of wins or losses.<br></br><br></br>

                Take Breaks: Regular breaks help maintain perspective and control over your gaming habits.<br></br><br></br>

                Track Your Spending: Keep an eye on how much you're spending and how often you play.<br></br><br></br>

                Recognizing Problematic Behaviour<br></br><br></br>

                Stay In Control: If you find yourself playing more than intended or spending beyond your budget, it might be time to reassess your gaming habits.<br></br><br></br>

                Seek Help: If gaming starts to interfere with your daily life, don't hesitate to seek professional advice or support.<br></br><br></br>

                Age Restriction and Legal Compliance<br></br><br></br>

                Age Verification: Players must be of legal age to participate in ELECTRO5050.<br></br><br></br>

                Legal Compliance: Ensure you are in compliance with local laws regarding online gaming and betting.<br></br><br></br>

                Contact Us<br></br><br></br>

                Support and Assistance: Our team is here to help with any questions or concerns about responsible gaming.<br></br><br></br>

                Contact us at support@electro5050.com.<br></br><br></br>
                Play Responsibly!<br></br><br></br>

                At ELECTRO5050, we encourage responsible gaming as a form of entertainment. Enjoy the game,<br></br>
                but always play wisely and within your means.<br></br><br></br>

                This content aims to inform and protect your users by promoting responsible gaming practices,<br></br>
                highlighting the risks involved, and providing guidance on maintaining control while enjoying the<br></br>
                game.<br></br><br></br><br></br>
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

export default Mobgaming