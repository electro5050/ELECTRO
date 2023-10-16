
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

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
            const { data } = await axios.post('http://192.168.29.85:3001/auth/signup', formData);
            console.log('Signup successful', data);

            // Store the received token in local storage (assuming your backend sends a token after signup)
            if (data.token) {
                localStorage.setItem('token', data.token);
                // Set axios default header
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            }

            navigate('/home-02');  // Redirect to the game page after successful signup

        } catch (error) {
            console.log('Error during signup:', error);
            if (error.response) {
                console.log('Error data:', error.response.data);
            }
        }
    };
    return (
        <div>
           
           
            <section className="tf-login tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-1">
                                Sigup
                            </h2>

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
                               

                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <div>
                                        <input id="name" name="name" tabIndex="1" aria-required="true" required type="text" placeholder="Your Full Name" value={formData.name} onChange={handleChange} />
                                        {errors.name && <div className="error">{errors.name}</div>}
                                        <input id="email" name="email" tabIndex="2"  aria-required="true" type="email" placeholder="Your Email Address" required  value={formData.email} onChange={handleChange} />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                        <input id="password" name="password" tabIndex="3"  aria-required="true" type="text" placeholder="Set Your Password" required value={formData.password} onChange={handleChange}  />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                        </div>
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>

                                        <button className="submit" onClick={handleSubmit}>SignUp</button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
}

export default SignUp;
