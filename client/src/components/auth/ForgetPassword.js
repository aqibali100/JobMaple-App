import React, { useState } from 'react';
import '../../assets/style/style.css';
import waveImg from "../../assets/images/wave.png";
import bgImg from "../../assets/images/bg.png";
import avatarImg from "../../assets/images/Logo.png";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {sendResetPasswordEmail } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from '../loading/Loading';
import { ForgetPasswordSchema } from '../validation/Validaton';



const ForgetPassword = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: ForgetPasswordSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await dispatch(sendResetPasswordEmail(values)).unwrap();
                resetForm();
                toast.success('Email sent successfully!');
            } catch (error) {
                if (error === 'User with given email does not exist') {
                    toast.error('This Email is not Found!');
                }
            } finally {
                setLoading(false);
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
                         <button className='btn' type="submit" disabled={loading}>
                            {loading ? <Loading/>  : 'Send Email'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
