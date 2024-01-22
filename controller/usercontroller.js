const UserService = require('../service/userservice');

exports.register = async(req, res) =>{
    try {
        const {email, password} = req.body;

        const successRes = await UserService.registerUser(email, password);

        res.json({status: true, success: "User register success"});
    } catch (error) {
        throw error;
    }
}