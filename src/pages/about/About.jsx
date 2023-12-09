import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/images/logo/logo_dark.png'
import './About.css'
function About() {
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
        <h1 className='about'>ABOUT US</h1>
            <div className='about-condition'>
                <div className='about-text'>
                    
                <p className='about-contents'>
                    <h2 className='about-us'>       Welcome to Electro 50-50, the world's first and most innovative bidding platform     </h2>
                    Designed for enthusiasts seeking a unique and thrilling gaming experience. Unlike traditional platforms, Electro 50-50 introduces a revolutionary 50-50 chance of winning, emphasising skill over luck. Our platform combines entertainment, skill-based bidding, and the potential for significant earnings, creating an unparalleled gaming adventure.<br></br><br></br>
                   <p className='about-heading'>Mission:<br></br><br></br></p> 

                    At Electro 50-50, our mission is to be the catalyst for change in the local casino markets and betting platforms. We aim to address prevalent issues such as low chances of winning, high commissions, hidden charges, and the risk of financial piracy. Through our commitment to innovation and fairness, we aspire to revolutionise the gaming industry by providing a transparent and rewarding online bidding solution.<br></br><br></br>
                    <p className='about-heading'>Key Features:<br></br><br></br></p>
                    
                      - **50-50 Chance of Winning:** Experience a bidding platform where skill takes precedence, offering a fair 50-50 chance of winning for every user, unlike traditional betting or trading platforms.<br></br>
                      - **30 Seconds:** Win every 30 seconds and instantly withdraw your winnings.<br></br>
                      - **User-Friendly:** Our platform follows an easy 5-step process: Sign Up, Buy Coins, Participate, Bid and Win, Redeem.<br></br>
                      - **Referral Bonus:** Enjoy a 10% referral bonus, up to $100, even before making your first deposit.<br></br>
                      - **Secure Payment Methods:** We offer convenient and secure digital transactions, including traditional methods and cryptocurrency. Our multi-layered defences and encryption protocols ensure the safeguarding of data and secure financial transactions.<br></br>
                      - **VIP Membership:** Elevate your gaming journey with exclusive benefits and rewards by enrolling in our VIP Membership program. Enjoy priority support, event invitations, complimentary accommodations, and more.<br></br>
                      - **24/7 Customer Support:** Our dedicated customer support team is available around the clock to assist you. <br></br><br></br>
                      <p className='about-heading'>The Ultimate Online Bidding Experience:
                      '<br></br><br></br></p>

                      Prepare to step into a world where strategy, chance, and exhilaration converge to create a gaming adventure like no other. Welcome to Electro5050, the pioneer of the online bidding realm, where players have a 50% to 70% chance of winning double earnings 200% with each bid.<br></br><br></br>
                      At Electro5050, we've reimagined the concept of bidding, infusing it with an electrifying twist that sets us apart from the rest. Our innovative platform isn't just a game—it's a journey of anticipation, excitement, and the rush of victory. Here, every bid carries the potential to not only secure your triumph but to also double your rewards, making every winning moment even sweeter.<br></br><br></br>

                      What sets Electro5050 apart is our commitment to revolutionising entertainment. We've harnessed cutting-edge technology to introduce an entirely new dimension to bidding games, transforming them into heart-pounding experiences that keep you on the edge of your seat. With a blend of skill, strategy, and an element of chance, we've created a platform where every decision you make shapes your destiny.<br></br><br></br>
                      Our community is more than a collection of players; it's a global network of passionate individuals who share a common enthusiasm for the art of bidding. Connect with fellow gamers, engage in friendly rivalries, and forge lasting connections as you navigate the challenges and triumphs of the bidding floor. Whether you're a seasoned strategist or new to the world of online gaming, Electro5050 welcomes you to dive into an adventure that promises unmatched thrills, unforgettable moments, and the prospect of doubling your earnings with every winning bid. Get ready to redefine your gaming experience. Get ready to challenge the odds. Get ready for Electro5050.<br></br><br></br>

                      Join us today and embrace the future of online bidding gaming.<br></br><br></br>
                      <p className='about-heading'>Tagline:<br></br><br></br></p>
                      "Elevate Your Bids, Elevate Your Life: Electro 50-50, The Ultimate Destination for Winning!".<br></br><br></br>

               
                </p>

               
                   
                </div>
                
            </div>
        </div>
        
       


    </div>
  
</div>
  )
}

export default About
