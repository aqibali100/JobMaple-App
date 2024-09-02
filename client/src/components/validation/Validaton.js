import * as yup from 'yup';


export const RegistrationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required').max(20, 'Name must be less than 20 characters'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters')
        .required('Password is required'),
    phone: yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits and only contain numbers')
        .required('Phone number is required').min(0, 'Phone number must be greater than 0'),
});

export const LoginSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters')
        .required('Password is required')
});

export const ForgetPasswordSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
});

export const ResretPasswordSchema = yup.object({
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters')
        .required('Password is required')
});

export const jobPostSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required').max(30, 'First Name must be less than 30 characters'),
    lastName: yup.string().required('Last Name is required').max(30, 'Last Name must be less than 30 characters'),
    jobTitle: yup.string().required('Job Title is required').max(50, 'Job Title must be less than 50 characters'),
    numberOfMembers: yup.number()
        .positive('Number of Company Members must be positive')
        .integer('Number of Company Members must be an integer')
        .required('Number of Company Members is required'),
    companyPhoneNumber: yup.string()
        .matches(/^\d+$/, 'Company Phone Number must be numeric')
        .required('Company Phone Number is required'),
    maximumPay: yup.number()
        .positive('Maximum Pay must be positive')
        .required('Maximum Pay is required'),
    companyName: yup.string().required('Company Name is required').max(100, 'Company Name must be less than 100 characters'),
    minimumPay: yup.number()
        .positive('Minimum Pay must be positive')
        .required('Minimum Pay is required'),
    rate: yup.string().required('Rate is required'),
    jobLocation: yup.string().required('Job Location is required'),
    jobDescription: yup.string().required('Job Description is required').min(30, 'Job Description must be at least 30 characters'),
    jobType: yup.string()
    .required('Job Type is required'),
    industry: yup.string()
    .required('Company industry is required')
});
