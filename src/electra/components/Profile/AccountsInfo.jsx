import React, { useState, useEffect } from 'react';
import Avathar from 'electra/components/Common/AvatharView';
import Modal from './model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';
import { connect } from 'react-redux';
import config from '../../../../src/common/constants'

const avatharContainerStyle = {
  display: "flex",
  alignItems: "center"
};

const passwordChangeCommnDivStyle = {
  marginTop: "2vh",
};



const InputStyle = {
  padding: 0,
  margin: 0,
  height: 'calc(4px + 0.4vw + 0.4vh)',
  fontSize:"calc(4px + 0.1vw + 0.14vh)",
  border: 'none',
  width: 'min-content',
  color:"white",
  width:"100%",
  '::placeholder': {
    fontSize:"calc(4px + 0.1vw + 0.14vh)",
  },
};

const passwordChangeButton = {
  borderRadius: '12px',
  background: '#FFD700',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
  width: '10vw',
  padding: '5px',
  textAlign: 'center',
  float: 'right',
  color: "black"
};


const AccountInfo = ({userData}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [isPasswordPopUpOpen, setIsPasswordOpen] = useState(false);
  const [name, setName] = useState(null);

  const [user, setUser] = useState(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  
  useEffect(() => {
    setUser(userData);
    setName(userData?.name);
  }, [userData]);

  const OnSubmitClieck = () => {
    alert("save");
    let newName = name;
  };

  const closePasswordChangeModal = () => {
    setIsPasswordOpen(false)
  };

  const handleChangePassword = async () => {
    const token = localStorage.getItem('token');
    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match.');
      return;
    }

    try {
      const response = await fetch(config.gameApiUrl +'/change-password', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
          name: name,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert('Password changed successfully');
        closePasswordChangeModal();
      } else {
        alert(data.message); // Display error message from the server
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password');
    }
  };
  useEffect(() => {
    console.log({ current_password: currentPassword, new_password: newPassword });
  }, [currentPassword, newPassword]);


  return (
    <div style={{width:"100%",  borderRadius: '15px',
    background: 'rgba(39, 30, 6, 0.70)',
    maxHeight:'40vh',
    padding:"20px"
    }} className="font-4"> 

      <div style={{...avatharContainerStyle, justifyContent:'space-between'}}>
          <div>
            Your Account Information
          </div>
          <div>
            {
              !isEdit && (<span onClick={() => setIsEdit(true)} style={{cursor:"pointer" }}>edit <FontAwesomeIcon icon={faEdit} style={{paddingLeft:"10px"}}/> </span>)
            }

            {
              isEdit && 
              <span style={{color:"#FFD700", float:"right", cursor:"pointer" , textDecoration:"underline"}} onClick={() => setIsEdit(false)} >
                cancel
                <FontAwesomeIcon icon={faTimes} style={{paddingLeft:"10px"}}/>
              </span>

            }

            
          </div>
      </div>


      <div style={{width:"100%",
          display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Name
          </div>

          <div style={{width:"60%",
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                {isEdit ? (
           <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} style={InputStyle} className="font-4" />

            ) : (
              <label>{user?.name}</label>
            )}
          </div>
      </div>

      <div style={{width:"100%",
          display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Email ID
          </div>

          <div style={{width:"60%",
                borderRadius: '4px',
                background: isEdit ? 'red' : 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                <label>{user?.email} {isEdit && <span style={{float:"right"}}>email cannot be changed</span>}</label>
          </div>
      </div>

      <div style={{width:"100%",
          display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Password
          </div>

          <div style={{width:"60%",
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                 <label>************* {isEdit && <span style={{float:"right", color:"#FFD700"}} onClick={() => {setIsPasswordOpen(true)}}>change password</span>}</label>
          </div>
      </div>

      <div style={{width:"100%",
          display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Phone number
          </div>

          <div style={{width:"60%",
                borderRadius: '4px',
                background: isEdit ? 'red' : 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                {isEdit ? (
           <input type="text" placeholder="Enter Name" value={"############"} style={InputStyle} />
            ) : (
              <label>############</label>
            )}
          </div>
          
      </div>

      {isEdit &&
      <div style={{marginTop:'1%'}}>
      <span style={{color:"#FFD700", float:"right", cursor:"pointer" , textDecoration:"underline"}} onClick={handleChangePassword}>
                apply changes
              </span>
      </div>
}


      <Modal isOpen={isPasswordPopUpOpen} onClose={closePasswordChangeModal}>
              <div style={{width:'30vw'}}>
                <div style={{fontSize:"max(13px, 0.8vw)", color:"white"}}>current password</div>
                      <div style={{width:"100%",
                      borderRadius: '4px',
                      background: 'rgba(0, 0, 0, 0.90)',
                      padding:"1.5%",
                      ...passwordChangeCommnDivStyle
                    }}>
                     <PasswordInput value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />



                </div>

                <div style={{fontSize:"max(13px, 0.8vw)", color:"white", ...passwordChangeCommnDivStyle}}>create new password</div>

                      <div style={{width:"100%",
                      borderRadius: '4px',
                      background: 'rgba(0, 0, 0, 0.90)',
                      padding:"1.5%",
                      ...passwordChangeCommnDivStyle
                    }}>
                    <PasswordInput value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>


                <div style={{fontSize:"max(13px, 0.8vw)", color:"white", ...passwordChangeCommnDivStyle}}>confirm new password</div>

                <div style={{width:"100%",
                  borderRadius: '4px',
                  background: 'rgba(0, 0, 0, 0.90)',
                  padding:"1.5%",
                  ...passwordChangeCommnDivStyle
                }}>
                   <PasswordInput value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>


              </div>
            <div style={{...avatharContainerStyle, justifyContent:"space-between", ...passwordChangeCommnDivStyle}}>


                <div style={{color:"red"}}>
                Attempt failed ! Try again.
                </div>
              
                
                <div  onClick={handleChangePassword} style={{...passwordChangeButton }}>set changes</div>
              </div>


        </Modal>

  </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(AccountInfo);
