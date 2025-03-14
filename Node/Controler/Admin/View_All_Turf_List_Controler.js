
// View_All_Turf_List_Controler.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const View_All_Turf_List_Controler = async (req, res) => {

    try {
        

        const [turfList] = await mySqlConnectionPool.query("SELECT * FROM turf");

        console.log("TurfList : ", turfList);
        
        res.status(200).json({

            success : true,
            message : `Successfull Data Featching`,
            turfList : turfList
        })
        
        
    } catch (error) {
        
        
        res.status(500).json({
            
            success : false,
            message : `Error in View_All_Turf_List_Controler API : ${error.message}`,
        })
    }
}

exports.View_All_Turf_List_Controler = View_All_Turf_List_Controler


