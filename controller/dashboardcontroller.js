import dashBoardService from "../service/dashboardservice.js"

const newdashBoard = async (req, res, next) => {
    try {
        const {useradminId, name, nameofpeople, phonenumber,location, image, } = req.body;//illustrationimg

        const successRes = await dashBoardService.newdashBoard(useradminId, name, nameofpeople, phonenumber,location, image, )//illustrationimg

        res.json({status: true, success: "db register success", successRes});
    } catch (error) {
        throw error;
    }
}

const getdashboard = async (req, res, next) => {
    try {
        //const { useradminId } = req.body;
        const id = req.headers.id
        const successRes = await dashBoardService.getdashBoard(id)

        res.json({status: true, success: "db register success", successRes});
    } catch (error) {
        throw error;
    }
}

export const dashboardController = {
    newdashBoard,
    getdashboard
}
