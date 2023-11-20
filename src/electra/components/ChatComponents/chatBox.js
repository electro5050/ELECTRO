import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo  } from '@fortawesome/free-solid-svg-icons';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "flex-start"
};

const ChatSection = ({chatDetails}) => {

    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user); 
    }, []);


  return (
    <div className="chat-section" style={{overflowY:"auto", height:"100%", marginBottom:"10px"}}>
        <div style={avatharContainerStyle}>
        <Avathar imageUrl={(chatDetails.user && chatDetails.user.profilePictureUrl) || "assets/Avatars/avathar_1.png"}imageSize={'calc(8px + 0.8vw + 0.8vh'}/>
        <div style={{paddingLeft:"10px",  width: chatDetails.type == 'win' ? '100%' : '100%'}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems: "end"}}>
                <div className='font-5'>
                    {chatDetails.user.name}
                </div>
                <div style={{marginLeft:"10px" }} className="font-4">
                    {chatDetails.time}
                </div>
            </div>
            {
                chatDetails.type == 'win' ? 

                <div style={{width:"100%", padding:"5px", background:"#474242", borderRadius:"0.2vw", marginTop: "5px", }}>
                    wow! moment
                    <div style={
                        {
                            textAlign: 'center',
                            padding: '0',
                            // background: '#1B1B1B',
                            marginTop:'0.5vw',
                            marginBottom:'0.5vw',
                            paddingBottom:"0.5vw",
                            background: "linear-gradient(180deg, #F1C45D 0%, rgba(27, 27, 27, 0.00) 100%)"
                        }
                    }>
                        {/* <div style={
                            {
                                background: 'linear-gradient(180deg, #F1C45D 0%, rgba(27, 27, 27, 0.00) 100%)',
                                height: "2vw"
                            }
                        }>
                        </div>  */}
                        <img src={"assets/electra/win-shield.png"}  alt=""  style={{height:"10vw", marginTop:"calc(5px + 0.5vw + 0.5vh)"}}/>
                    </div> 
                    <div style={{display:"flex", justifyContent:"flex-start", padding:"2px 10px", alignItems:"center"}}>
                        {/* <div style={{display:"flex", alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                        <path d="M11.6667 0H2.33333C1.04222 0 0 1.03444 0 2.31V10.7956C0 12.0711 1.04222 13.1056 2.33333 13.1056H2.92444C3.54667 13.1056 4.13778 13.3467 4.57333 13.7822L5.90333 15.0967C6.51 15.6956 7.49778 15.6956 8.10444 15.0967L9.43444 13.7822C9.87 13.3467 10.4689 13.1056 11.0833 13.1056H11.6667C12.9578 13.1056 14 12.0711 14 10.7956V2.31C14 1.03444 12.9578 0 11.6667 0ZM7.21778 10.08C7.10111 10.1189 6.90667 10.1189 6.78222 10.08C5.77111 9.73 3.5 8.29111 3.5 5.84111C3.50778 4.76 4.37111 3.88889 5.44444 3.88889C6.08222 3.88889 6.64222 4.19222 7 4.66667C7.35778 4.19222 7.91778 3.88889 8.55556 3.88889C9.62889 3.88889 10.5 4.76 10.5 5.84111C10.4922 8.29111 8.22889 9.73 7.21778 10.08Z" fill="#DFDDD5"/>
                        </svg>
                            &nbsp;
                        138
                        </div>    */}
                        <div style={{display:"flex", alignItems:"center"}}>
                        <img
                            className="coin-image"
                            id="logo_header"
                            src={"/assets/electra/gold-coin.png"}
                            alt="electra"
                            style={{width:"calc(8px + 0.8vw + 0.8vh)" , padding:"0px 0px"}}
                        />
                            <span style={{paddingLeft:"5px", color:"#70D77A", fontWeight:"900"}} className="font-6">+&nbsp;{chatDetails.message}</span>
                        </div> 
                    </div>
                </div>
                :

                <div style={{background:"#474242", borderRadius:"0.2vw", padding:"5px 10px", marginTop: "5px",     overflowWrap: "break-word",
                        whiteSpace: "pre-wrap"}} className="font-5">
                    {chatDetails.message} 
                </div>

            }
          
        </div>  

      </div>
    </div>
  );
};

export default ChatSection;
