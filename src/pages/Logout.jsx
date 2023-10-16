import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        
        // Reset Axios default headers
        delete axios.defaults.headers.common['Authorization'];

        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div className="container">
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
