import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Avathar from 'electra/components/Common/AvatharView';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "center"
};
const token = localStorage.getItem('token');
const GameTopSection = ({handleLinkClick}) => {

  const [user, setUser] = useState([]);
  const [userAvatar, setUserAvatar] = useState('null');
  const [profileImage,setProfileImage]=useState('')

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://192.168.29.85:3000/users', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && typeof data === 'object') {
              setUser([data]);
              setUserAvatar(data.avatar); 
              setProfileImage(data.profilePictureUrl)
          }
      })
      .catch(error => {
          console.error('Error fetching user data:', error);
      });
    }
  }, [token]);

  return (
    <div className='d-between m-10'>
      <div style={avatharContainerStyle}>
        <Avathar imageUrl={profileImage || userAvatar || "assets/Avatars/avathar_1.png"} imageSize={'5vh'}/>
        <div style={{marginLeft:"5px"}}>
            <span style={{fontWeight: "700"}}  className="font-8">
                BID AND WIN
            </span>
            <br />
            <span style={{fontWeight: "500"}} className="font-5">
                welcome back
            </span>
        </div>
      </div>
      <div className='d-center v-cen '>
        <div style={{background:"#DEA83F", borderRadius:"10px", padding:"2px"}}  onClick={() => handleLinkClick("Referal")}>
          <img
                className="referal-image"
                id="logo_header"
                src={"assets/electra/tressure.png"}
                srcSet={"assets/electra/tressure.png"}
                alt="electra"
                style={{width:"calc(18px + 1.8vh + 1.8vw)",   transform: "scaleX(-1)"}}
            />
            <a href="#" className='referal-anchor'>
           
              <span style={{color:"white",   textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} className="font-5">refer and earn</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default GameTopSection;