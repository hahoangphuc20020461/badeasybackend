import userModel from '../model/usermodel.js'
import jwt from 'jsonwebtoken'


const registerUser = async (username, password) => {
    try {
        const createdUser = await userModel.create({
            username: username,
         password: password
       })

       console.log(createdUser)
    return createdUser
    } catch (error) {
        throw error;
    }

}


const checkUser = async (username) => {
    try {
        const check = await userModel.findOne({username});
        return check;
    } catch (error) {
        throw error
    }
}

const generateToken = async (tokenData, secretKey, jwt_expire) => {
    return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
}

const UserService = {
    registerUser,
    checkUser,
    generateToken
}

export default UserService;



// class UserService {
//     static async registerUser(email, password) {
//         try {
//             const createdUser = await userModel.create({
//                 email,
//                 password
//             })
//             return createdUser
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// module.exports = UserService;