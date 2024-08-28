import React, { useState } from 'react';
import '../../assets/style/style.css';
import { Link, useNavigate } from 'react-router-dom';
import waveImg from "../../assets/images/wave.png";
import bgImg from "../../assets/images/bg.png";
import avatarImg from "../../assets/images/Logo.png";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validationSchema from '../validation/auth/Login';
import { loginUser } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';



const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            try {
                await dispatch(loginUser(values)).unwrap();
                resetForm();
                toast.success('Login successful!');
                // navigate('/');
            } catch (error) {
                if (error?.message === 'This Email is not Registered!') {
                    toast.error('This Email is not Registered!');
                } else if (error?.message === 'Your Password is Incorrect!') {
                    toast.error('Your Password is Incorrect!');
                } else {
                    setErrors({ form: 'Login failed. Please try again.' });
                }
            } finally {
                setSubmitting(false);
            }
        },

    });


    return (
        <div>
            <img className="wave" src={waveImg} alt="Wave-Background" />
            <div className="container1">
                <div className="img">
                    <img src={bgImg} alt="Background-Img" />
                </div>
                <div className="login-content">
                    <form onSubmit={formik.handleSubmit} className='form-border'>
                        <div className='login-icon'>
                            <img className='avatar' src={avatarImg} alt="Avatar" />
                        </div>
                        <h2 className="title">Enter New Password</h2>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', top: '15px' }}>
                                    <FontAwesomeIcon className='i' icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            </div>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error">{formik.errors.password}</div>
                        ) : null}
                        <input className='btn' type="submit" value="Reset Password" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
