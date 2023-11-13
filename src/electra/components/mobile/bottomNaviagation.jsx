// BottomNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './bottomNavigation.css';

const imageStyle = {
  width: '10vw',
  objectFit: 'contain',
};

const BottomNavigation = ({handleLinkClick}) => {
  return (
    <div className="bottom-navigation">
      <img src={"assets/MenuIcons/menu.png"} alt="" style={imageStyle} onClick={() => handleLinkClick("Menu")} />
      <img src={"assets/MenuIcons/profile.png"} alt="" style={imageStyle} onClick={() => handleLinkClick("Profile")}  />
      <img src={"assets/MenuIcons/coin.png"} alt="" style={imageStyle} />
      <img src={"assets/MenuIcons/wallet.png"} alt="" style={imageStyle} />
      <img src={"assets/MenuIcons/message.png"} alt="" style={imageStyle} onClick={() => handleLinkClick("Chat")}  />
    </div>
  );
};

export default BottomNavigation;
