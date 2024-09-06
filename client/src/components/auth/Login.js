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
import { loginUser } from '../../reducers/UserSlice';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from '../loading/Loading';
import { LoginSchema } from '../validation/Validaton';




const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            setLoading(true);
            try {
                await dispatch(loginUser(values)).unwrap();
                resetForm();
                toast.success('Login successful!');
                navigate('/employer-dashboard');
            } catch (error) {
                if (error?.message === 'This Email is not Registered!') {
                    toast.error('This Email is not Registered!');
                } else if (error?.message === 'Your Password is Incorrect!') {
                    toast.error('Your Password is Incorrect!');
                } else {
                    setErrors({ form: 'Login failed. Please try again.' });
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
                        <h2 className="title">Welcome Back To JobMaple</h2>
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

                        <div className='remember'>
                            <div className='radio'>
                                <input type='checkbox' />
                                <p>Remember me</p>
                            </div>
                            <div className='forget'>
                                <Link to="/forget-password">Forget Password?</Link>
                            </div>
                        </div>
                        <button className='btn' type="submit" disabled={loading}>
                            {loading ? <Loading /> : 'Login'}
                        </button>
                        <div className='account'>
                            Create an account?    <Link to="/register"> Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
