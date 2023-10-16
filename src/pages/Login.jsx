import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();

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

    const handleSubmit = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const { data } = await axios.post('http://192.168.29.85:3001/auth/login', formData);
            console.log('Login successful', data);

            // Store the received token in local storage
            localStorage.setItem('token', data.token);
            console.log('token' ,data.token)
            
            // Set axios default header
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            login();  
            setShouldNavigate(true);

        } catch (error) {
            console.log('Error during login:', error);
            if (error.response) {
                console.log('Error data:', error.response.data);
                // You might want to handle specific error messages from the server here.
            }
        }
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/home-02');
        }
    }, [shouldNavigate, navigate])
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                                  
            </section>
            <section className="tf-login tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">

                            <div className="flat-form box-login-social">
                            
                                <ul>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-google-2"></i>
                                            <span>Google</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-facebook"></i>
                                            <span>Facebook</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5> login</h5>
                                </div>

                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                
                                        <input id="email" name="email" tabIndex="2"  aria-required="true" type="email" placeholder="Your Email Address" required value={formData.email} onChange={handleChange} />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                        <input id="password" name="password" tabIndex="3"  aria-required="true" type="text" placeholder="Enter Your Password" required value={formData.password} onChange={handleChange}  />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>

                                        <button className="submit" onClick={handleSubmit} >Login</button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
