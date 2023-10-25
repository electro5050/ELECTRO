import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';



const NavBar = ({handleNavClick}) => {


  return (
    <div>
        <div class="logo-container">
            <img
                className="background"
                id="logo_header"
                src={"assets/electra/logo.png"}
                srcSet={"assets/electra/logo.png"}
                alt="electra"
            />
        </div>


        <div >
            <SideBar handleLinkClick={handleNavClick} />
        </div>
    </div>
  );
};

export default NavBar;
