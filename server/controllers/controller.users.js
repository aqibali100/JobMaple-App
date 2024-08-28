const { RegisterUser, LoginUser, sendResetPasswordEmail } = require('../services/service.users');
//Register User Controller
const registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await RegisterUser(userData);
        res.status(201).json({
            message: 'User Has Been Registerd Successfully!',
            user: newUser
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
// Login User Controller
const loginUser = async (req, res) => {
    try {
        const userData = req.body;
        const { user, token } = await LoginUser(userData);
        res.status(200).json({
            message: 'User logged in successfully!',
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            },
            token: token,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
// password reset email send Controller
const passwordResetEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const response = await sendResetPasswordEmail(email);
        res.status(200).json(response);
    } catch (error) {
        if (error.message === 'This email is not registered!') {
            res.status(404).json({
                message: error.message,
            });
        } else {
            res.status(500).json({
                message: 'An error occurred while processing your request. Please try again later.',
            });
        }
    }
};

module.exports = {
    registerUser,
    loginUser,
    passwordResetEmail,
};
