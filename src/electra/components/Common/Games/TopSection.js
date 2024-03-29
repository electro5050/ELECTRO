import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import Avathar from 'electra/components/Common/AvatharView';
import config from 'common/constants';
import { connect } from 'react-redux';

const avatharContainerStyle = {
    display: "flex",
    alignItems: "center"
};

const GameTopSection = ({userData}) => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <div className="game-view-top-section" style={{height:"15vh",     position: "relative"}}>
      <div style={avatharContainerStyle}>
        <Avathar imageUrl={(user && user.profilePictureUrl) || "assets/Avatars/avathar_1.png"} imageSize={'calc(16px + 1.6vh + 1.6vw)'}/>
        <span style={{paddingLeft:"10px"}} className="font-5">
         Hi {user && user ? user.name : 'Loading...'}, welcome back!
        </span>
      </div>
        <div style={{marginTop:"5px"}}>
            <span style={{fontWeight: "700",     letterSpacing: "2px"}} className="font-8">
                BID AND WIN
            </span>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center", position: "absolute", bottom:"10%"}}>
        <span style={{fontWeight: "400", color:"#FBF4B6" }} className="font-6">
        Win every  <span style={{color:"#EFCA04"}}>30</span> seconds
      </span>
        </div>


    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(GameTopSection);