import React, { useState } from 'react';



const InputStyle = {
    padding: 0,
    margin: 0,
    height: '0.7vw',
    border: 'none',
    width: '90%',
    fontSize: '0.7vw',
    color:"white"
  };

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
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
