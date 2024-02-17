import dashBoardModel from "../model/dashboardmodel";

const newdashBoard = async (userId, name, image, location) => {
    try {
        const createddashBoard = await dashBoardModel.create({
            userId: userId,
         name: name,
         image: image,
         location: location
       })

       console.log(createddashBoard)
    return createddashBoard
    } catch (error) {
        throw error;
    }

}
const dashBoardService = {
    newdashBoard
}

export default dashBoardService;