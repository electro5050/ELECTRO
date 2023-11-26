import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/logo/logo_dark.png'
import logofooter from '../../assets/images/logo/logo2.png'
import './Footer.css';
import img04 from '../../assets/images/logo/DMCA_logo-green150w.png'

const Footer = () => {
    const accountList = [
        {
            title: "Authors",
            link: "/authors-01"
        },
        {
            title: "Collection",
            link: "/wallet-connect"
        },
        {
            title: "Author Profile",
            link: "/edit-profile"
        },
        {
            title: "Create Item",
            link: "/create-item"
        },
    ]
    const resourcesList = [
        {
            title: "Help & Support",
            link: "/help-center"
        },
        {
            title: "Live Auctions",
            link: "/live-auctions"
        },
        {
            title: "Item Details",
            link: "/item-details-01"
        },
        {
            title: "Activity",
            link: "/activity-01"
        },
    ]
    const companyList = [
        {
            title: "Explore",
            link: "/explore-01"
        },
        {
            title: "Contact Us",
            link: "/contact-01"
        },
        {
            title: "Our Blog",
            link: "/blog"
        },
        {
            title: "FAQ",
            link: "/faq"
        },
    ]
    const socialList = [
        {
            icon: "fab fa-twitter",
            link: "#"
        },
        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "#"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-tik-tok-2",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "#"
        },
        

    ]

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

      
    return (
        <div>
            <footer id="footer" className="footer-main">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className="widget widget-logo">
                               
                            </div>
                        </div>
                        <div className="footer">
      <div className="mainhd">
        <h1>Want to know more about us?</h1>
      </div>
      <div className="footer-links">
        <a href="/About" className="footer-link">About</a>
        <a href="/Privacy" className="footer-link">Privacy Policy</a>
        <a href="/Terms" className="footer-link">Terms</a>
       
      </div>
      <div className="long-line"></div>
      <div className='social-communities'>
      <h3>our official social communities</h3>
      </div>
      <div className='community-link'>
      <a href="" className="footer-link">instagram</a>
        <a href="" className="footer-link">X</a>
        <a href="" className="footer-link">facebook</a>
        <a href="" className="footer-link">telegram</a>
        <a href="" className="footer-link">Discord</a>
      </div>
      <p className='llp'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M7.69364 11.9909C6.58033 11.9921 5.65922 11.5831 4.93031 10.764C4.20141 9.94485 3.83644 8.94184 3.83542 7.75494C3.83441 6.56804 4.19765 5.56425 4.92515 4.74357C5.65265 3.9229 6.57306 3.51197 7.68637 3.51078C8.36556 3.51006 8.98889 3.69289 9.55637 4.05929C10.1238 4.41788 10.5619 4.90544 10.8705 5.52199L10.2197 5.94435C9.98818 5.44485 9.64474 5.04698 9.18936 4.75074C8.73397 4.4545 8.23321 4.30667 7.68705 4.30725C6.7698 4.30823 6.02087 4.64089 5.44028 5.30524C4.85968 5.96959 4.5698 6.78589 4.57063 7.75415C4.57146 8.72241 4.86274 9.5381 5.44448 10.2012C6.02621 10.8643 6.7757 11.1954 7.69296 11.1944C8.23911 11.1938 8.73963 11.0449 9.1945 10.7477C9.64937 10.4505 9.99213 10.0519 10.2228 9.5519L10.8743 9.96115C10.5737 10.5783 10.1365 11.0708 9.5627 11.4384C8.99585 11.806 8.37283 11.9901 7.69364 11.9909Z" fill="#E9D4D4"/>
  <path d="M13.8374 7.68792C13.8408 11.623 10.9945 14.7206 7.59153 14.7243C4.18858 14.7279 1.33698 11.6363 1.33361 7.70126C1.33023 3.76621 4.17652 0.668546 7.57947 0.664916C10.9824 0.661286 13.834 3.75287 13.8374 7.68792Z" stroke="#E9D4D4"/>
</svg>2023 All Rights Reserved, Crapshooter Electro Games Innovations
</p>
    </div>

                       
                    </div>
                </div>
            </footer>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
            
          

        </div>

    );
}

export default Footer;
