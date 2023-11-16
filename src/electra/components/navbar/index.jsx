import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';



const NavBar = ({handleLinkClick, activeTab}) => {


  return (
    <div className="game-navbar">
        <div className="logo-container">
            <img
                className="background"
                id="logo_header"
                src={"assets/electra/logo_dark.png"}
                srcSet={"assets/electra/logo_dark.png"}
                alt="electra"
            />
        </div>


        <div >
            <SideBar handleLinkClick={handleLinkClick} activeTab={activeTab} />
        </div>
    </div>
  );
};

export default NavBar;
