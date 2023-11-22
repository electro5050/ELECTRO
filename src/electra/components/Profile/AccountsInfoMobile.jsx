import React, { useState, useEffect } from 'react';
import Avathar from 'electra/components/Common/AvatharView';
import Modal from './model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PasswordInput from './PasswordInput';
import { connect } from 'react-redux';

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
  height: 'calc(6px + 0.6vw + 0.6vh)',
  fontSize:"calc(6px + 0.6vw + 0.6vh)",
  border: 'none',
  width: 'min-content',
  color:"white",
  width:"100%"
};


const passwordChangeButton = {
  borderRadius: '12px',
  background: '#FFD700',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
  width: '30vw',
  padding: '5px',
  textAlign: 'center',
  float: 'right',
  color: "black"
};


const AccountInfo = ({userData}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [isPasswordPopUpOpen, setIsPasswordOpen] = useState(false);
  const [name, setName] = useState("");

  const [user, setUser] = useState(null);
  
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

  return (
    <div style={{width:"100%",  borderRadius: '15px',
    background: 'rgba(34, 34, 34, 0.95)',
    maxHeight:'100%',
    padding:"20px"
    }} className="font-4">

      <div style={{...avatharContainerStyle, justifyContent:'space-between'}}>
          <div>
            Your Account Information
          </div>

      </div>


      <div style={{width:"100%",
          // display:"flex",
          color:"white",
          marginTop:'5%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                // background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Name
          </div>

          <div style={{width:"100%",
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                {isEdit ? (
           <input type="text" placeholder="Enter Name" value={name} style={InputStyle} handleChange={()=>{setName()}} />
            ) : (
              <label>{name}</label>
            )}
          </div>
      </div>

      <div style={{width:"100%",
          // display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                background: 'transparent',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Email ID
          </div>

          <div style={{width:"100%",
                borderRadius: '4px',
                background: isEdit ? 'red' : 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                <label>{user?.email} {isEdit && <span style={{float:"right"}}>email cannot be changed</span>}</label>
          </div>
      </div>

      <div style={{width:"100%",
          // display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                // background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Password
          </div>

          <div style={{width:"100%",
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                 <label>************* {isEdit && <span style={{float:"right", color:"#FFD700"}} onClick={() => {setIsPasswordOpen(true)}}>change password</span>}</label>
          </div>
      </div>

      <div style={{width:"100%",
          // display:"flex",
          color:"white",
          marginTop:'1%'
          }}>
        <div style={{width:"39%",
              borderRadius: '4px',
                // background: 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%",
                marginRight:"1%"
          }}>
          Your Phone number
          </div>

          <div style={{width:"100%",
                borderRadius: '4px',
                background: isEdit ? 'red' : 'rgba(0, 0, 0, 0.90)',
                padding:"1.5%"
              }}>
                {isEdit ? (
           <input type="text" placeholder="Enter Name" value={"95382037289"} style={InputStyle} />
            ) : (
              <label>95382037289</label>
            )}
          </div>
      </div>

      <div style={{marginTop:"2vh",     textAlign: "center"}}>
            {
              !isEdit && (<>want to change your details? click edit <FontAwesomeIcon icon={faEdit} onClick={() => setIsEdit(true)} style={{paddingLeft:"10px"}}/></>)
            }

            {
              isEdit && 
              <div>
                         <span style={{color:"#FFD700", float:"right", cursor:"pointer" , textDecoration:"underline", marginLeft:"10px"}} onClick={() => alert("save")}>
                cancel
                <FontAwesomeIcon icon={faTimes} onClick={() => setIsEdit(false)} style={{paddingLeft:"10px"}}/>
              </span>
                &nbsp;&nbsp;&nbsp;
              <span style={{color:"#FFD700", float:"right", cursor:"pointer" , textDecoration:"underline"}} onClick={() => alert("save")}>
                apply changes
              </span>

                       </div>
     

            }

            
          </div>


      <Modal isOpen={isPasswordPopUpOpen} onClose={closePasswordChangeModal}>
              <div style={{width:'70vw'}} className="font-5">
                <div style={{color:"white"}} >current password</div>
                      <div style={{width:"100%",
                      borderRadius: '4px',
                      background: 'rgba(0, 0, 0, 0.90)',
                      padding:"1.5%",
                      ...passwordChangeCommnDivStyle
                    }}>
                     <PasswordInput />
                </div>

                <div style={{fontSize:"max(13px, 0.8vw)", color:"white", ...passwordChangeCommnDivStyle}}>create new password</div>

                      <div style={{width:"100%",
                      borderRadius: '4px',
                      background: 'rgba(0, 0, 0, 0.90)',
                      padding:"1.5%",
                      ...passwordChangeCommnDivStyle
                    }}>
                    <PasswordInput />
                </div>


                <div style={{fontSize:"max(13px, 0.8vw)", color:"white", ...passwordChangeCommnDivStyle}}>confirm new password</div>

                <div style={{width:"100%",
                  borderRadius: '4px',
                  background: 'rgba(0, 0, 0, 0.90)',
                  padding:"1.5%",
                  ...passwordChangeCommnDivStyle
                }}>
                    <PasswordInput />
                </div>


              </div>
            <div style={{...avatharContainerStyle, justifyContent:"space-between", ...passwordChangeCommnDivStyle}}>


                <div style={{color:"red"}}>
                Attempt failed ! Try again.
                </div>
              
                
                <div onClick={closePasswordChangeModal} style={{...passwordChangeButton }}>set changes</div>
              </div>


        </Modal>

  </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(AccountInfo);
