import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Avathar from 'electra/components/Common/AvatharView';
import { connect } from 'react-redux';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "center"
};

const GameTopSection = ({userData, handleLinkClick}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <div className='d-between m-10'>
      {/* <div style={avatharContainerStyle}>
        <Avathar imageUrl={(user && user.profilePictureUrl) || "assets/Avatars/avathar_1.png"} imageSize={'5vh'}/>
        <div style={{marginLeft:"5px"}}>
            <span style={{fontWeight: "700"}}  className="font-8">
                BID AND WIN
            </span>
            <br />
            <span style={{fontWeight: "500"}} className="font-5">
                welcome back
            </span>
        </div>
      </div> */}
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

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(GameTopSection);