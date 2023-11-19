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

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={InputStyle} 
      />
      <span onClick={togglePasswordVisibility}>
        {showPassword ? '👁️' : '👁️‍🗨️'}
      </span>
    </div>
  );
};

export default PasswordInput;
