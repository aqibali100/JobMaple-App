import React, { useRef, useState } from 'react';
import '../../assets/style/style.css';
import waveImg from "../../assets/images/wave.png";
import bgImg from "../../assets/images/bg.png";
import avatarImg from "../../assets/images/Logo.png";
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch} from 'react-redux';
import { registerUser } from '../../reducers/UserSlice';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from '../loading/Loading';
import { RegistrationSchema } from '../validation/Validaton';


const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
        },
        validationSchema: RegistrationSchema,
        onSubmit: async (values, { resetForm, setErrors }) => {
            setLoading(true);
            try {
                const response =  await dispatch(registerUser({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                })).unwrap();
                resetForm();
                const userId = response; 
                navigate(`/role-selection/${userId}`);
            } catch (error) {
                if (error?.message === 'Email is Already Registered!') {
                    toast.error('Email is Already Registered!');
                } else {
                    setErrors({ form: 'Registration failed. Please try again.' });
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
                    <img src={bgImg} alt="Background" />
                </div>
                <div className="login-content">
                    <form onSubmit={formik.handleSubmit} className='form-border'>
                        <div className='login-icon'>
                            <img className='avatar' src={avatarImg} alt="Avatar" />
                        </div>
                        <h2 className="title">Sign Up</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder='Full Name'
                                    id="name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </div>
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error-message">{formik.errors.name}</div>
                        ) : null}
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="email"
                                    className="input"
                                    placeholder='Email'
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-message">{formik.errors.email}</div>
                        ) : null}
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
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
                            <div className="error-message">{formik.errors.password}</div>
                        ) : null}
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="number"
                                    className="input"
                                    placeholder='Phone Number'
                                    id="phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                            </div>
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="error-message">{formik.errors.phone}</div>
                        ) : null}
                        <button className='btn' type="submit" disabled={loading}>
                            {loading ? <Loading /> : 'Sign Up'}
                        </button>
                        <div className='account'>
                            Already have an account?   <Link to="/"> Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
