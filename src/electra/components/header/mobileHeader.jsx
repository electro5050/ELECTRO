import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Avathar from 'electra/components/Common/AvatharView';

const flexCenterStype = {
  display: "flex",
  alignItems: "center",

};
const token = localStorage.getItem('token');



const Headers = ({selectedHeader, handleLinkClick,}) => {

  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser || null);

  return (
    <div className='main-header main-header-mobile'>
      <div className='sub-header'>


            <div className='vertical-center actions-icon' style={{...flexCenterStype, width: "min(200px, 15vw)", justifyContent: "space-between"}}>
              <div className='dropdown-button-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M19.5619 14.0264L18.2422 11.8308C17.9502 11.3519 17.6932 10.4293 17.6932 9.8687V7.68472C17.6932 3.44528 14.248 0 10.0202 0C5.7808 0.0116789 2.33552 3.44528 2.33552 7.68472V9.85702C2.33552 10.4176 2.07858 11.3402 1.79829 11.8191L0.47857 14.0147C-0.0236229 14.8673 -0.140412 15.8366 0.174919 16.6775C0.490249 17.5301 1.20266 18.2074 2.13698 18.5111C3.3983 18.9315 4.6713 19.2352 5.96766 19.4571C6.09613 19.4804 6.22459 19.4921 6.35306 19.5155C6.51657 19.5388 6.69175 19.5622 6.86693 19.5856C7.17059 19.6323 7.47424 19.6673 7.78953 19.6907C8.5253 19.7607 9.27275 19.7958 10.0202 19.7958C10.756 19.7958 11.4917 19.7607 12.2158 19.6907C12.4845 19.6673 12.7531 19.6439 13.01 19.6089C13.2202 19.5856 13.4304 19.5622 13.6407 19.5272C13.7691 19.5155 13.8976 19.4921 14.0261 19.4688C15.3341 19.2585 16.6305 18.9315 17.8918 18.5111C18.7911 18.2074 19.4801 17.5301 19.8071 16.6658C20.1341 15.7899 20.0407 14.8322 19.5619 14.0264ZM10.8728 9.28476C10.8728 9.77527 10.4757 10.1724 9.98517 10.1724C9.49465 10.1724 9.09757 9.77527 9.09757 9.28476V5.66427C9.09757 5.17376 9.49465 4.77667 9.98517 4.77667C10.4757 4.77667 10.8728 5.17376 10.8728 5.66427V9.28476Z" fill="#DFDDD5"/>
                <path d="M13.3017 20.9746C12.8112 22.3293 11.5148 23.2987 9.99659 23.2987C9.07395 23.2987 8.163 22.9249 7.52065 22.2593C7.14692 21.9089 6.86663 21.4417 6.70312 20.9629C6.85495 20.9862 7.00678 20.9979 7.17028 21.0213C7.4389 21.0563 7.7192 21.0914 7.99949 21.1147C8.66519 21.1731 9.34257 21.2081 10.0199 21.2081C10.6856 21.2081 11.3513 21.1731 12.0054 21.1147C12.2506 21.0914 12.4959 21.0797 12.7295 21.0446C12.9163 21.0213 13.1032 20.9979 13.3017 20.9746Z" fill="#DFDDD5"/>
                </svg>
              </div>

            </div>

            
          <div className='wallet'>
            <div className='wallet'>

                <div className="wallet-money">
              
                    <img
                          className="coin-image"
                          id="logo_header"
                          src={"/assets/electra/gold-coin.png"}
                          srcSet={"/assets/electra/gold-coin.png"}
                          alt="electra"
                      />
                      <span className='wallet-value'>
                    
                      {(user && user.coinbalance) ? `${user.coinbalance} $` : '000'}
                      </span>
                  </div>

              

              </div>
            </div>

      </div>
    </div>

  );
};

export default Headers;
