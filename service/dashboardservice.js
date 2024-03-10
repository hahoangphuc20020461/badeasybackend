import dashBoardModel from "../model/dashboardmodel.js";

const newdashBoard = async (useradminId, name, nameofpeople, phonenumber,location, image,  ) => {//illustrationimg
    try {
        const createddashBoard = await dashBoardModel.create({
         useradminId: useradminId,
         name: name,
         nameofpeople: nameofpeople,
         phonenumber: phonenumber,
         location: location,
         image: image,
         //illustrationimg: illustrationimg
       })

       console.log(createddashBoard)
    return createddashBoard
    } catch (error) {
        throw error;
    }

}
const getdashBoard = async (useradminId) => {
    try {
        const dashBoardData = await dashBoardModel.find(
           {useradminId}
        );
            //const {nameofpeople, phonenumber, ...others} = dashBoardData[0]._doc
            //return others
       //console.log(dashBoardData)
    return dashBoardData
    } catch (error) {
        throw error;
    }

}
const dashBoardService = {
    newdashBoard,
    getdashBoard
}

export default dashBoardService;