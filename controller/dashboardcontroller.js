import dashBoardService from "../service/dashboardservice.js"

const newdashBoard = async (req, res, next) => {
    try {
        const {userId, name, image, location} = req.body;

        const successRes = await dashBoardService.newdashBoard(userId, name, image, location)

        res.json({status: true, success: "db register success", successRes});
    } catch (error) {
        throw error;
    }
}

export const dashboardController = {
    newdashBoard,
    
}
