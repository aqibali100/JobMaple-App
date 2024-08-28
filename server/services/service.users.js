const bcrypt = require('bcryptjs');
const User = require('../models/model.users');
const jwt = require('jsonwebtoken');

//Register User
const RegisterUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error('Email is Already Registered!');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = new User(userData);
    await user.save();
    return user;
};
//Login User
const LoginUser = async (userData) => {
    const { email, password } = userData;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('This Email is not Registered!');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Your Password is Incorrect!');
    }
    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return { user, token };
};
//Reset password send email
const sendResetPasswordEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('This Email is not Registered!');
        }
        const resetToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        const resetURL = `http://localhost:3000/reset-password?token=${resetToken}`;
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset Request',
            html: `<p>You requested a password reset. Click <a href="${resetURL}">here</a> to reset your password. The link will expire in one hour.</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return { message: 'Password reset email sent successfully!' };
    } catch (error) {
        throw new Error(error.message);
    }
};
module.exports = {
    RegisterUser,
    LoginUser,
    sendResetPasswordEmail,
};
