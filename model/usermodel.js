const mongoose = require('mongoose');
const db = require('../config/db');


let userSchema = new mongoose.Schema({
    "email":{
        type: String,
        //lowercase: true,
        required: true,
    },
    "password":{
        type: String,
        required: true,
    },
});

const userModel = db.model('user', userSchema);

module.exports = userModel;