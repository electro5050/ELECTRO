import React, { useState } from 'react';
import axios from 'common/electra_axios';
import { useNavigate } from 'react-router-dom'; 
// import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/logo_dark.png';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SignUp from './SignUp';
import config from 'common/constants';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    // const { login } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const { data } = await axios.post(config.apiUrl+'/auth/login', formData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            // login();  
            navigate('/game');
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
            alert("login failed")
        }
    };

    return (
        
        <div  >
            <img src={Logo} style={{width:'10vw'}}></img>
            {/* <section className="flat-title-page inner">
                <div className="overlay"></div>
            </section> */}
            <section className="tf-login tf-section" style={{backgroundColor:'black'}} >
                <div className="themesflat-container" >
                    <div className="row">
                        <div className="col-12" style ={{width:'100vw' , height:'auto', }}>

                            <div className="flat-form box-login-social">                            
                                <ul>
                                    <li>
                                        {/* <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-google-2"></i>
                                            <span>Google</span>
                                        </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-facebook"></i>
                                            <span>Facebook</span>
                                        </Link> */}
                                    </li>
                                </ul>
                            </div>

                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5>Login</h5>
                                </div>
                                <div className="form-inner">
                                    <form onSubmit={handleLogin}>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Your Email Address"
                                            value={formData.email} 
                                            onChange={handleChange} 
                                        />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                        <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Enter Your Password" 
                                            value={formData.password} 
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>
                                        <button type="submit" className="submit">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div> <SignUp/> </div> */}
            <Footer />
        </div>

        
    );
};

export default Login;
