import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission behavior

        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            // Handle no token scenario
            setError("Authentication failed. Please login again.");
            return;
        }

        try {
            const response = await axios.put('http://192.168.29.85:3000/login', { name, email });
            
            if (response.data && response.data.message) {
                setSuccess(response.data.message);
            }
        } catch (error) {
            console.error("Error updating user profile:", error);
            setError("Failed to update profile. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type='text' 
                        placeholder='edit your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='edit your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success}</p>}
        </div>
    );
}

export default EditProfile;
