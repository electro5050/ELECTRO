import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Avathar from 'electra/components/Common/AvatharView';
import { useNavigate } from 'react-router-dom';
import axios from 'common/electra_axios';
import config from 'common/constants';

const flexCenterStype = {
  display: "flex",
  alignItems: "center",

};
const token = localStorage.getItem('token');



const Headers = ({selectedHeader, handleLinkClick ,handleChatToggle, gameState={}}) => {
  const { pathname } = useLocation();
  // const [coinBalance, setCoinBalance] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState('null');
  const [profileImage,setProfileImage]=useState('')

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    setUser(localUser); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
};

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     fetch(config.gameApiUrl + '/coinbalance', {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         const contentType = response.headers.get("content-type");
//         if (response.ok && contentType && contentType.includes("application/json")) {
//             return response.json();
//         } else {
//             console.error('Unexpected response:', response);
//             throw new Error(`Server responded with status: ${response.status} and content type: ${contentType}`);
//         }
//     })
    
//     .then(data => {
//         if (data.coinbalance) {
//             setCoinBalance(data.coinbalance);
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching coin balance:', error);
//     });
// }, [gameState]);

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
                    
                      {(user && user.coinbalance) ? `${user.coinbalance} $` : '000'}
                      </span>
                  </div>

              

              </div>
            </div>

            <div className='vertical-center actions-icon' style={{...flexCenterStype, width: "min(200px, 15vw)", justifyContent: "space-between"}}>
              <div className='dropdown-button-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M19.5619 14.0264L18.2422 11.8308C17.9502 11.3519 17.6932 10.4293 17.6932 9.8687V7.68472C17.6932 3.44528 14.248 0 10.0202 0C5.7808 0.0116789 2.33552 3.44528 2.33552 7.68472V9.85702C2.33552 10.4176 2.07858 11.3402 1.79829 11.8191L0.47857 14.0147C-0.0236229 14.8673 -0.140412 15.8366 0.174919 16.6775C0.490249 17.5301 1.20266 18.2074 2.13698 18.5111C3.3983 18.9315 4.6713 19.2352 5.96766 19.4571C6.09613 19.4804 6.22459 19.4921 6.35306 19.5155C6.51657 19.5388 6.69175 19.5622 6.86693 19.5856C7.17059 19.6323 7.47424 19.6673 7.78953 19.6907C8.5253 19.7607 9.27275 19.7958 10.0202 19.7958C10.756 19.7958 11.4917 19.7607 12.2158 19.6907C12.4845 19.6673 12.7531 19.6439 13.01 19.6089C13.2202 19.5856 13.4304 19.5622 13.6407 19.5272C13.7691 19.5155 13.8976 19.4921 14.0261 19.4688C15.3341 19.2585 16.6305 18.9315 17.8918 18.5111C18.7911 18.2074 19.4801 17.5301 19.8071 16.6658C20.1341 15.7899 20.0407 14.8322 19.5619 14.0264ZM10.8728 9.28476C10.8728 9.77527 10.4757 10.1724 9.98517 10.1724C9.49465 10.1724 9.09757 9.77527 9.09757 9.28476V5.66427C9.09757 5.17376 9.49465 4.77667 9.98517 4.77667C10.4757 4.77667 10.8728 5.17376 10.8728 5.66427V9.28476Z" fill="#DFDDD5"/>
                <path d="M13.3017 20.9746C12.8112 22.3293 11.5148 23.2987 9.99659 23.2987C9.07395 23.2987 8.163 22.9249 7.52065 22.2593C7.14692 21.9089 6.86663 21.4417 6.70312 20.9629C6.85495 20.9862 7.00678 20.9979 7.17028 21.0213C7.4389 21.0563 7.7192 21.0914 7.99949 21.1147C8.66519 21.1731 9.34257 21.2081 10.0199 21.2081C10.6856 21.2081 11.3513 21.1731 12.0054 21.1147C12.2506 21.0914 12.4959 21.0797 12.7295 21.0446C12.9163 21.0213 13.1032 20.9979 13.3017 20.9746Z" fill="#DFDDD5"/>
                </svg>
              </div>
              {/* <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginRight: "3vw" }} name='' onClick={() => handleLinkClick("Profile")} /> */}
              <div className="dropdown">

                <div className='dropdown-button-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M16.6667 0H3.33333C1.48889 0 0 1.41884 0 3.1684V14.8072C0 16.5567 1.48889 17.9862 3.33333 17.9862H4.17778C5.05556 17.9862 5.91111 18.317 6.53333 18.9144L8.43333 20.7173C9.3 21.5387 10.7 21.5387 11.5667 20.7173L13.4667 18.9144C14.0889 18.317 14.9444 17.9862 15.8222 17.9862H16.6667C18.5111 17.9862 20 16.5567 20 14.8072V3.1684C20 1.41884 18.5111 0 16.6667 0ZM10 3.78714C11.2 3.78714 12.1667 4.72592 12.1667 5.8674C12.1667 6.99821 11.2333 7.90499 10.0778 7.94766C10.0333 7.94766 9.96667 7.94766 9.91111 7.94766C8.74444 7.90499 7.82222 6.99821 7.82222 5.8674C7.83333 4.72592 8.8 3.78714 10 3.78714ZM13.0556 13.5377C11.3778 14.6152 8.62222 14.6152 6.94444 13.5377C5.46667 12.5989 5.46667 11.0414 6.94444 10.0919C8.63333 9.01446 11.3889 9.01446 13.0556 10.0919C14.5333 11.0414 14.5333 12.5882 13.0556 13.5377Z" fill="#DFDDD5"/>
                  </svg>
                  </div>
          
                {(
                  <div className="dropdown-content">

                    <div style={{...flexCenterStype,   marginBottom:'30px'}}>
                        <Avathar imageUrl={(user && user.profilePictureUrl) || "assets/Avatars/avathar_1.png"}imageSize={'4vw'}/>
                        <div style={{paddingLeft:"10px"}}>
                            <div style={{display:"flex", alignItems: "center"}}>
                                <div style={{fontSize: "max(1vw, 14px)", color:"white", fontWeight:"800"}}>
                                {user && user[0] ? user[0].name : 'Loading...'}
                                </div>
                            </div>
                            <div style={{fontSize: "max(0.7vw, 10px)", color:"#B7B7B7", marginTop: "10px"}}>
                                member since october 2023
                            </div>
                        </div>  

                      </div>

                      <a onClick={() => alert('wallet')}>
                        
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                      <path d="M7.56586 9.46313V10.7491C7.56586 11.8386 6.3658 12.7192 4.88824 12.7192C3.41069 12.7192 2.20312 11.8386 2.20312 10.7491V9.46313C2.20312 10.5527 3.40319 11.3255 4.88824 11.3255C6.3658 11.3255 7.56586 10.5464 7.56586 9.46313Z" stroke="#DFDDD5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7.56357 7.72083C7.56357 8.03756 7.45857 8.32895 7.27856 8.58234C6.83601 9.1968 5.92846 9.58322 4.87842 9.58322C3.82838 9.58322 2.92084 9.19047 2.47833 8.58234C2.29832 8.32895 2.19336 8.03756 2.19336 7.72083C2.19336 7.17604 2.49336 6.68828 2.97337 6.33353C3.46089 5.97246 4.12839 5.75708 4.87092 5.75708C5.61344 5.75708 6.28099 5.97879 6.76851 6.33353C7.26356 6.68194 7.56357 7.17604 7.56357 7.72083Z" stroke="#DFDDD5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.56586 7.72081V9.46285C7.56586 10.5524 6.3658 11.3252 4.88824 11.3252C3.41069 11.3252 2.20312 10.5461 2.20312 9.46285V7.72081C2.20312 6.63125 3.40319 5.75073 4.88824 5.75073C5.63077 5.75073 6.29832 5.97245 6.78583 6.32719C7.26585 6.68193 7.56586 7.17603 7.56586 7.72081Z" stroke="#DFDDD5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.0013 5.73204V7.03705C16.0013 7.38545 15.6713 7.67045 15.2513 7.68312H13.7811C12.9711 7.68312 12.2286 7.18268 12.1611 6.49854C12.1161 6.09945 12.2961 5.72571 12.6111 5.46599C12.8886 5.22527 13.2712 5.08594 13.6912 5.08594H15.2513C15.6713 5.09861 16.0013 5.38363 16.0013 5.73204Z" stroke="#DFDDD5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1 5.43426V4.16733C1 2.4443 2.23005 1.24072 4.14262 1.03801C4.33763 1.01267 4.54013 1 4.75014 1H11.5004C11.6954 1 11.8829 1.00633 12.0629 1.03167C13.998 1.22171 15.2505 2.43163 15.2505 4.16733V5.08586H13.6905C13.2705 5.08586 12.8879 5.22522 12.6104 5.46594C12.2954 5.72566 12.1154 6.0994 12.1604 6.49849C12.2279 7.18263 12.9705 7.68307 13.7805 7.68307H15.2505V8.60159C15.2505 10.502 13.7505 11.7689 11.5004 11.7689H9.62532" stroke="#DFDDD5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        wallet
                        
                        </a>
                      {/* <a onClick={() => alert('refer')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4819 0.0332031L11.3798 0.084728C9.0438 1.26335 5.94548 1.26335 3.60953 0.084728L3.5124 0.035753C0.0034039 3.88625 -3.67784 11.1068 7.51624 10.9987C18.7026 10.8905 14.9637 3.75339 11.4819 0.0332031ZM8.14174 2.74985H6.85827V3.34985C6.44119 3.34888 6.04016 3.49982 5.74005 3.77068C5.44001 4.04147 5.26455 4.41088 5.25086 4.80061C5.23718 5.19035 5.38635 5.56974 5.66674 5.85838C5.94716 6.14701 6.33679 6.32221 6.75304 6.34685L6.85827 6.34985H8.14174L8.19949 6.35465C8.27348 6.36718 8.34042 6.40359 8.3886 6.45755C8.43679 6.51148 8.46323 6.57958 8.46323 6.64985C8.46323 6.72013 8.43679 6.78823 8.3886 6.84215C8.34042 6.89611 8.27348 6.93253 8.19949 6.94505L8.14174 6.94985H5.57479V8.14985H6.85827V8.74985H8.14174V8.14985C8.55882 8.15083 8.95984 7.99989 9.25995 7.72903C9.55999 7.45824 9.73545 7.08883 9.74914 6.69909C9.76283 6.30935 9.61366 5.92996 9.33327 5.64133C9.05284 5.35269 8.66322 5.17749 8.24697 5.15285L8.14174 5.14985H6.85827L6.80052 5.14505C6.72653 5.13253 6.65959 5.09612 6.6114 5.04215C6.56322 4.98823 6.53678 4.92013 6.53678 4.84985C6.53678 4.77958 6.56322 4.71148 6.6114 4.65755C6.65959 4.60359 6.72653 4.56718 6.80052 4.55465L6.85827 4.54985H9.42522V3.34985H8.14174V2.74985Z" fill="#DFDDD5"/>
                      </svg>
                        refer &amp; earn</a> */}

                      <a onClick={() => handleLinkClick('Profile')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                        <path d="M5.25021 6.00023C6.9073 6.00023 8.25032 4.65721 8.25032 3.00012C8.25032 1.34302 6.9073 0 5.25021 0C3.59311 0 2.25009 1.34302 2.25009 3.00012C2.25009 4.65721 3.59311 6.00023 5.25021 6.00023ZM7.35029 6.75026H6.95887C6.43853 6.98934 5.8596 7.12528 5.25021 7.12528C4.64081 7.12528 4.06422 6.98934 3.54154 6.75026H3.15012C1.41099 6.75026 0 8.16126 0 9.90039V10.8754C0 11.4965 0.503926 12.0005 1.12504 12.0005H7.56826C7.51201 11.8411 7.48857 11.6723 7.50732 11.5012L7.66671 10.0738L7.69483 9.81366L7.88 9.6285L9.69178 7.81671C9.11754 7.16747 8.28548 6.75026 7.35029 6.75026ZM8.41205 10.1559L8.25267 11.5856C8.22688 11.8247 8.42845 12.0263 8.66518 11.9981L10.0926 11.8387L13.3247 8.60659L11.6442 6.92605L8.41205 10.1559ZM14.8365 6.30259L13.9482 5.41427C13.7302 5.1963 13.374 5.1963 13.156 5.41427L12.27 6.30025L12.1739 6.39634L13.8568 8.07688L14.8365 7.09715C15.0545 6.87683 15.0545 6.52291 14.8365 6.30259Z" fill="#DFDDD5"/>
                        </svg>
                        profile</a>
      
                      <a onClick={handleLogout}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M11.8889 10.3333L15 7.22222M15 7.22222L11.8889 4.11111M15 7.22222H4.11111M8.77778 10.3333V11.1111C8.77778 12.3998 7.73314 13.4444 6.44444 13.4444H3.33333C2.04467 13.4444 1 12.3998 1 11.1111V3.33333C1 2.04467 2.04467 1 3.33333 1H6.44444C7.73314 1 8.77778 2.04467 8.77778 3.33333V4.11111" stroke="#DFDDD5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        logout</a>
                  </div>
                )}
              </div>
              <div className='dropdown-button-icon' onClick={handleChatToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.3498 5.3012C18.8137 5.3012 20.0004 4.11449 20.0004 2.6506C20.0004 1.18672 18.8137 0 17.3498 0C15.8859 0 14.6992 1.18672 14.6992 2.6506C14.6992 4.11449 15.8859 5.3012 17.3498 5.3012Z" fill="#DFDDD5"/>
                <path d="M16.4241 6.65061C14.9108 6.3229 13.6771 5.08917 13.3494 3.57591C13.2241 2.98796 13.2145 2.41929 13.3205 1.87953C13.4458 1.28194 13.0024 0.7229 12.3855 0.7229H4.81928C2.15904 0.7229 0 2.88194 0 5.54218V12.241C0 14.9012 2.15904 17.0603 4.81928 17.0603H6.26506C6.53494 17.0603 6.88193 17.2337 7.03614 17.4458L8.48193 19.3639C9.11807 20.2121 10.159 20.2121 10.7952 19.3639L12.241 17.4458C12.4241 17.2048 12.7036 17.0603 13.012 17.0603H14.4675C17.1277 17.0603 19.2771 14.9109 19.2771 12.2506V7.61447C19.2771 7.00724 18.7181 6.56386 18.1205 6.67953C17.5807 6.77591 17.012 6.77591 16.4241 6.65061ZM5.78313 10.3615C5.24337 10.3615 4.81928 9.92772 4.81928 9.3976C4.81928 8.86748 5.24337 8.43374 5.78313 8.43374C6.31325 8.43374 6.74699 8.86748 6.74699 9.3976C6.74699 9.92772 6.32289 10.3615 5.78313 10.3615ZM9.63855 10.3615C9.09879 10.3615 8.6747 9.92772 8.6747 9.3976C8.6747 8.86748 9.09879 8.43374 9.63855 8.43374C10.1687 8.43374 10.6024 8.86748 10.6024 9.3976C10.6024 9.92772 10.1783 10.3615 9.63855 10.3615ZM13.494 10.3615C12.9542 10.3615 12.5301 9.92772 12.5301 9.3976C12.5301 8.86748 12.9542 8.43374 13.494 8.43374C14.0241 8.43374 14.4578 8.86748 14.4578 9.3976C14.4578 9.92772 14.0337 10.3615 13.494 10.3615Z" fill="#DFDDD5"/>
                </svg>
              </div>
              {/* <FontAwesomeIcon className="dropdown-button-icon"  icon={faMessage} style={{color: "#ffffff" }} /> */}
            </div>
      </div>
    </div>

  );
};

export default Headers;
