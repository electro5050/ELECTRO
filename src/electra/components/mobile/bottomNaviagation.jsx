// BottomNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './bottomNavigation.css';

const imageStyle = {
  width: '10vw',
  objectFit: 'contain',
};

const BottomNavigation = ({handleLinkClick, selectedMenu}) => {
  return (
    <div className="bottom-navigation">
      <img src={`assets/MenuIcons/menu${selectedMenu=="Menu" ? "_1" : ""}.png`} alt="" style={imageStyle} onClick={() => handleLinkClick("Menu")} />
      <img src={`assets/MenuIcons/profile${selectedMenu=="Profile" ? "_1" : ""}.png`} alt="" style={imageStyle} onClick={() => handleLinkClick("Profile")}  />
      <img src={`assets/MenuIcons/coin${selectedMenu=="Coin" ? "_1" : ""}.png`} alt="" style={imageStyle} />
      <img src={`assets/MenuIcons/wallet${selectedMenu=="wallet" ? "_1" : ""}.png`} alt="" style={imageStyle} />
      <img src={`assets/MenuIcons/message${selectedMenu=="Chat" ? "_1" : ""}.png`} alt="" style={imageStyle} onClick={() => handleLinkClick("Chat")}  />
    </div>
  );
};

export default BottomNavigation;
