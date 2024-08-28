import React, { useState } from 'react';
import '../../assets/style/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import waveImg from "../../assets/images/wave.png";
import bgImg from "../../assets/images/bg.png";
import avatarImg from "../../assets/images/Logo.png";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetPassword } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ResretPasswordSchema } from '../validation/Validaton';



const ResetPassword = () => {
    const { token } = useParams();
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
        validationSchema: ResretPasswordSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            try {
                const res = await dispatch(resetPassword({ token, password: values.password })).unwrap();
                resetForm();
                toast.success('Password reset successful!');
                navigate('/');
            } catch (error) {
                toast.error('Password reset token is invalid or has expired.');
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
