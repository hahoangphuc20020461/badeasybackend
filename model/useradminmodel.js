import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userAdminSchema = new mongoose.Schema({
    username:{
        type: String,
        //lowercase: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});

userAdminSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    } catch (error) {
        throw error;
    }
});

userAdminSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}


const userAdminModel = mongoose.model('useradmin', userAdminSchema);

export default userAdminModel