import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo_dark.png'
import './Mobterms.css'
function Mobterms() {
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
                <a href="/" className="mobterm-link">Terms and Conditions</a>
                <a href="/policy" className="mobother-link">Privacy Policy</a>
                <a href="/users" className="mobother-link">User Agreement</a>
                <a href='/responsiblegm' className="mobother-link">responsible gaming</a>
               

            </div>
            <div className='mobterms-condition'>
                <div className='mobterms-text'>
                   <p className='mobterms-contents'>Welcome to Electro5050! By accessing and using our online bidding game, you agree to comply with the following terms and conditions:<br></br><br></br><br></br>
                   Introduction:<br></br><br></br>
                   The Ultimate Online Bidding Experience! Prepare to step into a world where strategy, chance, and exhilaration converge to create a gaming adventure like no other. Welcome to Electro5050, the pioneer of the online bidding realm, where players have a 50% to 70% chance of winning double earnings 100% with each bid.<br></br><br></br>
                   At Electro5050, we've reimagined the concept of bidding, infusing it with an electrifying twist that sets us apart from the rest. Our innovative platform isn't just a game—it's a journey of anticipation, excitement, and the rush of victory. Here, every bid carries the potential to not only secure your triumph but to also double your rewards, making every winning moment even sweeter.<br></br><br></br>
                   What sets Electro5050 apart is our commitment to revolutionizing entertainment. We've harnessed cutting-edge technology to introduce an entirely new dimension to bidding games, transforming them into heart-pounding experiences that keep you on the edge of your seat. With a blend of skill, strategy, and an element of chance, we've created a platform where every decision you make shapes your destiny.<br></br><br></br>
                   Our community is more than a collection of players; it's a global network of passionate individuals who share a common enthusiasm for the art of bidding. Connect with fellow gamers, engage in friendly rivalries, and forge lasting connections as you navigate the challenges and triumphs of the bidding floor. Whether you're a seasoned strategist or new to the world of online gaming, Electro5050 welcomes you to dive into an adventure that promises unmatched thrills, unforgettable moments, and the prospect of doubling your earnings with every winning bid. Get ready to redefine your gaming experience. Get ready to challenge the odds. Get ready for Electro5050.<br></br><br></br>
                   Join us today and embrace the future of online bidding gaming.<br></br><br></br><br></br>
                   Welcome to Electro5050—where every bid is an opportunity to electrify your gaming journey!<br></br><br></br><br></br>
                   General Terms:<br></br><br></br>
                   1. Acceptance of Terms: Welcome to Electro5050, the ultimate online bidding game. By accessing and using our platform, you acknowledge and agree to these terms and conditions. If you do not agree, we will update Terms and Conditions for the smooth running of our application, the user should agree the Terms and Conditions on each update otherwise the user cannot use the platform. please refrain from using the platform. Electro5050 may, at its sole and absolute discretion:<br></br><br></br>
                   • Restrict, suspend, or terminate any User's access to all or any part of Electro5050<br></br>
                   or<br></br>
                   Electro5050 Platform Services;<br></br><br></br>
                   • Change, suspend, or discontinue all or any part of the Electro5050 Platform Services;<br></br><br></br>
                   • Reject, move, or remove any material that may be submitted by a User;<br></br><br></br>
                   • Move or remove any content that is available on Electro5050 Platform;<b></b><br></br>
                   • Establish general practices and limits concerning use of Electro5050 Platform;<br></br><br></br>
                   • Referral to its users in form it deems fit ("refer bonus 10$ per each referral"). All such Referral<br></br>Bonuses shall be credited in wallet however the referred user has to purchase 100$ coins and<br></br>bid at-least 100$ minimum to achieve this offer.<br></br><br></br>
                   • Assign its rights and liabilities to all User accounts hereunder to any entity <br></br>(post such assignment intimation of such assignment shall be sent to all Users to their registered email ids)<br></br><br></br>
                   2. User Eligibility: The Service is not for use by (i) individuals under 18 years of age,<br></br>
                    (ii) individuals under the legal age of majority in their jurisdiction and <br></br>
                    (iii) individuals accessing the Service from jurisdictions from which it is illegal to do so.Electro5050 is not able to verify the legality of the Service in each jurisdiction and it is the User’s<br></br> responsibility to ensure that their use of the Service is lawful.<br></br><br></br>
                    3.User Account: To access certain features of Electro5050, you may need to create a user account. You are solely responsible for maintaining the confidentiality of your account <br></br>information and are liable for all activities under your account.<br></br><br></br>
                    1. Account Creation<br></br><br></br>
                    1.1 Eligibility: You must be at least 18 years old to create an account on the Electro5050 online bidding game ("Game"). By creating an account,<br></br> you affirm that you meet the age Requirement.<br></br><br></br>
                    1.2 Registration Information: You agree to provide accurate, complete, and up-to-date information during the registration process. This includes your email address,<br></br> Phone number and any other required details and should be exact match with verification documents.<br></br><br></br>
                    1.3 Account Credentials: You are responsible for maintaining the confidentiality of your account credentials,<br></br>including your username and password. You agree not to share your account information with anyone else.<br></br><br></br>
                    2. Account Security<br></br><br></br>
                    2.1 Unauthorized Use: You are solely responsible for any activities that occur under your account, whether or not you have authorized such activities.<br></br>If you suspect unauthorized access, or account breach company will not be responsible.<br></br><br></br>
                    2.2 Password Protection: Choose a strong and unique password for your account. Avoid using easily guessable information.<br></br> Regularly update your password for enhanced security. If a password breach occurs you can opt for password change by using forgot password.<br></br> However, company will not guarantee that your password will be recovered.<br></br><br></br>
                    2.3 Account hacked or lost: If you believe your account has been hacked, lost, or breached by a third party,Electro5050 will not be held responsible.<br></br> We employ top-of-the-line MD5 and SHA algorithms for security; therefore, in the event of any breach, the user will be solely responsible.<br></br><br></br>
                    3. Account Usage<br></br><br></br>
                    3.1 Personal Use: Your account is for personal use. You may not create multiple accounts<br></br> to gain unfair advantages.<br></br><br></br>
                    3.2 Accurate Information: You agree to provide truthful and accurate information<br></br> when creating your account and throughout your usage of the Game.<br></br><br></br>
                    4. Account Termination<br></br><br></br>
                    4.1 Termination by User: You have the right to terminate your account at any time by following the provided account closure procedures. You can only terminate your account if your wallet holds zero coins.<br></br> You can withdraw remaining coins as described in the withdrawal terms.<br></br> Otherwise, you cannot terminate your account.<br></br><br></br>
                    4.2 Termination by Company: We reserve the right to terminate or suspend your account, at our sole discretion, for reasons including, but not limited to, <br></br>violation of our Terms and Conditions, fraudulent activities, or inappropriate behaviour.<br></br><br></br>
                    5. Account Recovery<br></br><br></br>
                    5.1 Forgotten Password: If you forget your password, you can request a password reset through the provided mechanisms. <br></br>Follow the instructions to regain access to your account.<br></br><br></br>
                    5.2 Account Data: In the event of account recovery or password reset, you may need to provide certain verification<br></br> information to ensure the security of your account.<br></br><br></br><br></br>
                    4. Bidding and Gameplay:<br></br><br></br>
                    Electro5050 offers an innovative online bidding experience where players have a 50% to 70% chance of winning double earnings. If the user loses the game the deposited bid amount for that particular<br></br> game is deducted from wallet. Please not that NO extra amount is deducted. However, if the user wins the bid amount is doubled as the user will get 100% of the actual<br></br> deposited amount in the particular gameplay. Participation is subject to the rules, guidelines, and mechanics outlined on the Platform.<br></br><br></br>
                    5. Intellectual Property: All content on Electro5050, including but not limited to text, graphics, logos, and software, is protected by intellectual property rights. Unauthorized use, <br></br>reproduction, or distribution of this content is strictly prohibited.<br></br><br></br>
                    6. User Conduct: While using Electro5050, you agree not to engage in any conduct that violates our terms, infringes on intellectual property rights,,<br></br> or disrupts the platform's functionality.<br></br><br></br>
                    7. Privacy and Data Usage: By using Electro5050, you consent to the practices described in our Privacy Policy.<br></br> You acknowledge and agree that information provided by you is accurate and that we may use it as outlined in the Privacy Policy.<br></br><br></br>
                    8. Limitation of Liability: Electro5050 is provided on an "as is" basis. We disclaim any responsibility for losses, damages, or disruptions arising from your use of the platform.<br></br> You agree to use the platform at your own risk.<br></br><br></br>
                    9. Anti-Fraud Policy: We reserve the right to terminate or suspend accounts and access to Electro5050 for violations of these terms or any unlawful activity.<br></br> You may terminate your account at any time by following the platform's procedures.<br></br><br></br>
                    10. Amendments: We may update these terms periodically. Continued use of Electro5050 after changes <br></br>implies your acceptance of the revised terms. It is your responsibility to review the terms regularly.<br></br><br></br>
                    11. Your obligations:<br></br><br></br>
                    1. Account Usage<br></br><br></br>
                    1.1 Accurate Information: You agree to provide accurate, truthful, and up-to-date information when creating an account <br></br>and throughout your usage of the Ele ctro5050 online bidding game ("Game").<br></br><br></br>
                    1.2 Account Security: You are responsible for maintaining the security of your account credentials, including your username and password.<br></br> You must notify us immediately of any unauthorized use of your account.<br></br><br></br>
                    2. User Conduct<br></br><br></br>
                    2.1 Compliance with Laws: You agree to abide by all applicable laws and regulations while using the Game.You will not engage in any activities that violate<br></br>  intellectual property rights, privacy rights, or any other legal rights.<br></br> <br></br> 
                    2.2 Prohibited Activities: You are prohibited from engaging in any ctivity that disrupts, harms, or interferes with the functioning of the Game or the experience<br></br>  of other users. Prohibited activities include cheating, hacking, exploiting vulnerabilities, and any form of harassment.<br></br> <br></br> 
                    3. Content Submission<br></br><br></br>
                    3.1 User-Generated Content: Any content you submit or post within the Game, including messages, reviews, and comments, <br></br>must not infringe upon the rights of third parties. You are solely responsible for the content you submit.<br></br><br></br>
                    3.2 Compliance with Guidelines: You agree to adhere to our content guidelines and policies when submitting user-generated content.<br></br> We reserve the right to remove or moderate content that violates these guidelines.<br></br><br></br>
                    4. Payment and Transactions<br></br><br></br>
                    4.1 Accurate Information: When making payments, purchases, and transactions within the Game,<br></br> you agree to provide accurate and valid payment information.<br></br><br></br>
                    4.2 Fraudulent Activities: You are strictly prohibited from engaging in any fraudulent or unauthorized activities related to payments, transactions, or coin purchases. <br></br>Such activities will result in immediate action, including possible bans.<br></br><br></br>
                    5. Compliance with Terms<br></br><br></br>
                    5.1 Agreement Acceptance: By using the Game, you agree to comply with all terms and conditions outlined in this document, <br></br>including our Terms and Conditions, Privacy Policy, and any specific game
                    rules or guidelines.<br></br><br></br>
                    5.2 Termination for Violation: Failure to comply with your obligations as outlined in this section and <br></br>the entire Agreement may result in suspension or termination of your account<br></br><br></br>
                    12. Restricted Use:<br></br><br></br><br></br>
                    1. Prohibited Activities<br></br><br></br>
                    1.1 Unauthorized Access: You are strictly prohibited from accessing, using, or attempting to access or use<br></br>
                    the Electro5050 online bidding game ("Game") for any unauthorized or illegal purposes.<br></br><br></br>
                    1.2 Manipulation and Exploitation: You will not engage in any form of manipulation, cheating, hacking,<br></br> or exploiting vulnerabilities within the Game. This includes attempts to gain an unfair advantage or<br></br> disrupt the experience of other users.<br></br><br></br>
                    2. Intellectual Property<br></br><br></br>
                    2.1 Copyrights and Trademarks: You agree not to use, reproduce, distribute, or modify any intellectual property, including trademarks, logos, and copyrighted materials, associated with the Game without our explicit consent.<br></br><br></br>
                    3. User Data and Privacy
                    3.1 Unauthorized Data Collection: You are prohibited from collecting, harvesting, or using user data from the Game without our permission or as allowed by applicable laws.<br></br><br></br>
                    3.2 Privacy Violation: You will not engage in any activities that violate the privacy rights of other users, including sharing personal information without consent.<br></br><br></br>
                    4. Impersonation<br></br><br></br>
                    4.1 Identity Misrepresentation: You agree not to impersonate any person or entity, or falsely claim an affiliation with any person or entity, within the Game.<br></br><br></br>
                    5. Reverse Engineering and Decomplication<br></br><br></br>
                    5.1 Software Modifications: You will not reverse engineer, decompile, disassemble, modify, or create derivative works <br></br>based on the Game's software, except as permitted by applicable law.<br></br><br></br>
                    6. Third-Party Interference<br></br><br></br>
                    6.1 Third-Party Services: You agree not to use the Game to distribute, promote, or facilitate any third- party <br></br>services or content that violate our terms, applicable laws, or the rights of others.<br></br><br></br>
                    7. Legal Compliance<br></br><br></br>
                    7.1 Compliance with Laws: You agree to comply with all local, national, and international laws and regulations while using the Game.<br></br><br></br>
                    7.2 Export Restrictions: You cannot use the Game in violation of any export or sanctions restrictions imposed by applicable laws.<br></br><br></br>
                    8. Termination for Restricted Use<br></br><br></br>
                    8.1 Suspension and Termination: Engaging in restricted activities may result in immediate suspension or termination of your account without prior notice.<br></br><br></br><br></br>
                    13. Refund policy:<br></br><br></br>
                    1. No Refund for Game Loss<br></br><br></br>
                    1.1 No Refund for Gameplay: Outcomes Electro5050 online bidding game ("Game") operates on a competitive bidding model. We do not provide refunds for any virtual items, coins, or currency spent within the Game<br></br> due to gameplay outcomes, including losses or unsuccessful bids.<br></br><br></br>
                    2. Payment Failures<br></br><br></br>
                    2.1 Payment Failures: In the event of a payment failure where money is deducted from your bank account, but virtual items or coins are not received, <br></br>please contact our support team. We will investigate
                    and resolve the issue promptly.<br></br><br></br>
                    3. Refund Process<br></br><br></br>
                    3.1 Eligibility for Refund: Refunds may be provided in cases where there is a documented payment failure or an erroneous transaction.<br></br> Refunds are subject to our review and approval.<br></br><br></br>
                    3.2 Payment Verification: If you experience a payment failure, please provide us with the necessary payment details, including transaction ID and date.<br></br> Our team will verify the payment and investigate the issue.<br></br><br></br>
                    4. Timeframe for Refunds<br></br><br></br>
                    4.1 Refund Processing Time: If a refund is approved, it will be processed within 2 to 7 business days from the date of approval. Please note that the exact timing may vary depending <br></br>on your payment provider and banking institution.<br></br><br></br>
                    5. Refund Method<br></br><br></br>
                    5.1 Original Payment Method: Refunds will be issued to the original payment method used for the transaction. If the original payment method is unavailable, .<br></br>we may use an alternative method at our discretion.<br></br><br></br>
                    6. Contact Us<br></br><br></br>
                    6.1 Refund Requests: If you believe you are eligible for a refund due to payment failure, please contact our support team at [Support Email].<br></br> Provide relevant transaction details and any supporting
                    documentation.<br></br><br></br>
                    7. Exceptions<br></br><br></br>
                    7.1 Non-Refundable Circumstances: Refunds will not be provided for any circumstances other than payment failures or erroneous transactions.<br></br> This includes losses incurred during gameplay.<br></br><br></br><br></br>
                    14. Applicable Law & Jurisdiction:<br></br><br></br>
                    1. Governing Law<br></br><br></br>
                    1.1 Applicable Laws: The Electro5050 online bidding game ("Game") and its Terms and Conditions are governed by and interpreted in accordance with the laws of India, there are no federal laws <br></br> that prohibits online betting in India. A few states have made recently explicit laws against online betting. Regulations like the Public Gambling Act of 1867 are still in place. However, <br></br>there are not any cases on record of Indian players being prosecuted for online betting.<br></br><br></br>
                    2. Jurisdiction <br></br><br></br>
                    2.1 Exclusive Jurisdiction: Any disputes, claims, or legal proceedings arising out of or related to the Game, its usage, and the interpretation of these Terms<br></br> and Conditions shall be subject to the exclusive jurisdiction of the competent courts in India.<br></br><br></br>
                    3. Compliance with Indian Laws<br></br><br></br>
                    3.1 Legal Compliance: You agree to use the Game in compliance with all applicable Indian laws, and any other relevant legislation pertaining to online betting.<br></br><br></br>
                    4. Betting Regulations<br></br><br></br>
                    4.1 Betting and Gambling Activities: You acknowledge that engaging in betting and gambling activities within the Game is subject to the relevant laws and regulations of India.<br></br> You are solely responsible for ensuring that your participation in these activities complies with Indian legal requirements.<br></br><br></br>
                    4.2 Age Verification: You confirm that you are above the age of 18 years, which is the legal age for participating in betting and gambling activities in India. Persons below the age of 18 are strictly prohibited from using the Game for such activities.<br></br><br></br>
                    5. Legal Restrictions <br></br><br></br>
                    5.1 Restricted Jurisdictions: If you are accessing the Game from a jurisdiction where online betting activities are prohibited or restricted by law; you are advised not to use the Game for such purposes. We
                    do not encourage or support any illegal activities.<br></br><br></br>
                    6. Legal Counsel<br></br><br></br>
                    6.1 Legal Advice: If you have any doubts or concerns about the legal implications of using the Game, particularly in relation to Indian betting laws, it is strongly recommended that you seek legal advice from a qualified legal professional in India.<br></br><br></br><br></br>
                    15. Referral Policy:<br></br><br></br>
                    1. Referral Program<br></br><br></br>
                    1.1 Referral Bonus: The Electro5050 online bidding game ("Game") offers a referral program where users can refer friends to join the Game using a unique referral code. Referring users may receive one-time bonus per each referral, subject to the conditions outlined in this policy.<br></br><br></br>
                    2. Referral Bonus Eligibility<br></br><br></br>
                    2.1 Referred User's Activity: Any user can make referrals however, for a user to receive the referral bonus to unlock bonus withdrawals, the user must guide the referred user to purchase 100$ coins and
                    referred user must place countable minimum bids 1 or more which will be equal to 100$ bids to activate the 10$ withdrawals unlock as determined by the Company. Any other conditions will not receive any referral bonus.<br></br><br></br>
                    3. Referral Code Usage<br></br><br></br>
                    3.1 Referral Code Requirement: To be eligible for the referral bonus, the Referred User must enter the referring user's unique referral code at the time of signup. Failure to enter the correct referral code will
                    result in the loss of the referral bonus for both parties.<br></br><br></br>
                    4. Referral Bonus<br></br><br></br>
                    4.1 Bonus Amount: The specific bonus amount for the referral program will be mentioned in the "Refer and Earn" section within the Game.<br></br><br></br>
                    4.2 Bonus Distribution: Referral bonuses will be credited to the referring user's account after the Referred User has fulfilled the eligibility criteria outlined in section 2.<br></br><br></br>
                    5. Bonus Restrictions<br></br><br></br>
                    5.1 Limited Period: The referral bonus program is subject to change and may be offered for a limited period as determined by the Company.<br></br><br></br>
                    5.2 Bonus Redemption: Referral bonuses are non-transferable, non-exchangeable  <br></br><br></br>
                    6. Compliance with Terms<br></br><br></br>
                    6.1 Adherence to Policies Both the referring user and the Referred User must adhere to the Game's
                    Terms and Conditions, including this Referral Policy, to be eligible for the referral bonus.  <br></br><br></br>
                    7. Modifications and Termination<br></br><br></br>
                    7.1 Modification or Termination the Company reserves the right to modify, suspend, or terminate the referral program or this Referral Policy at its discretion, without prior notice.<br></br><br></br>
                    8. Contact Information<br></br><br></br>
                    8.1 Support If you have any questions or concerns regarding the referral program or this Referral Policy, please contact our support team at info@electro5050.com. (support email) <br></br><br></br> <br></br>
                    16. Coin Purchase and Transactions:  <br></br><br></br>
                    1. Coin Purchase  <br></br><br></br>
                    1.1 You can purchase coins within the Electro5050 online bidding game ("Game") using various payment methods. The conversion is 1 dollar = 1 coin, unless otherwise specified. <br></br><br></br>
                    2. Payment Methods<br></br><br></br>
                    2.1 Accepted Payment Methods: We offer multiple payment methods for purchasing coins, including UPI, debit cards, credit cards, Skrill, Netteller,<br></br> google wallets, cryptocurrency and other available sources
                    through our payment gateway.<br></br><br></br>
                    3. Payment Process<br></br><br></br>
                    3.1 Secure Transactions: All payment transactions are processed securely through our trusted payment gateway. Your payment information is encrypted and protected according to industry standards.<br></br><br></br>
                    3.2 Currency Conversion: For international transactions, currency conversion rates may apply based on your location and the payment method used. Any applicable fees or charges will be clearly displayed during the transaction process.<br></br> All transactions will take place in equivalent of dollar only, if you buy 10 coins i.e. 10$ you have to pay equivalent money.<br></br><br></br>
                    4. KYC Verification<br></br><br></br>
                    4.1 Identity Verification: To ensure the security of our platform and comply with legal and regulatory requirements, you may be required to complete Know Your Customer (KYC) verification before making withdrawals from your wallet.<br></br><br></br>
                    4.2 KYC Documentation: You agree and need to provide accurate and up-to-date identification documents as requested during the KYC verification process. These documents may include government- issued ID, proof of address, and other necessary documents. You must complete KYC verification in order
                    to make withdrawal.<br></br><br></br>
                    4.3 Verification Process: KYC documents will be securely collected and processed for verification purposes only. Once approved, you will be notified, and you can proceed with wallet withdrawals.<br></br><br></br>
                    5. Purchase Confirmation<br></br><br></br>
                    5.1 Confirmation Email: Upon successful completion of a coin purchase, you will receive a confirmation email containing details of your purchase, including the number of coins acquired.<br></br><br></br>
                    5.2 Coin Balance Update: Your coin balance within the Game will be updated immediately after the successful completion of a purchase.<br></br><br></br>
                    6. Refunds and Cancellations<br></br><br></br>
                    6.1 Refund Policy: Coin purchases are non-refundable, except as required by applicable laws.<br></br> Refund requests may be considered on a case-by-case basis at the discretion of the Company.<br></br><br></br>
                    7. Account Security<br></br><br></br>
                    7.1 Payment Information: You are responsible for ensuring the security of your payment information.<br></br> Do not share your payment details with anyone else.<br></br><br></br>
                    7.2 Unauthorized Use: If you suspect unauthorized use of your payment method, please contact our support team immediately.<br></br><br></br>
                    8. Taxes<br></br><br></br>
                    8.1 Applicable Taxes: Depending on your location, applicable taxes may be added to the purchase price. Tax amounts will be displayed during the transaction process.<br></br><br></br>
                    9. Fraud Detection and Prevention<br></br><br></br>
                    9.1 Fraudulent Activities Any attempt to engage in fraudulent activities, including unauthorized use of payment methods, manipulation of transactions,<br></br> or exploitation of system vulnerabilities, is strictly
                    Prohibited.<br></br><br></br>
                    9.2 Detection and Action We employ advanced fraud detection mechanisms to monitor transactions. If any suspicious or fraudulent activities are detected,<br></br> we reserve the right to take immediate action, which may include suspending or banning the involved user accounts.<br></br><br></br>  
                    10. Lifetime Ban  <br></br><br></br>
                    10.1 Fraudulent Behaviour: Engaging in fraudulent behaviour related to payments, transactions, or any aspect of the Game will result in a lifetime ban from the platform. This includes but is not limited to
                    fraudulent deposits, withdrawals, or any attempts to exploit vulnerabilities. <br></br><br></br>
                    10.2 Appeal Process: If you believe your ban was issued in error, you can submit an appeal to our support team. Appeals will be reviewed, and decisions will be made at our sole discretion.  <br></br><br></br>
                    11. Withdrawals <br></br><br></br>
                    11.1 Withdrawal Process: To withdraw funds from your wallet, you must initiate a withdrawal request through the provided mechanism.<br></br> Withdrawal requests are subject to processing times and verification
                    procedures.<br></br><br></br>
                    11.2 Maximum Withdrawal: A maximum withdrawal amount may apply. This amount will be clearly indicated within the Game's interface.<br></br><br></br>
                    11.3 Withdrawal Limit: You can only withdraw up to 100000 (may vary depending upon region and payment method) per withdrawal per day.<br></br><br></br>
                    12. Transaction disputes:<br></br><br></br>
                    12.1 Payment gateway vs company: There is no company involvement in payment gateways, that means if any user loses money during transactions company will not be responsible for loses. Users can contact to payment gateway or the account holder’s bank directly.<br></br><br></br>










                   </p>
                   
                </div>
                
            </div>
        </div>
        
       


    </div>
  
</div>
  )
}

export default Mobterms