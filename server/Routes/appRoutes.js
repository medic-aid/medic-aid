const express = require('express');
const { doctorsSignup, doctorsSignin, findPatient, allPatient, addReport, patientHistory } = require('../Controller/doctors/doctorsController');
const { userSignup, userSignin, editProfile, fetchHistory } = require('../Controller/user/usersController');
const router = express.Router();

// Users
router.post('/user/signup', userSignup)
router.post('/user/signin', userSignin)
router.post('/user/fetchhistory/:id', fetchHistory)
router.post('/user/editProfile/:id', editProfile)
// Doctors Routes
router.post('/doctors/signup', doctorsSignup)
router.post('/doctors/signin', doctorsSignin)
router.post('/doctors/fetchPatient/', allPatient)
router.post('/doctors/fetchPatientInfo/:id', findPatient)
router.put('/doctors/addReport/:id', addReport)
router.post('/doctors/patientHistory/', patientHistory)

module.exports = router;