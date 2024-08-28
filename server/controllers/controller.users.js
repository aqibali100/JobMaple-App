const { RegisterUser, LoginUser, sendResetPasswordEmail, findUserByToken, resetPassword } = require('../services/service.users');
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
        res.status(400).json({
            message: error.message,
        });
    }
};
//reset password Controller
const ResetPassword = async (req, res) => {
    try {
        const token = req.params.token;
        const { password } = req.body;
        const user = await findUserByToken(token);
        if (!user) {
            return res.status(400).send('Password reset token is invalid or has expired.');
        }
        await resetPassword(user, password);
        res.send('Your password has been successfully reset.');
    } catch (error) {
        console.error('Error in reset password controller:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    registerUser,
    loginUser,
    passwordResetEmail,
    ResetPassword,
};
