const express = require('express');
const { registerUser, loginUser, passwordResetEmail } = require('../controllers/controller.users');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/password-reset-email', passwordResetEmail);

module.exports = router;
