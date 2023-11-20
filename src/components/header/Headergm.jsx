import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menus from '../../pages/menu';
import DarkMode from './DarkMode';
import logoheader from '../../assets/images/logo/logo.png';
import logoheader2x from '../../assets/images/logo/logo@2x.png';
import logodark from '../../assets/images/logo/logo_dark.png';
import logodark2x from '../../assets/images/logo/logo_dark@2x.png';
import imgsun from '../../assets/images/icon/sun.png';
import avt from '../../assets/images/avatar/avt-2.jpg';
import Gmbaar from '../Gmpagesidebar/Gmsidebar'
import './Headergm.css';


const Headers = ({handleLinkClick}) => {
  const { pathname } = useLocation();

  const headerRef = useRef(null);

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const btnSearch = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
    btnToggle.current.classList.toggle('active');
  };

  const searchBtn = () => {
    btnSearch.current.classList.toggle('active');
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className="header_1 js-header" ref={headerRef}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        className="logo-dark"
                        id="logo_header"
                        src={logodark}
                        srcSet={`${logodark2x}`}
                        alt="nft-gaming"
                        style={{ padding: '7%' }}
                      />
                      <img
                        className="logo-light"
                        id="logo_header"
                        src={logoheader}
                        srcSet={`${logoheader2x}`}
                        alt="nft-gaming"
                        style={{ padding: '7%' }}
                      />
                    </Link>
                   
                  </div>
                </div>
                <div
                  className="mobile-button"
                  ref={btnToggle}
                  onClick={menuToggle}
                >
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item ${
                          data.namesub ? 'menu-item-has-children' : ''
                        } ${activeIndex === index ? 'active' : ''} `}
                      >
                        <Link to={data.links}>{data.name}</Link>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li
                                key={submenu.id}
                                className={
                                  pathname === submenu.links
                                    ? 'menu-item current-item'
                                    : 'menu-item'
                                }
                              >
                                <Link to={submenu.links}>{submenu.sub}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flat-search-btn flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
                  
                   <div
                    className="sc-btn-top mg-r-12"
                    id="site-header"
                  >
                    
                  </div>

                  <div className="admin_active" id="header_admin">
                    <div className="header_avatar">
                      <div className="price">
                        <span>2.45 <strong>ETH</strong> </span>
                      </div>
                      <img
                        className="avatar"
                        src={avt}
                        alt="avatar"
                      />
                      <div className="avatar_popup mt-20">
                        <div className="d-flex align-items-center copy-text justify-content-between">
                          <span> 13b9ebda035r178... </span>
                          <Link to="/" className="ml-2">
                            <i className="fal fa-copy"></i>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                          <img
                            className="coin"
                            src={imgsun}
                            alt="/"
                          />
                          <div className="info ml-10">
                            <p className="text-sm font-book text-gray-400">
                              Balance
                            </p>
                            <p className="w-full text-sm font-bold text-green-500">
                              16.58 ETH
                            </p>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <div className="links mt-20">
                          <Link to="#">
                            <i className="fab fa-accusoft"></i>{' '}
                            <span> My items</span>
                          </Link>
                          <Link to="/edit-profile">
                            <i className="fas fa-pencil-alt"></i>{' '}
                            <span> Edit Profile</span>
                          </Link>
                          <Link to="/logout"> {/* Add this line */}
                            <i className="fal fa-sign-out"></i>{' '}
                            <span> Logout</span>
                          </Link>{' '}
                          {/* Add this line */}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
      <Gmbaar handleLinkClick={handleLinkClick}/>
     
    </header>
  );
};

export default Headers;
