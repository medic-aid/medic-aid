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

module.exports = {userSignup, userSignin}