import React from 'react'
import '../../assets/style/Employer.css';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Employer = () => {
    return (
        <>
            <div className='main-post-section'>
                <div className='top-bar'>
                    <div className='filter-section mb-3 gap-3'>
                        <div className='filter-logo'>
                            <HiAdjustmentsHorizontal />
                        </div>
                        <div className='filter-input'>
                            <input type='text' placeholder='Filter and search job' />
                        </div>
                    </div>
                    <div className='post-btn'>
                        <Link to='/job-post-form'><button>Post a job</button></Link>
                    </div>
                </div>

                <table className='table mt-4'>
                    <thead>
                        <tr>
                            <th className='col-md-1'>
                                <input type='checkbox' style={{cursor: 'pointer'}} />
                            </th>
                            <th className='col-md-4'>Job Title</th>
                            <th className='col-md-4 text-center'>Job Status</th>
                            <th className='col-md-3 text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type='checkbox' style={{cursor: 'pointer'}} />
                            </td>
                            <td>
                                <div className='location-sec' style={{cursor: 'pointer'}}>
                                    <span>Web Developer</span>
                                    <p className='m-0'>Lahore</p>
                                </div>
                            </td>
                            <td className='table-p'><p className='m-0 text-center text-danger '>Draft</p></td>
                            <td className='table-p'>
                                <p className='text-center m-0' >  <HiOutlineDotsVertical style={{cursor: 'pointer'}} /></p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Employer