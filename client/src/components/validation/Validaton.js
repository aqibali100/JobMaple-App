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

