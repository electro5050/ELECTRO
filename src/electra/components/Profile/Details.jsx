import React, { useState, useRef ,useEffect  } from 'react';

import Avathar from 'electra/components/Common/AvatharView';
import Modal from './model';
import axios from 'common/electra_axios';
import { jwtDecode } from 'jwt-decode';
import config from 'common/constants';

const avatharContainerStyle = {
  display: "flex",
  alignItems: "center"
};


const avatarStyle = {
  width: 'calc(25px + 2.5vh + 2.5vw)',
  height: 'calc(25px + 2.5vh + 2.5vw)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  margin:"1vh",
  overflow: "hidden"
};

const avatharButton = {
  borderRadius: '12px',
  background: 'rgb(79, 79, 79)',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px inset',
  width: '10vw',
  padding: '10px',
  textAlign: 'center',
  float: 'right',
  color: "#fff799",
  cursor:"pointer"
};


const Details = () => {

  const token = localStorage.getItem('token');
  const [uploading,setUploading] = useState(false);
  const [uploadError,setUploadError] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token); 
      setUserId(decodedToken.userId);
    }
  }, []);

  const [profileImage,setProfileImage]=useState(null)

  const localUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localUser || null);
  const [isImagePopUpOpen, setIsImagePopUpOpen] = useState(false);

  const ImageEditButtonClick = () => {
    setIsImagePopUpOpen(true)
  };

  const closeAvatharEditModal = () => {
    setIsImagePopUpOpen(false)
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const avatharCount = 30;


  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploading(true);
      setUploadError(null);
  
      try {
        const response = await axios.get(config.gameApiUrl + '/generate-presigned-url', {
          headers: { 'Authorization': `Bearer ${token}` } 
        });
  
        if (response.data.preSignedUrl) {
          
          const uploadResult = await fetch(response.data.preSignedUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: file
          });
  
          if (uploadResult.ok) {
            console.log('Upload success:', uploadResult, response.data.key);

            const url = new URL(uploadResult.url);

            // Extract the necessary parts
            const protocol = url.protocol;
            const host = url.host;
            const pathname = url.pathname;

            // Concatenate the parts to get the original URL without query parameters
            const originalUrlWithoutParams = `${protocol}//${host}${pathname}`;
            setProfileImage(originalUrlWithoutParams);
            setSelectedAvatar(originalUrlWithoutParams);
            // const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${key}`;
            // const updateResponse = await axios.post(config.gameApiUrl + '/update-profile-picture', {
            //   userId: user[0].id, 
            //   key: response.data.key
            // }, {
            //   headers: { 'Authorization': `Bearer ${token}` } 
            // });
  
            // console.log('Profile picture updated:', updateResponse.data);
          } else {
            throw new Error('Failed to upload file to S3');
          }
        }
      } catch (err) {
        console.error('Upload error:', err);
        setUploadError(err.message);
      } finally {
        setUploading(false);
      }
    } else {
      alert('Please select an image file.');
    }
  };
  

const handleAvatarClick = (avatarPath) => {
  setSelectedAvatar(avatarPath);
};

const handleAvatarSelect = async () => {
  try {
   
    const headers = {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    };

    const data = {
      userId: userId,             
      avatarFileName: selectedAvatar
    };

    const response = await axios.post(
      config.gameApiUrl + '/update-avatar',
      data,
      { headers: headers }
    );

    let localUser = JSON.parse(localStorage.getItem('user'));
    localUser.profilePictureUrl = data.avatarFileName;
    localStorage.setItem('user', JSON.stringify(localUser));
    setUser(localUser); 
    closeAvatharEditModal();
  } catch (error) {
    console.error('Error updating avatar:', error);
    alert('Failed to update avatar.');
  }
};


