import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from 'electra/components/sidebar';
import './index.css';
import GameHistoryTable from 'electra/components/Profile/GameHistoryTable';
import Avathar from 'electra/components/Common/AvatharView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const avatharContainerStyle = {
  display: "flex",
  alignItems: "center"
};



const InputStyle = {
  padding: 0,
  margin: 0,
  height: 'auto',
  border: 'none',
  width: 'min-content',
  borderBottom: '1px solid white',
  fontSize: '1vw',
};

const ProfileUpdate = ({user}) => {

  const [gameHistory, setGameHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
      fetch('http://192.168.29.85:3000/usergamehistory', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data && Array.isArray(data)) {
              setGameHistory(data);
          }
      })
      .catch(error => {
          console.error('Error fetching user game history:', error);
      });
  }, []);
  console.log(gameHistory)

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile-page-main" style={{height:'88vh', background:"rgba(40, 40, 40, 0.60)", borderRadius:"1vw", padding:"1vw",   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',}}>
      {/* <GameHistoryTable rankingData={rankingData} /> */}
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={avatharContainerStyle}>
        <Avathar imageUrl="assets/electra/avathar_test.png" imageSize={'6vw'} isEditable={true}/>
        <div style={{paddingLeft:"10px"}}>
            <div style={{display:"flex", alignItems: "center"}}>
                <div style={{fontSize: "1.2vw", color:"white", fontWeight:"800"}}>
                {gameHistory.length > 0 ? gameHistory[0].username : 'Loading...'}
                </div>
                <div style={{marginLeft:"10px", fontSize: "0.5vw"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2vw"
                  height="1.2vw"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M24.9947 16.8557L25.8374 20.7928L22.0028 21.9967L20.7988 25.8314L16.8557 24.9947L13.8458 27.6916L10.8358 24.9947L6.89881 25.8374L5.66473 22.0028L1.83005 20.7988L2.69692 16.8557L0 13.8458L2.69692 10.8358L1.85413 6.92289C6.24264 5.50821 5.65871 5.79115 5.76707 5.442L6.92289 1.83005L10.8358 2.69692L13.8458 0L16.8557 2.69692L20.7928 1.85413L21.9967 5.68881L25.8314 6.92289L24.9947 10.8358L27.6916 13.8458L24.9947 16.8557Z"
                    fill="#82BCF4"
                  />
                  <path
                    d="M22.8756 21.6716C22.8756 21.7378 23.0021 21.6716 22.0028 22.0027L20.7988 25.8374L16.8557 24.9946L13.8458 27.6915L10.8358 24.9946L6.89881 25.8374L5.66473 22.0027L1.83005 20.7987L2.69692 16.8557L0 13.8457L2.69692 10.8358L1.85413 6.92283C6.24264 5.50815 5.65871 5.79108 5.76707 5.44193C7.97034 5.32589 10.1742 5.65964 12.2443 6.42284C14.3144 7.18603 16.2075 8.3627 17.8081 9.88115C19.4088 11.3996 20.6836 13.228 21.5548 15.2551C22.426 17.2821 22.8754 19.4653 22.8756 21.6716Z"
                    fill="#6FABE6"
                  />
                  <path
                    d="M22.8761 13.8457C22.8753 15.2579 22.5432 16.6502 21.9066 17.9107C21.2701 19.1713 20.3467 20.2649 19.2108 21.1039C18.0748 21.9428 16.7579 22.5037 15.3659 22.7413C13.9739 22.979 12.5455 22.8868 11.1956 22.4723C9.84563 22.0578 8.61172 21.3324 7.59297 20.3544C6.57423 19.3765 5.79905 18.1733 5.32971 16.8414C4.86037 15.5095 4.70996 14.0861 4.89055 12.6855C5.07114 11.2849 5.5777 9.94623 6.36954 8.77696C11.3841 1.43267 22.8761 4.98442 22.8761 13.8457Z"
                    fill="#EDEBF2"
                  />
                  <path
                    d="M20.468 16.2538C20.4691 18.0607 19.9281 19.8264 18.9149 21.3225C17.1769 22.5053 15.0807 23.0446 12.9877 22.8474C10.8946 22.6503 8.93602 21.729 7.44949 20.2424C5.96295 18.7559 5.04168 16.7973 4.8445 14.7043C4.64733 12.6113 5.18662 10.5151 6.36939 8.77706C7.72733 7.856 9.31058 7.32236 10.949 7.23347C12.5874 7.14459 14.2191 7.50383 15.6687 8.27258C17.1184 9.04133 18.3311 10.1905 19.1767 11.5967C20.0223 13.0029 20.4687 14.6129 20.468 16.2538Z"
                    fill="#DAD7E5"
                  />
                  <path
                    d="M18.9633 11.8472L13.3167 17.4939C12.978 17.8321 12.519 18.0221 12.0404 18.0221C11.5619 18.0221 11.1028 17.8321 10.7642 17.4939L8.7295 15.4592C8.49001 15.2197 8.35547 14.8949 8.35547 14.5562C8.35547 14.2175 8.49001 13.8927 8.7295 13.6532C8.96898 13.4137 9.2938 13.2792 9.63248 13.2792C9.97117 13.2792 10.296 13.4137 10.5355 13.6532L12.0404 15.1582C18.5529 8.31355 16.7059 10.4988 17.1574 10.0413C17.3969 9.80178 17.7217 9.66724 18.0604 9.66724C18.399 9.66724 18.7239 9.80178 18.9633 10.0413C19.2028 10.2808 19.3374 10.6056 19.3374 10.9443C19.3374 11.2829 19.2028 11.6078 18.9633 11.8472Z"
                    fill="#82BCF4"
                  />
                  <path
                    d="M18.3602 12.4491L13.3155 17.4938C12.9769 17.832 12.5179 18.0219 12.0393 18.0219C11.5607 18.0219 11.1017 17.832 10.7631 17.4938L8.72838 15.459C8.54173 15.2728 8.41769 15.033 8.37346 14.773C8.32923 14.5131 8.36702 14.2458 8.48156 14.0083C8.71909 13.8937 8.98638 13.8559 9.24635 13.9001C9.50632 13.9444 9.74608 14.0684 9.93236 14.2551L11.4373 15.76C18.5529 8.64451 16.1329 11.0705 16.6506 10.5528C16.902 10.3261 17.2333 10.2086 17.5714 10.2261C17.9095 10.2436 18.2268 10.3947 18.4535 10.6461C18.6803 10.8976 18.7978 11.2288 18.7803 11.5669C18.7628 11.9051 18.6117 12.2224 18.3602 12.4491Z"
                    fill="#6FABE6"
                  />
                </svg>
                </div>
            </div>
            <div style={{fontSize: "1.2vw", color:"#B7B7B7", marginTop: "10px"}}>
              User ID: shfrbdnbd135467
            </div>
        </div>  

      </div>

      <div style={{fontSize: "0.8vw", color:"white", fontWeight:"800", width:"15vw", ...avatharContainerStyle}}>
      {gameHistory.length > 0 ? gameHistory[0].username : 'Loading...'}, you're one of our most anticipated bidders! Play more and Earn more. GOOD LUCK!
      </div>

      </div>

      <div className="profile-section" style={{height:'60vh', background:"rgba(10, 10, 10, 0.7)", borderRadius:"1vw", padding:"3vw", marginLeft:"4vw"}}>

        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
          <div style={{fontSize: "1vw", ...avatharContainerStyle}}>
            Your Name : 
            {isEdit ? (
              <input type="text" placeholder="Enter Name" value={"Shafeer_3218"} style={InputStyle} />
            ) : (
              <label>{gameHistory.length > 0 ? gameHistory[0].userId : 'Loading...'}</label>
            )}
            
            &nbsp;
            {
              !isEdit && <FontAwesomeIcon icon={faEdit} onClick={() => setIsEdit(true)} style={{paddingLeft:"10px"}}/>
            }

            {
              isEdit && 
              <>
                <FontAwesomeIcon icon={faCheck} onClick={() => alert("save")} style={{paddingLeft:"10px"}}/>
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsEdit(false)} style={{paddingLeft:"10px"}}/>
              </>

            }


          </div>

          <div style={{marginTop:"1vh", fontSize: "1vw", ...avatharContainerStyle}}>
          Your Email ID : 
            {isEdit ? (
              <input type="text" placeholder="Enter Name" value={"shafeer3218@gmail.com"} style={InputStyle} />
            ) : (
              <label>shafeer3218@gmail.com</label>
            )}
            
            &nbsp;
            {
              !isEdit && <FontAwesomeIcon icon={faEdit} onClick={() => setIsEdit(true)} style={{paddingLeft:"10px"}}/>
            }

            {
              isEdit && 
              <>
                <FontAwesomeIcon icon={faCheck} onClick={() => alert("save")} style={{paddingLeft:"10px"}}/>
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsEdit(false)} style={{paddingLeft:"10px"}}/>
              </>

            }


          </div>

          <div style={{ marginTop:"1vh", fontSize: "1vw", ...avatharContainerStyle}}>
          Your Phone Number  : 
            {isEdit ? (
              <input type="text" placeholder="Enter Name" value={"92384657488"} style={InputStyle} />
            ) : (
              <label>92384657488</label>
            )}
            
            &nbsp;
            {
              !isEdit && <FontAwesomeIcon icon={faEdit} onClick={() => setIsEdit(true)} style={{paddingLeft:"10px"}}/>
            }

            {
              isEdit && 
              <>
                <FontAwesomeIcon icon={faCheck} onClick={() => alert("save")} style={{paddingLeft:"10px"}}/>
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsEdit(false)} style={{paddingLeft:"10px"}}/>
              </>

            }


          </div>
          </div>



        <div style={{textDecoration: 'underline', fontSize: "0.8vw", color:"B9B9B9", fontWeight:"500", ...avatharContainerStyle}}>
        Verify Your Identity for easy withdrawal<span style={{color:"FFD700"}}>!</span>
        </div>

        </div>
        <GameHistoryTable />
      </div>
    </div>
  );
};

export default ProfileUpdate;
