const usersModel = require("../../Models/UsersSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSignup = (req,res) => {
    let { firstname, lastname, name, phone_no, password } = req.body;
    const username  = name.toLowerCase()
    const uniqueId = Math.floor(1000000 + Math.random() * 9000000)
    if (firstname==''|| lastname==''|| username==''|| phone_no==''|| password==''|| uniqueId=='') return res.json({message:"All Field Has To Be Filled", status:false});
    const signup = new usersModel({firstname, lastname, username, phone_no, password, uniqueId});
    signup.save((err)=>{
        if(!err) {
            res.json({message:"Signed Up Successfully", status: true});
        } else {
            if (err.keyPattern.phone_no==1) {
                res.json({message:"Phone number Already Existed", status:false})
            } else if (err.keyPattern.username==1) {
                res.json({message:"Username Already Existed", status:false})
            } else {
                res.json({message:err.message, status:false})
            }
        }
    })
}

const userSignin = (req,res) => {
    let { firstInp, password } = req.body;
    const firstinfo = firstInp.toLowerCase()
    usersModel.findOne({phone_no:firstinfo}, async(err,result)=>{
        if (result==null) {
            usersModel.findOne({username:firstinfo}, async(err,result)=>{
                if (result==null) {
                    res.json({message: 'Username or Phone number Not Registered', status: false});
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

const editProfile = (req,res) => {
    let id = req.params.id;
    let {firstname, lastname, age, phone_no, email, address, city, bloodGrp, bloodTyp, genotype, bp } = req.body;
    if(!bloodGrp==''|| !bloodTyp==''|| !genotype==''|| !bp=='') {
        usersModel.updateOne({_id:id}, {$push:{medicalInfo:[{bloodGrp, bloodTyp, genotype, bp}]}}, (err)=>{
            if(err) {
                res.json({status:false, message:err.message})
            } else {
                res.json({status:true, message:"Updated your Profile"})
            }}
        )
    }
    if (firstname==""|| lastname==""|| phone_no=="") return res.json({status:false, message: "Firstname, Lastname and Phone Number cannot be empty"});
    usersModel.updateOne({_id:id},{firstname, lastname, age, phone_no, email, address, city}, (err,result)=>{
        if (err) {
            if (err.keyPattern.email==1) {
                res.json({status:false, message: 'Email Already Existed'})
            } else if(err.keyPattern.phone_no==1) {
                res.json({status:false, message: 'Phone Number Already Existed'})
            }
        } else {
            res.json({status:true, message: "Updated successfully"})
        }
    })
}

const fetchHistory = (req,res) => {
    let id = req.params.id;
    usersModel.findOne({_id:id}, async(err,result)=>{
        if (result==null) {
            res.json({status: false, message: "User Not found"})
        } else if (result) {
            res.json({status: true, message: result.medicalHistory})
        } else {
            res.json({status: false, message: "Network Error"})
        }
    })
}

module.exports = {userSignup, userSignin, editProfile, fetchHistory}