const getSelectedAvatharStyle = (avatarPath) => {
  return selectedAvatar === avatarPath ? {
    ...avatarStyle,
    border: "2px solid red",
   } : {...avatarStyle};
};


  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={avatharContainerStyle}>
      <div>
      <Avathar 
          imageUrl={(user && user.profilePictureUrl)  || "assets/Avatars/avathar_1.png"}

          imageSize={'calc(25px + 2.5vh + 2.5vw)'} 
          editIconClick={ImageEditButtonClick} 
        />
      
        <Modal isOpen={isImagePopUpOpen} onClose={closeAvatharEditModal}>
          <span style={{ color:"white"}} className="font-6">Choose your avathar</span>
          <div style={{width: "37vw", marginTop:"2vh" , display: "flex", flexWrap: "wrap", maxHeight: "30vh", 
          overflowY: "scroll", marginBottom:"2vh"}}>
            <div style={{...avatarStyle, color:'black'}} className={"avathar-conainer-rounded"} onClick={handleFileUpload}>
          {profileImage  ?       <img src={profileImage} alt={`pic`} style={{ height: "90%", marginTop: "10%" }} />
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none">
            <path d="M30.0827 19.5001C29.6628 19.5001 29.26 19.6581 28.9631 19.9394C28.6662 20.2207 28.4993 20.6023 28.4993 21.0001V21.5701L26.156 19.3501C25.3286 18.5724 24.2103 18.136 23.0448 18.136C21.8792 18.136 20.7609 18.5724 19.9335 19.3501L18.8252 20.4001L14.8985 16.6801C14.0595 15.9235 12.9456 15.5015 11.7873 15.5015C10.629 15.5015 9.51499 15.9235 8.67602 16.6801L6.33268 18.9001V10.5001C6.33268 10.1023 6.4995 9.72073 6.79643 9.43943C7.09336 9.15812 7.49609 9.00009 7.91602 9.00009H18.9993C19.4193 9.00009 19.822 8.84205 20.1189 8.56075C20.4159 8.27944 20.5827 7.89791 20.5827 7.50009C20.5827 7.10226 20.4159 6.72073 20.1189 6.43943C19.822 6.15812 19.4193 6.00009 18.9993 6.00009H7.91602C6.65624 6.00009 5.44806 6.47419 4.55726 7.31811C3.66646 8.16202 3.16602 9.30661 3.16602 10.5001V28.5001C3.16602 29.6936 3.66646 30.8382 4.55726 31.6821C5.44806 32.526 6.65624 33.0001 7.91602 33.0001H26.916C28.1758 33.0001 29.384 32.526 30.2748 31.6821C31.1656 30.8382 31.666 29.6936 31.666 28.5001V21.0001C31.666 20.6023 31.4992 20.2207 31.2023 19.9394C30.9053 19.6581 30.5026 19.5001 30.0827 19.5001ZM7.91602 30.0001C7.49609 30.0001 7.09336 29.8421 6.79643 29.5608C6.4995 29.2794 6.33268 28.8979 6.33268 28.5001V23.1451L10.9243 18.7951C11.157 18.5851 11.466 18.4679 11.7873 18.4679C12.1086 18.4679 12.4176 18.5851 12.6502 18.7951L17.6693 23.5501L24.4777 30.0001H7.91602ZM28.4993 28.5001C28.4971 28.7872 28.3971 29.066 28.2143 29.2951L21.0735 22.5001L22.1819 21.4501C22.2954 21.3403 22.4309 21.2531 22.5804 21.1936C22.7299 21.1341 22.8905 21.1034 23.0527 21.1034C23.2149 21.1034 23.3754 21.1341 23.525 21.1936C23.6745 21.2531 23.81 21.3403 23.9235 21.4501L28.4993 25.8151V28.5001ZM35.9568 6.43509L31.2068 1.93509C31.0563 1.79853 30.8787 1.69148 30.6843 1.62009C30.2989 1.47006 29.8665 1.47006 29.481 1.62009C29.2867 1.69148 29.1091 1.79853 28.9585 1.93509L24.2085 6.43509C24.0609 6.57495 23.9438 6.74098 23.8639 6.92371C23.784 7.10645 23.7429 7.3023 23.7429 7.50009C23.7429 7.89954 23.9104 8.28263 24.2085 8.56509C24.5067 8.84754 24.911 9.00623 25.3327 9.00623C25.7543 9.00623 26.1587 8.84754 26.4568 8.56509L28.4993 6.61509V15.0001C28.4993 15.3979 28.6662 15.7794 28.9631 16.0607C29.26 16.3421 29.6628 16.5001 30.0827 16.5001C30.5026 16.5001 30.9053 16.3421 31.2023 16.0607C31.4992 15.7794 31.666 15.3979 31.666 15.0001V6.61509L33.7085 8.56509C33.8557 8.70568 34.0308 8.81727 34.2238 8.89342C34.4167 8.96958 34.6237 9.00879 34.8327 9.00879C35.0417 9.00879 35.2487 8.96958 35.4416 8.89342C35.6345 8.81727 35.8097 8.70568 35.9568 8.56509C36.1053 8.42564 36.223 8.25974 36.3034 8.07695C36.3838 7.89416 36.4252 7.69811 36.4252 7.50009C36.4252 7.30207 36.3838 7.10601 36.3034 6.92322C36.223 6.74043 36.1053 6.57453 35.9568 6.43509Z" fill="black"/>
          </svg>
        }
      


            
                        <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileSelected}
                  ref={fileInputRef}
                />

            </div>
            
           
        { [...Array(avatharCount).keys()].map((number) => {
            const avatarPath = `assets/Avatars/avathar_${number + 1}.png`;
            return (
              <div key={number} style={getSelectedAvatharStyle(avatarPath)} className="avathar-conainer-rounded" onClick={() => handleAvatarClick(avatarPath)}>
                <img src={avatarPath} alt={`Avatar ${number + 1}`} style={{ height: "90%", marginTop: "10%" }} />
              </div>
            );
        })}
      


          </div>
          <div onClick={handleAvatarSelect} style={avatharButton} className="font-4">apply new avatar</div>
      </Modal>
      </div>

      
      <div style={{paddingLeft:"10px"}}>
          <div style={{display:"flex", alignItems: "center"}}>
              <div style={{color:"white", fontWeight:"800"}} className="font-6">
              {user && user ? user.name : 'Loading...'}
              </div>
              <div style={{marginLeft:"10px"}} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="calc(7px + 0.7vh + 0.7vw)"
                height="calc(7px + 0.7vh + 0.7vw)"
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
          <div style={{color:"#B7B7B7", marginTop: "10px"}} className="font-6">
            User ID: {user && user ? user.userId : 'Loading...'}
          </div>
      </div>  

    </div>

    <div style={{color:"white", fontWeight:"800", width:"15vw", ...avatharContainerStyle}} className="font-4">
    {user && user ? user.name : 'Loading...'}, you're one of our most anticipated bidders! Play more and Earn more. GOOD LUCK!
    </div>

    </div>
  );
};

export default Details;


 
 

