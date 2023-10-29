import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCog, faSuitcase, faHeadset, faPhoneVolume, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.css';

function SideBar({handleLinkClick, activeTab}) {
  // const [showUserModal, setShowUserModal] = useState(false);


  // const handleCloseModal = () => {
  //   // Close the user modal
  //   setShowUserModal(false);
  // };
console.log(activeTab);
  return (
    <div className="game-sidebar">
      <div className="sidebar-links">
      <a href="#" className={`electra-sidebar-link ${activeTab === "Games" ? 'active' : ''}`} onClick={() => handleLinkClick("Games")}>
        <FontAwesomeIcon icon={faGamepad} />
        <span style={{ paddingLeft: "10px" }}>Games</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Tutorials" ? 'active' : ''}`} onClick={() => handleLinkClick("Tutorials")}>
        <FontAwesomeIcon icon={faYoutube} />
        <span style={{ paddingLeft: "10px" }}>Tutorials</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "VIP Membership" ? 'active' : ''}`} onClick={() => handleLinkClick("VIP Membership")}>
        <FontAwesomeIcon icon={faCog} />
        <span style={{ paddingLeft: "10px" }}>VIP Membership</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Portfolio" ? 'active' : ''}`} onClick={() => handleLinkClick("Portfolio")}>
        <FontAwesomeIcon icon={faSuitcase} />
        <span style={{ paddingLeft: "10px" }}>Portfolio</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Live Support" ? 'active' : ''}`} onClick={() => handleLinkClick("Live Support")}>
        <FontAwesomeIcon icon={faHeadset} />
        <span style={{ paddingLeft: "10px" }}>Live Support</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Contact us" ? 'active' : ''}`} onClick={() => handleLinkClick("Contact us")}>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <span style={{ paddingLeft: "10px" }}>Contact us</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Win History" ? 'active' : ''}`} onClick={() => handleLinkClick("Win History")}>
        <FontAwesomeIcon icon={faClockRotateLeft} />
        <span style={{ paddingLeft: "10px" }}>Win History</span>
      </a>

        <div className={`electra-sidebar-link referal ${activeTab === "Referal" ? 'active' : ''}`} onClick={() => handleLinkClick("Referal")}>
          <img
                className="referal-image"
                id="logo_header"
                src={"assets/electra/tressure.png"}
                srcSet={"assets/electra/tressure.png"}
                alt="electra"
            />
            <a href="#" className='referal-anchor'>
           
              <span >refer and earn</span>
            </a>
        </div>
      
      </div>

    </div>
  );
}

export default SideBar;
