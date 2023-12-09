import React, { useState } from 'react';
import axios from 'common/electra_axios';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './signup.css'
import config from 'common/constants';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters long';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const { data } = await axios.post(config.apiUrl+'/auth/signup', formData);
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                navigate('/game');
            }
        } catch (error) {
            console.error('Error during signup:', error.response?.data || error.message);
        }
    };

    // const handleGoogleSignIn = (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setIsSubmitting(false);
    //     // Redirect to the backend Google OAuth route
    //     window.location.href = config.apiUrl + '/auth/google';
    // };

    // const handleFacebookLogin = () => {
    //     window.location.href = config.apiUrl + '/auth/facebook';
    // };
    

    return (
        <div>
            <section className="signup-container">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="signup-inner">
                            <h2 className="signup-start">Get started!</h2>
                            <div className="flat-form box-login-social">
                                <ul>
                                    <li>
                                        {/* <Link to="#" className="sc-button style-2 fl-button pri-3" onClick={handleGoogleSignIn} disabled={isSubmitting} >
                                            <i className="icon-fl-google-2"></i>
                                            <span>Google</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3"  onClick={handleFacebookLogin} disabled={isSubmitting} >
                                            <i className="icon-fl-facebook"></i>
                                            <span>Facebook</span>
                                        </Link> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="flat-form box-login-email">
                                <div className='signup-inner'>
                                <div className="form-inner">
                                    <form onSubmit={handleSignUp}>
                                        <div>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                tabIndex="1" 
                                                aria-required="true" 
                                                required 
                                                placeholder="Your Full Name" 
                                                value={formData.name} 
                                                onChange={handleChange}
                                            />
                                            {errors.name && <div className="error">{errors.name}</div>}

                                            <input 
                                                type="email" 
                                                name="email" 
                                                tabIndex="2" 
                                                aria-required="true" 
                                                required 
                                                placeholder="Your Email Address" 
                                                value={formData.email} 
                                                onChange={handleChange}
                                            />
                                            {errors.email && <div className="error">{errors.email}</div>}

                                            <input 
                                                type="password" 
                                                name="password" 
                                                tabIndex="3" 
                                                aria-required="true" 
                                                required 
                                                placeholder="Set Your Password" 
                                                value={formData.password} 
                                                onChange={handleChange}
                                            />
                                            {errors.password && <div className="error">{errors.password}</div>}
                                        </div>
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>
                                        <button type="submit" className="submit">SignUp</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
