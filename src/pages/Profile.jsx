import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'common/electra_axios';
import EditProfile from './EditProfile';

function Profile() {
    const navigate = useNavigate();
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        navigate('/login');
    };

    const handleEditProfileClick = () => {
        setIsEditProfileOpen(!isEditProfileOpen);
    };

    return (
        <div className="dropdown">
            <div className="profile">
                <div>
                    <a href="/Wallet">Wallet</a>
                </div>

                <div>
                    <a href="/ReferEarn">Refer & Earn</a>
                </div>

                <div>
                    <button onClick={handleEditProfileClick}>Edit Profile</button>
                    {isEditProfileOpen && <EditProfile />}
                </div>

                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
