const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    parentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate:[validator.isEmail, "Field must be a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    childName:{
        type: String,
        required: true
    },
    childAge:{
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;