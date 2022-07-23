const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    medicalInfo: {
        type: Array
    },
    medicalHistory: {
        type: Array
    }
}, { timestamps:true });

userSchema.pre('save', async function (next) {
    let { password } = this;
    const saltRound = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, saltRound)
    next()
})

const usersModel = mongoose.model("user", userSchema);

module.exports = usersModel;