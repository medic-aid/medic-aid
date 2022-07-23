const express = require('express');
const { doctorsSignup, doctorsSignin } = require('../Controller/doctors/doctorsController');
const { userSignup, userSignin } = require('../Controller/user/usersController');
const router = express.Router();

router.post('/user/signup', userSignup)
router.post('/user/signin', userSignin)
router.post('/doctors/signup', doctorsSignup)
router.post('/doctors/signin', doctorsSignin)

module.exports = router;