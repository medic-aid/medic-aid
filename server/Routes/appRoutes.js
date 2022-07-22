const express = require('express');
const { adminSignup } = require('../Controller/admin/adminController');
const { userSignup, userSignin } = require('../Controller/user/usersController');
const router = express.Router();

router.post('/user/signup', userSignup)
router.post('/user/signin', userSignin)
router.post('/admin/signup', adminSignup)

module.exports = router;