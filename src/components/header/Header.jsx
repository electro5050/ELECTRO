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
import Chatpage from '../../pages/Chatpage'
import '../header/Header.css'
import { Link as ScrollLink } from 'react-scroll';
import Profile from '../../pages/Profile';


const Header = (gameState={gameState}) => {
  const { pathname } = useLocation();
  const [coinBalance, setCoinBalance] = useState(null);
  const[chatOpen, setChatOpen] = useState(false)
  const[profileOpen,setProfileOpen] = useState(false)
  const [notifications, setNotifications] = useState([]);
 const [showNotifications, setShowNotifications] = useState(false);



  const headerRef = useRef(null);


  useEffect(() => {
  
  
    fetch('http://192.168.29.85:3000/notification', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        setNotifications(data);
    })
    .catch(error => {
        console.error('Error fetching notifications:', error);
    });
  }, []);
  

  useEffect(() => {
    // Assuming you have a function to get a user's token for authorization
    const token = localStorage.getItem('token');

    fetch('http://192.168.29.85:3000/coinbalance', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const contentType = response.headers.get("content-type");
        if (response.ok && contentType && contentType.includes("application/json")) {
            return response.json();
        } else {
            console.error('Unexpected response:', response);
            throw new Error(`Server responded with status: ${response.status} and content type: ${contentType}`);
        }
    })
    
    .then(data => {
        if (data.coinbalance) {
            setCoinBalance(data.coinbalance);
        }
    })
    .catch(error => {
        console.error('Error fetching coin balance:', error);
    });
}, [gameState]);




  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector('.js-header');
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add('is-fixed')
      : header.classList.remove('is-fixed');
    scrollTop >= 400
      ? header.classList.add('is-small')
      : header.classList.remove('is-small');
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  

  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
    btnToggle.current.classList.toggle('active');
  };

  

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };


  const handleChat =() => {
    setChatOpen(!chatOpen)
  }
  const handleProfile =() => {
    setProfileOpen(!profileOpen)
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
                  <div> <button onClick={handleProfile}> Profile </button>{profileOpen && <Profile/>}  </div>
                                        <div> 
                          <button onClick={toggleNotifications}> Notifications </button>
                          {showNotifications && (
                            <div className="notification-list">
                              {notifications.map((notification, index) => (
                                <div key={index} className="notification-item">
                                  <h4>{notification.title}</h4>
                                  <p>{notification.message}</p>
                                  {notification.imageUrl && <img src={notification.imageUrl} alt="Notification" />}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                  <div> <button onClick={handleChat}> chat </button>
                  {chatOpen && <Chatpage/>}
                  </div>
                  <div
                    className="sc-btn-top mg-r-12"
                    id="site-header"
                  >
                  <p className="sc-button header-slider style style-1 wallet fl-button pri-1">
                      <span>{coinBalance ? `${coinBalance} $` : 'Wallet connect'}</span>
                  </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
    </header>
  );
};

export default Header;
