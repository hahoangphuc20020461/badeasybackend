import userAdminModel from "../model/useradminmodel.js";
import jwt from 'jsonwebtoken'

const registerUserAdmin = async (username, password) => {
    try {
        const createdUser = await userAdminModel.create({
            username: username,
         password: password
       })

       console.log(createdUser)
    return createdUser
    } catch (error) {
        throw error;
    }

}

const checkUserAdmin = async (username) => {
    try {
        const check = await userAdminModel.findOne({username});
        return check;
    } catch (error) {
        throw error
    }
}

const generateToken = async (tokenData, secretKey, jwt_expire) => {
    return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    
}

const UserAdminService = {
    registerUserAdmin,
    checkUserAdmin,
    generateToken
}

export default UserAdminService;