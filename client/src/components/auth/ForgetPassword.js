import React, { useState } from 'react';
import '../../assets/style/style.css';
import { useNavigate } from 'react-router-dom';
import waveImg from "../../assets/images/wave.png";
import bgImg from "../../assets/images/bg.png";
import avatarImg from "../../assets/images/Logo.png";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import validationSchema from '../validation/auth/Login';
import { SendResetPasswordEmail} from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';



const ForgetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            setSubmitting(true);
            try {
                await dispatch(SendResetPasswordEmail(values.email)).unwrap();
                toast.success('Password Reset Email sent Successfully!');
                resetForm();
                // navigate('/');
            } catch (error) {
                if (error?.message === 'This Email is not Registered!') {
                    toast.error('This Email is not Registered!');
                } else if (error?.message === 'Your Password is Incorrect!') {
                    toast.error('Your Password is Incorrect!');
                } else {
                    setErrors({ form: 'Password reset failed. Please try again.' });
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
                        <h2 className="title">Forget Password</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                        <input className='btn' type="submit" value="Send Email" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
