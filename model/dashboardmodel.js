import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import userModel from "./usermodel.js"


const dashBoard = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    name:{
        type: String,
        required: true
        //lowercase: true,
        
    },
    location:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
});

const dashBoardModel = mongoose.model('dashboard', dashBoard);

export default dashBoardModel