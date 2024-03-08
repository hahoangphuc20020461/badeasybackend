import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import userAdminModel from "./useradminmodel.js";


const dashBoard = new mongoose.Schema({
    useradminId: {
        type: Schema.Types.ObjectId,
        ref: userAdminModel.modelName
    },
    name:{
        type: String,
        required: true
        //lowercase: true,
    },
    nameofpeople: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    
    location:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    illustrationimg: [
        {
            type: String,
            required:false
        }
    ]
});

const dashBoardModel = mongoose.model('dashboard', dashBoard);

export default dashBoardModel