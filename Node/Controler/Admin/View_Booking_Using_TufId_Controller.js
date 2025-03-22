
// view_Booking_Using_TurfId_Controller.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const view_Booking_Using_TurfId_Controller = async (req, res) => {
    try {

        const { turfId } = req.query;

        if (!turfId) {
            
            console.log("Input is Mandatory".bgRed);

            return res.status(501).json({
                success : false,
                message : "Input is Mandatory"
            });
        }

        const [data] = await mySqlConnectionPool.query("SELECT * FROM player WHERE turf_id = ?", [turfId]);
        
        console.log("Data Successfully featched".bgGreen);

        console.log("Data : ", data);
        
        
        res.status(200).json({

            success : true,
            message : "Data Successfully featched",
            data : data,
            
        })
        
        
    } catch (error) {
        
        console.log(`Error in view_Booking_Using_TurfId_Controller API : ${error.message}`);
        

        return res.status(500).json({

            success : false,
            message : `Error in view_Booking_Using_TurfId_Controller API : ${error.message}`
        })
    }
}

exports.view_Booking_Using_TurfId_Controller = view_Booking_Using_TurfId_Controller;
