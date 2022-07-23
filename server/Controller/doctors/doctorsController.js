const doctorsModel = require("../../Models/DoctorsSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const usersModel = require("../../Models/UsersSchema");

const doctorsSignup = (req,res) => {
    let { firstname, lastname, name, phone_no, password, email, pickHospital, yearsOfExperience } = req.body;
    const username  = name.toLowerCase()
    const uniqueId = Math.floor(1000000 + Math.random() * 9000000)
    if (firstname==''|| lastname==''|| username==''|| phone_no==''|| password==''|| uniqueId==''|| email==''|| pickHospital==''|| yearsOfExperience=='') return res.json({message:"All Field Has To Be Filled", status:false});
    const signup = new doctorsModel({firstname, lastname, username, phone_no, password, email, pickHospital, yearsOfExperience, uniqueId});
    signup.save((err)=>{
        if(!err) {
            res.json({message:"Signed Up Successfully", status: true});
        } else {
            if (err.keyPattern.phone_no==1) {
                res.json({message:"Phone number Already Existed", status:false})
            } else if (err.keyPattern.username==1) {
                res.json({message:"Username Already Existed", status:false})
            } else if (err.keyPattern.email==1) {
                res.json({message:"Email Already Existed", status:false})
            } else {
                res.json({message: 'Network Error', status:false})
            }
        }
    })
}
const doctorsSignin = (req,res) => {
    let { firstInp, password } = req.body;
    const firstinfo = firstInp.toLowerCase();
    doctorsModel.findOne({phone_no:firstinfo}, async(err,result)=>{
        if (result==null) {
            doctorsModel.findOne({username:firstinfo}, async(err,result)=>{
                if (result==null) {
                    doctorsModel.findOne({email:firstinfo}, async(err,result)=>{
                        if (result==null) {
                            res.json({message: 'Email or Username or Phone number Not Registered', status: false});
                        } else if (result) {
                            let id = result._id;
                            let validPassword = await bcrypt.compare(password, result.password)
                            if(validPassword){
                                jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "2h"}, (err, token)=>{
                                    if(err){
                                        {err.message=="jwt expired"? res.json({message: "Session timed out, kindly login again", status: false}) : null;}
                                    } else {
                                        res.json({message:"Login Succesfully",token, result , status: true})
                                    }
                                })
                            } else {
                                res.json({message: 'Incorrect Password', status: false});
                            }
                        } else if (err) {
                            res.json({message: 'Network Error', status: false, err});
                        }
                    })
                } else if (result) {
                    let id = result._id;
                    let validPassword = await bcrypt.compare(password, result.password)
                    if(validPassword){
                        jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "2h"}, (err, token)=>{
                            if(err){
                                {err.message=="jwt expired"? res.json({message: "Session timed out, kindly login again", status: false}) : null;}
                            } else {
                                res.json({message:"Login Succesfully",token, result , status: true})
                            }
                        })
                    } else {
                        res.json({message: 'Incorrect Password', status: false});
                    }
                } else if (err) {
                    res.json({message: 'Network Error', status: false, err});
                }
            })
        } else if (result) {
            let id = result._id;
            let validPassword = await bcrypt.compare(password, result.password)
            if(validPassword){
                jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "2h"}, (err, token)=>{
                    if(err){
                        {err.message=="jwt expired"? res.json({message: "Session timed out, kindly login again", status: false}) : null;}
                    } else {
                        res.json({message:"Login Succesfully",token, result , status: true})
                    }
                })
            } else {
                res.json({message: 'Incorrect Password', status: false});
            }
        } else if (err) {
            res.json({message: 'Network Error', status: false, err});
        }
    })
}
const allPatient = (req,res)=> {
    usersModel.find({}, (err,result)=>{
        if(err) {
            res.json({message:"Network Error", status:false})
        } else {
            res.json({message:result, status:true})
        }
    })
}
const findPatient = (req,res) => {
    usersModel.findOne({_id:req.params.id}, (err,result) => {
        if(err) {
            res.json({message:err.message, status:false})
        } else {
            res.json({message:result, status:true})
        }
    })
}
const addReport = (req,res) => {
    let {id, report} = req.body
    let userId = req.params.id
    doctorsModel.updateOne({_id:id}, {$push:{patientHistory:[{id, report}]}}, (err)=>{
        if(err) {
            res.json({status:false, message:err.message})
        } else {
            usersModel.updateOne({_id:userId}, {$push:{medicalHistory:[{id, report}]}}, (error)=>{
                if (error) {
                    res.json({status:false, message:err.message})
                } else {
                    res.json({status: true, message:"Medical History Added Successfully"})
                }
            })
        }
    })
}
const patientHistory = (req,res) => {
    let { doctorsId } = req.body;
    doctorsModel.findOne({_id:doctorsId}, async(err,result)=>{
        if(result==null) {
            res.json({message: 'Account not found', status: false});
        }else if (result) {
            res.json({message: result.patientHistory, status: true});
        } else if (err) {
            res.json({message: 'Network Error', status: false, err});
        } 
    })
}

module.exports = { doctorsSignup, doctorsSignin, allPatient,findPatient, addReport, patientHistory }