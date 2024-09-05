import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/Profile.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RiMessage2Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Profile = () => {
    return (
        <>
            <div className='bg-clr'>
                <div className='main-bg'>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div className='flex-wrapper'>
                                    <div className='profile-img'>
                                        <img src={''} alt='logo' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-8'>
                                <div className='content-wrapper'>
                                    <div className='content-flex d-flex flex-column flex-md-row align-items-center justify-content-md-between'>
                                        <div className='content d-flex flex-column flex-md-row'>
                                            <strong>Jermeny Rose</strong>
                                            <span><FaLocationDot /> New York, NY</span>
                                        </div>
                                        <div className='fav-icon d-flex align-items-center gap-2 mt-3 mt-md-0'>
                                            <FaBookmark />
                                            <p>Favourite</p>
                                        </div>
                                    </div>
                                    <div className='product-designer'>
                                        <span>Product Designer</span>
                                    </div>

                                    <div className='rating mt-4'>
                                        <p>Rating</p>
                                    </div>
                                    <div className='rating-section d-flex align-items-center gap-3'>
                                        <strong>8,6</strong>
                                        <div className='rating-star d-flex align-items-center gap-1'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar className='dif-clr' />
                                        </div>
                                    </div>
                                </div>

                                <div className='msg-content-flex d-flex flex-column flex-md-row align-items-center gap-2 gap-md-5 mt-4'>
                                    <div className='msg-text d-flex align-items-center gap-2'>
                                        <RiMessage2Fill />
                                        <p>Send Message</p>
                                    </div>
                                    <div className='contact-msg d-flex align-items-center gap-2'>
                                        <TiTick />
                                        <p>Contacts</p>
                                    </div>
                                    <div className='report mt-2 mt-md-0'>
                                        <p>Report User</p>
                                    </div>
                                </div>

                                <div className='about-section d-flex flex-column flex-md-row align-items-center gap-2 gap-md-5 mt-4'>
                                    <div className='time-sec d-flex align-items-center gap-2'>
                                        <FaEye />
                                        <p>Timeline</p>
                                    </div>

                                    <div className='about d-flex align-items-center gap-2'>
                                        <FaUser />
                                        <p>About</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div className='new-content mt-4'>
                                    <p>Work</p>
                                </div>
                                <div className='spotify-wrapper'>
                                    <div className='flex-sec d-flex align-items-center gap-2 gap-md-5 mt-4'>
                                        <h2 className='h5 h-md-2'>Spotify New York</h2>
                                        <button>Primary</button>
                                    </div>

                                    <div className='spotify-info mt-2'>
                                        <p>170 William Street</p>
                                        <p>New York, NY 10038-78-212-312-51</p>
                                    </div>
                                </div>

                                <div className='metro-wrapper'>
                                    <div className='flex-sec d-flex align-items-center gap-2 gap-md-5 mt-4'>
                                        <h2 className='h5 h-md-2'>Metropolitan <br /> Museum</h2>
                                        <button>Secondary</button>
                                    </div>
                                    <div className='spotify-info mt-2'>
                                        <p>52S E 68th Street</p>
                                        <p>New York, NY 10651-78 156-187-60</p>
                                    </div>
                                </div>

                                <div className='skill-sec mt-4'>
                                    <p>Skills</p>
                                </div>

                                <div className='skills'>
                                    <ul>
                                        <li><a href='#'>Branding</a></li>
                                        <li><a href='#'>UI/UX</a></li>
                                        <li><a href='#'>Web Design</a></li>
                                        <li><a href='#'>Packaging</a></li>
                                        <li><a href='#'>Print & Editorial</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="info-section mt-3">
                                    <p>Contact Information</p>
                                </div>

                                <div className="edit-sec d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-5 mt-4">
                                    <p>Phone:</p>
                                    <span>+92 3026045746</span>
                                </div>

                                <div className="adress-sec d-flex flex-column flex-md-row gap-2 gap-md-5 mt-4">
                                    <p>Address:</p>
                                    <span>52S E 68th Street <br></br>New York, NY 10651-78 156</span>
                                </div>

                                <div className="edit-sec d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-5 mt-4">
                                    <p>Email:</p>
                                    <span>haseebramzan521@gmail.com</span>
                                </div>

                                <div className="edit-sec d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-5 mt-4">
                                    <p>Site:</p>
                                    <span>www.jermenyrose.com</span>
                                </div>

                                <div className="basic-info mt-5">
                                    <p>Basic Information</p>
                                </div>

                                <div className="adress-sec d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-5 mt-4">
                                    <p>Birthday:</p>
                                    <span>8 Feb 2004</span>
                                </div>

                                <div className="adress-sec d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-5 mt-4">
                                    <p>Gender:</p>
                                    <span>Male</span>
                                </div>
                            </div>
                            <div className='col-12 col-md-5'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}