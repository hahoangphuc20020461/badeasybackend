import userModel from '../model/usermodel.js'


const registerUser = async (email, password) => {
    try {
        const createdUser = await userModel.create({
         email: email,
         password: password
       })

       console.log(createdUser)
    return createdUser
    } catch (error) {
        throw error;
    }

}

const checkUser = async (email) => {
    try {
        const check = await userModel({email});
        return check;
    } catch (error) {
        throw error
    }
}  

const UserService = {
    registerUser,
    checkUser
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