import React from 'react';
import '../../assets/style/JobPostForm.css';
import { jobPostSchema } from '../validation/Validaton';
import { useFormik } from 'formik';
const JobPostForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            numberOfMembers: '',
            companyPhoneNumber: '',
            maximumPay: '',
            companyName: '',
            minimumPay: '',
            rate: '',
            jobLocation: '',
            jobDescription: '',
            jobType: '',
            industry: '',
        },
        validationSchema: jobPostSchema,
        onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <div className='topbar mt-4'>
                <h1>Post a Job</h1>
            </div>
            <div className='bg-image'>
                <div className='main'>
                    <div className='container'>
                        <div className='title mb-2'>
                            <h1>Enter Job Details</h1>
                        </div>
                        <form className='job-form' onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='input-field'>
                                        <input type='text' name='firstName' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.firstName} />
                                        <label>First Name</label>
                                    </div>
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className="post-error">{formik.errors.firstName}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='text' name='jobTitle' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobTitle} />
                                        <label>Job Title</label>
                                    </div>
                                    {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                        <div className="post-error">{formik.errors.jobTitle}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='number' name='numberOfMembers' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.numberOfMembers} />
                                        <label>No. of Company Members</label>
                                    </div>
                                    {formik.touched.numberOfMembers && formik.errors.numberOfMembers ? (
                                        <div className="post-error">{formik.errors.numberOfMembers}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='number' name='companyPhoneNumber' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.companyPhoneNumber} />
                                        <label>Company Phone Number</label>
                                    </div>
                                    {formik.touched.companyPhoneNumber && formik.errors.companyPhoneNumber ? (
                                        <div className="post-error">{formik.errors.companyPhoneNumber}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='number' name='maximumPay' placeholder=' '
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.maximumPay} />
                                        <label>Maximum Pay</label>
                                    </div>
                                    {formik.touched.maximumPay && formik.errors.maximumPay ? (
                                        <div className="post-error">{formik.errors.maximumPay}</div>
                                    ) : null}
                                    <div className='industry mt-5'>
                                        <select defaultValue=""
                                            name="jobType"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobType} >
                                            <option value="" disabled>Job Type</option>
                                            <option value="full-time">Full-Time</option>
                                            <option value="part-time">Part-Time</option>
                                            <option value="temporary">Temporary</option>
                                            <option value="contract">Contract</option>
                                            <option value="internship">Internship</option>
                                            <option value="fresher">Fresher</option>
                                        </select>
                                    </div>
                                    {formik.touched.jobType && formik.errors.jobType ? (
                                        <div className="post-error">{formik.errors.jobType}</div>
                                    ) : null}
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='input-field'>
                                        <input type='text' name='lastName' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lastName} />
                                        <label>Last Name</label>
                                    </div>
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className="post-error">{formik.errors.lastName}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='text' name='companyName' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.companyName} />
                                        <label>Company Name</label>
                                    </div>
                                    {formik.touched.companyName && formik.errors.companyName ? (
                                        <div className="post-error">{formik.errors.companyName}</div>
                                    ) : null}
                                    <div className='industry mt-5'>
                                        <select defaultValue="" name="industry" onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.industry} >
                                            <option value="" disabled>Company Industry</option>
                                            <option value="technology">Technology</option>
                                            <option value="finance">Finance</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="education">Education</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="retail">Retail</option>
                                            <option value="real-estate">Real Estate</option>
                                            <option value="hospitality">Hospitality</option>
                                            <option value="transportation">Transportation</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="agriculture">Agriculture</option>
                                            <option value="energy">Energy</option>
                                            <option value="legal">Legal</option>
                                            <option value="non-profit">Non-Profit</option>
                                            <option value="government">Government</option>
                                        </select>
                                    </div>
                                    {formik.touched.industry && formik.errors.industry ? (
                                        <div className="post-error">{formik.errors.industry}</div>
                                    ) : null}
                                    <div className='input-field mt-5'>
                                        <input type='number' name='minimumPay' placeholder=' ' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.minimumPay} />
                                        <label>Minimum Pay</label>
                                    </div>
                                    {formik.touched.minimumPay && formik.errors.minimumPay ? (
                                        <div className="post-error">{formik.errors.minimumPay}</div>
                                    ) : null}
                                    <div className='industry mt-5'>
                                        <select
                                            name="rate"
                                            defaultValue=""
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.rate}
                                        >
                                            <option value="" disabled>Rate</option>
                                            <option value="per-hour">Per Hour</option>
                                            <option value="per-day">Per Day</option>
                                            <option value="per-week">Per Week</option>
                                            <option value="per-month">Per Month</option>
                                            <option value="per-year">Per Year</option>
                                        </select>
                                    </div>
                                    {formik.touched.rate && formik.errors.rate ? (
                                        <div className="post-error">{formik.errors.rate}</div>
                                    ) : null}

                                    <div className='industry mt-5'>
                                        <select defaultValue='' name='jobLocation' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobLocation} >
                                            <option value='' disabled>Job Location</option>
                                            <option>lahore</option>
                                        </select>
                                    </div>
                                    {formik.touched.jobLocation && formik.errors.jobLocation ? (
                                        <div className="post-error">{formik.errors.jobLocation}</div>
                                    ) : null}
                                </div>
                                <div className='container'>
                                    <div className='disc'>
                                        <textarea rows={7} name='jobDescription' placeholder='Job Discription' onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.jobDescription} ></textarea>
                                    </div>
                                </div>
                                {formik.touched.jobDescription && formik.errors.jobDescription ? (
                                    <div className="des-error">{formik.errors.jobDescription}</div>
                                ) : null}
                                <div className="form-btn">
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPostForm;
