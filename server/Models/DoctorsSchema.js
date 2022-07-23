const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone_no: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    uniqueId: {
        unique: true,
        type: String,
        required: true
    },
    pickHospital: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: String,
        required: true
    },
    patientHistory: {
        type: Array
    }
}, { timestamps:true });

doctorsSchema.pre('save', async function (next) {
    let { password } = this;
    const saltRound = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, saltRound)
    next()
})

const doctorsModel = mongoose.model("doctors", doctorsSchema);

module.exports = doctorsModel;