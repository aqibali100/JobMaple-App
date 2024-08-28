import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters').max(20, 'Password must be less than 20 characters')
        .required('Password is required')
});

export default validationSchema;
