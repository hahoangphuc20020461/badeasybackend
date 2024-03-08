import UserAdminService from "../service/useradminservice.js";

const register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const successRes = await UserAdminService.registerUserAdmin(username, password)

        res.json({status: true, success: "User register success", successRes});
    } catch (error) {
        throw error;
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log("-----", password);
        const user = await UserAdminService.checkUserAdmin(username);
        console.log("--------",user);
        if (!user){
            throw new Error('user dont exist');
        }
        const isMatch = await user.comparePassword(password);
        if (isMatch == false){
            throw new Error('pass invalid');
        }
        let tokenData = {_id:user._id, email:user.email};
        const token = await UserAdminService.generateToken(tokenData, "secretKey", '1h')
        res.status(200).json({status:true, token: token})
    } catch (error) {
        throw error;
    }
}

export const userAdminController = {
    register,
    login
}