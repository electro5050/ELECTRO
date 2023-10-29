import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';



const Headers = ({selectedHeader, handleLinkClick}) => {
  const { pathname } = useLocation();

  const headerRef = useRef(null);
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
    <div className='main-header'>
      <div className='sub-header'>
          <span style={{fontSize:'20px'}} className='vertical-center'>
              {selectedHeader}
          </span>

          <div className='wallet'>
            <div className='wallet'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 36 29" fill="none">
                  <path d="M16.0019 20.0542V22.7974C16.0019 25.1217 13.4419 27 10.29 27C7.13801 27 4.56201 25.1217 4.56201 22.7974V20.0542C4.56201 22.3785 7.12201 24.0271 10.29 24.0271C13.4419 24.0271 16.0019 22.365 16.0019 20.0542Z" stroke="#DFDDD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.0003 16.3373C16.0003 17.013 15.7763 17.6346 15.3923 18.1751C14.4482 19.4859 12.5122 20.3102 10.2723 20.3102C8.0323 20.3102 6.09631 19.4724 5.15233 18.1751C4.76833 17.6346 4.54443 17.013 4.54443 16.3373C4.54443 15.1752 5.18439 14.1346 6.20838 13.3779C7.24836 12.6076 8.67228 12.1482 10.2563 12.1482C11.8402 12.1482 13.2643 12.6212 14.3042 13.3779C15.3603 14.1211 16.0003 15.1752 16.0003 16.3373Z" stroke="#DFDDD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.0019 16.3371V20.0533C16.0019 22.3776 13.4419 24.0262 10.29 24.0262C7.13801 24.0262 4.56201 22.364 4.56201 20.0533V16.3371C4.56201 14.0129 7.12201 12.1345 10.29 12.1345C11.8739 12.1345 13.298 12.6075 14.3379 13.3642C15.3619 14.121 16.0019 15.175 16.0019 16.3371Z" stroke="#DFDDD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33.9999 12.0946V14.8785C33.9999 15.6217 33.296 16.2296 32.4 16.2567H29.2638C27.5359 16.2567 25.9521 15.1891 25.8081 13.7297C25.7121 12.8784 26.0959 12.0811 26.7679 11.527C27.3599 11.0135 28.176 10.7163 29.072 10.7163H32.4C33.296 10.7433 33.9999 11.3514 33.9999 12.0946Z" stroke="#DFDDD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 11.4593V8.75662C2 5.08102 4.62396 2.5135 8.7039 2.08108C9.1199 2.02703 9.55189 2 9.99988 2H24.3997C24.8157 2 25.2157 2.0135 25.5997 2.06755C29.7276 2.47295 32.3996 5.05399 32.3996 8.75662V10.7161H29.0716C28.1756 10.7161 27.3596 11.0133 26.7676 11.5268C26.0956 12.0809 25.7117 12.8782 25.8076 13.7295C25.9516 15.1889 27.5356 16.2565 29.2636 16.2565H32.3996V18.2159C32.3996 22.2699 29.1996 24.9725 24.3997 24.9725H20.3997" stroke="#DFDDD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                <div className="wallet-money">
              
                    <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          srcSet={"/assets/electra/gold-coin.png"}
                          alt="electra"
                      />
                      <span className='wallet-value'>
                    
                        1000
                      </span>
                  </div>

              

              </div>
            </div>

            <div className='vertical-center actions-icon'>
              <FontAwesomeIcon icon={faBell} style={{color: "#ffffff", marginRight: "3vw" }} />
              <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight: "3vw" }} />
              <FontAwesomeIcon icon={faMessage} style={{color: "#ffffff" }} />
            </div>
      </div>
    </div>
//     <header id="header_main" className="header_1 js-header" ref={headerRef}>
//       <div className="themesflat-container">
//         <div className="row">
//           <div className="col-md-12">
//             <div id="site-header-inner">
//               <div className="wrap-box flex">
//                 <div id="site-logo" className="clearfix">
//                   <div id="site-logo-inner">
//                     <Link to="/" rel="home" className="main-logo">
//                       <img
//                         className="logo-dark"
//                         id="logo_header"
//                         src={logodark}
//                         srcSet={`${logodark2x}`}
//                         alt="nft-gaming"
//                         style={{ padding: '7%' }}
//                       />
//                       <img
//                         className="logo-light"
//                         id="logo_header"
//                         src={logoheader}
//                         srcSet={`${logoheader2x}`}
//                         alt="nft-gaming"
//                         style={{ padding: '7%' }}
//                       />
//                     </Link>
                   
//                   </div>
//                 </div>
//                 <div
//                   className="mobile-button"
//                   ref={btnToggle}
//                   onClick={menuToggle}
//                 >
//                   <span></span>
//                 </div>
//                 <nav id="main-nav" className="main-nav" ref={menuLeft}>
//                   <ul id="menu-primary-menu" className="menu">
//                     {menus.map((data, index) => (
//                       <li
//                         key={index}
//                         onClick={() => handleOnClick(index)}
//                         className={`menu-item ${
//                           data.namesub ? 'menu-item-has-children' : ''
//                         } ${activeIndex === index ? 'active' : ''} `}
//                       >
//                         <Link to={data.links}>{data.name}</Link>
//                         {data.namesub && (
//                           <ul className="sub-menu">
//                             {data.namesub.map((submenu) => (
//                               <li
//                                 key={submenu.id}
//                                 className={
//                                   pathname === submenu.links
//                                     ? 'menu-item current-item'
//                                     : 'menu-item'
//                                 }
//                               >
//                                 <Link to={submenu.links}>{submenu.sub}</Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//                 <div className="flat-search-btn flex">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
//   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
// </svg>
                  
//                    <div
//                     className="sc-btn-top mg-r-12"
//                     id="site-header"
//                   >
                    
//                   </div>

//                   <div className="admin_active" id="header_admin">
//                     <div className="header_avatar">
//                       <div className="price">
//                         <span>2.45 <strong>ETH</strong> </span>
//                       </div>
//                       <img
//                         className="avatar"
//                         src={avt}
//                         alt="avatar"
//                       />
//                       <div className="avatar_popup mt-20">
//                         <div className="d-flex align-items-center copy-text justify-content-between">
//                           <span> 13b9ebda035r178... </span>
//                           <Link to="/" className="ml-2">
//                             <i className="fal fa-copy"></i>
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center mt-10">
//                           <img
//                             className="coin"
//                             src={imgsun}
//                             alt="/"
//                           />
//                           <div className="info ml-10">
//                             <p className="text-sm font-book text-gray-400">
//                               Balance
//                             </p>
//                             <p className="w-full text-sm font-bold text-green-500">
//                               16.58 ETH
//                             </p>
//                           </div>
//                         </div>
//                         <div className="hr"></div>
//                         <div className="links mt-20">
//                           <Link to="#">
//                             <i className="fab fa-accusoft"></i>{' '}
//                             <span> My items</span>
//                           </Link>
//                           <Link to="/edit-profile">
//                             <i className="fas fa-pencil-alt"></i>{' '}
//                             <span> Edit Profile</span>
//                           </Link>
//                           <Link to="/logout"> {/* Add this line */}
//                             <i className="fal fa-sign-out"></i>{' '}
//                             <span> Logout</span>
//                           </Link>{' '}
//                           {/* Add this line */}
                          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <DarkMode />
//       {/* <Gmbaar handleLinkClick={handleLinkClick}/> */}
     
//     </header>
  );
};

export default Headers;
