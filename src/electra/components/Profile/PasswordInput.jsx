import React, { useState } from 'react';



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

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder=""
        value={value} // Use value from props
        onChange={onChange} // Use onChange from props
        style={InputStyle} 
      />
      <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
        {showPassword ? '👁️' : '👁️‍🗨️'}
      </span>
    </div>
  );
};

export default PasswordInput;
