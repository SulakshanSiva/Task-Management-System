const express = require('express');
const userAuthController = require('../Controllers/userAuthController');

const router = express.Router();

// Sign up user
router.post('/Register', userAuthController.Register);

// Log in user
router.post('/Login', userAuthController.Login);

// Log out user
router.delete('/Logout', userAuthController.Logout);

module.exports = router;