import UserService from '../service/userservice.js'

const register = async (req, res) => {
    try {
        const {email, password} = req.body;

        const successRes = await UserService.registerUser(email, password)

        res.json({status: true, success: "User register success", successRes});
    } catch (error) {
        throw error;
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = UserService.checkUser(email);
        if (!user){
            throw new Error('user dont exist');
        }
        
    } catch (error) {
        throw error;
    }
}

export const userController = {
    register,
    login
}