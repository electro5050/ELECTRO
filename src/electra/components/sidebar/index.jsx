import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCog, faSuitcase, faHeadset, faPhoneVolume, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.css';

function SideBar({handleLinkClick, activeTab}) {
  const [collapsed, setCollapsed] = useState(false);


  const handleCollapse = () => {
    // Close the user modal
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div className={`game-sidebar ${collapsed ? 'collapse' : ''}`}>
      <div className={`sidebar-links ${collapsed ? 'collapse' : ''}`}>
      {/* <div  onClick={handleCollapse} className={`toggle-button ${collapsed ? 'collapse' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g filter="url(#filter0_d_664_1316)">
            <path d="M25.2143 18.8571H4.78571C4.57733 18.8571 4.37748 18.9399 4.23013 19.0873C4.08278 19.2346 4 19.4345 4 19.6429V21.2143C4 21.4227 4.08278 21.6225 4.23013 21.7699C4.37748 21.9172 4.57733 22 4.78571 22H25.2143C25.4227 22 25.6225 21.9172 25.7699 21.7699C25.9172 21.6225 26 21.4227 26 21.2143V19.6429C26 19.4345 25.9172 19.2346 25.7699 19.0873C25.6225 18.9399 25.4227 18.8571 25.2143 18.8571ZM25.2143 12.5714H4.78571C4.57733 12.5714 4.37748 12.6542 4.23013 12.8016C4.08278 12.9489 4 13.1488 4 13.3571V14.9286C4 15.137 4.08278 15.3368 4.23013 15.4842C4.37748 15.6315 4.57733 15.7143 4.78571 15.7143H25.2143C25.4227 15.7143 25.6225 15.6315 25.7699 15.4842C25.9172 15.3368 26 15.137 26 14.9286V13.3571C26 13.1488 25.9172 12.9489 25.7699 12.8016C25.6225 12.6542 25.4227 12.5714 25.2143 12.5714ZM25.2143 6.28571H4.78571C4.57733 6.28571 4.37748 6.36849 4.23013 6.51584C4.08278 6.6632 4 6.86304 4 7.07143V8.64286C4 8.85124 4.08278 9.05109 4.23013 9.19844C4.37748 9.34579 4.57733 9.42857 4.78571 9.42857H25.2143C25.4227 9.42857 25.6225 9.34579 25.7699 9.19844C25.9172 9.05109 26 8.85124 26 8.64286V7.07143C26 6.86304 25.9172 6.6632 25.7699 6.51584C25.6225 6.36849 25.4227 6.28571 25.2143 6.28571ZM25.2143 0H4.78571C4.57733 0 4.37748 0.0827803 4.23013 0.23013C4.08278 0.37748 4 0.57733 4 0.785714V2.35714C4 2.56553 4.08278 2.76538 4.23013 2.91273C4.37748 3.06008 4.57733 3.14286 4.78571 3.14286H25.2143C25.4227 3.14286 25.6225 3.06008 25.7699 2.91273C25.9172 2.76538 26 2.56553 26 2.35714V0.785714C26 0.57733 25.9172 0.37748 25.7699 0.23013C25.6225 0.0827803 25.4227 0 25.2143 0Z" fill="#AFAFAF"/>
          </g>
          <defs>
            <filter id="filter0_d_664_1316" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_664_1316"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_664_1316" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div> */}

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
      {/* <a href="#" className={`electra-sidebar-link ${activeTab === "Live Support" ? 'active' : ''}`} onClick={() => handleLinkClick("Live Support")}>
        <FontAwesomeIcon icon={faHeadset} />
        <span style={{ paddingLeft: "10px" }}>Live Support</span>
      </a> */}
      <a href="#" className={`electra-sidebar-link ${activeTab === "Contact us" ? 'active' : ''}`} onClick={() => handleLinkClick("Contact us")}>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <span style={{ paddingLeft: "10px" }}>Contact us</span>
      </a>
      <a href="#" className={`electra-sidebar-link ${activeTab === "Win History" ? 'active' : ''}`} onClick={() => handleLinkClick("Win History")}>
        <FontAwesomeIcon icon={faClockRotateLeft} />
        <span style={{ paddingLeft: "10px" }}>Top 10</span>
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
