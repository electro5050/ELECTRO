import React, { useState } from 'react';
import './Gmsidebar.css';

import Portfolio from '../../pages/Portfolio';
import Topten from '../../pages/Top10';

function Gmsidebar() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showTopten, setShowTopten] = useState(false);

  const handleClick = () => {
    setShowPortfolio(!showPortfolio); 
  };
  const handletop10Click = () => {
    setShowTopten(!showTopten); 
  };

  return (
    <div>
      <div className="sidebar-links">
        <div className="sidebar-link" name='games'>
          Games
        </div>
        <div className="sidebar-link" name='tutorials'>
          Tutorials
        </div>
        <div className="sidebar-link" name='VIP Membership'>
          VIP Membership
        </div>
        <div className="sidebar-link" name='portfolio' onClick={handleClick}>
          Portfolio
        </div>
        <div className="sidebar-link" name='Live support' >
          Live Support
        </div>
        <div className="sidebar-link" name='Contact us'>
          Contact us
        </div>
        <div className="sidebar-link" name='top 10 winners' onClick={handletop10Click}>
          Top 10 Winners
        </div>
      </div>
      {showPortfolio && <Portfolio />},
      {showTopten && <Topten/>}

    </div>
  );
}

export default Gmsidebar;