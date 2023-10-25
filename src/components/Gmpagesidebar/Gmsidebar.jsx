import React, { useState } from 'react';
import './Gmsidebar.css';

function Gmsidebar({handleLinkClick}) {
  // const [showUserModal, setShowUserModal] = useState(false);


  // const handleCloseModal = () => {
  //   // Close the user modal
  //   setShowUserModal(false);
  // };

  return (
    <div>
      <div className="sidebar-links">
        <a href="#" className="sidebar-link" name='games' onClick={handleLinkClick}>
          Games
        </a>
        <a href="#" className="sidebar-link" name='tutorials' onClick={handleLinkClick}>
          Tutorials
        </a>
        <a href="#" className="sidebar-link"  name='VIP Membership'onClick={handleLinkClick}>
          VIP Membership
        </a>
        <a href="#" className="sidebar-link" name='portfolio'onClick={handleLinkClick}>
          Portfolio
        </a>
        <a href="#" className="sidebar-link" name= 'Live support'onClick={handleLinkClick}>
          Live Support
        </a>
        <a href="#" className="sidebar-link"  name= 'Contact us'onClick={handleLinkClick}>
          Contact us
        </a>
      </div>

    </div>
  );
}

export default Gmsidebar;
