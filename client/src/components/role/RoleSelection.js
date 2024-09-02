import React, { useState } from 'react';
import employerImg from '../../assets/images/employer.png';
import jobSeekerImg from '../../assets/images/jobseeker.png';
import './Role.css';

const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const handleCheckboxChange = (role) => {
        if (selectedRole === role) {
            setSelectedRole(null);
        } else {
            setSelectedRole(role);
        }
    };
    const handleNextClick = () => {
        console.log('Selected Role:', selectedRole);
    };
    const isChecked = (role) => selectedRole === role;
    return (
        <>
            <div className="role-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='role-title'>
                                Aqib Ali, Your account has been created! What brings you to JobMaple?
                            </h1>
                            <p className='text-center mt-3'>
                                We want to tailor your experience to your needs. Please select your role below:
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 mb-3">
                            <div className="role-card" style={{ border: isChecked('employer') ? '2px solid #17B8FC' : '1px solid rgb(218, 213, 213)' }}>
                                <div className="role-checkbox">
                                    <input
                                        onChange={() => handleCheckboxChange('employer')}
                                        type="checkbox"
                                        checked={isChecked('employer')}
                                    />
                                </div>
                                <div className="role-image">
                                    <img src={employerImg} alt="Employer" />
                                </div>
                                <div className="role-text">
                                    <h5 className='mt-3 text-center'>
                                        I want to be an employer
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="role-card" style={{ border: isChecked('user') ? '2px solid #17B8FC' : '1px solid rgb(218, 213, 213)' }}>
                                <div className="role-checkbox">
                                    <input
                                        onChange={() => handleCheckboxChange('user')}
                                        type="checkbox"
                                        checked={isChecked('user')}
                                    />
                                </div>
                                <div className="role-image">
                                    <img src={jobSeekerImg} alt="Job Seeker" />
                                </div>
                                <div className="role-text">
                                    <h5 className='mt-3 text-center'>
                                        I want to be a job seeker
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedRole && (
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="role-btn">
                                    <button type="submit" onClick={handleNextClick}>Next</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RoleSelection;
