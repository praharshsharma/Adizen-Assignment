// const {User} = require('../models/user');
const express = require('express');

const { signupUser,signinUser, getUserHistory, logoutUser} = require('../controllers/user');


const router = express.Router();


// Route for user signup
router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/history', getUserHistory);
router.post('/logout', logoutUser);
module.exports = router;