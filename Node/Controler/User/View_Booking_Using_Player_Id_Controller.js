
// View_Booking_Using_Player_Id_Controller.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const View_Booking_Using_Player_Id_Controller = async (req, res) => {

    try {
        const {sloteId, turfId} = req.query;

        if (!sloteId || !turfId) {

            console.log("All inputs are mandatory");

            return res.status(400).json({
                success: false,
                message: "All inputs are mandatory",
            });
        }

        const [data] = await mySqlConnectionPool.query("SELECT id, name, contact, turf_name, city, area, pincode, date, start_time, end_time, requird_light, requird_equipment, price, slote_id, turf_id FROM player WHERE slote_id=? AND turf_id=?", [sloteId, turfId]);

        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No booking found for this player ID",
            });
        }
        console.log("Player data featch successfully");

        
        console.log(`PlayerData : `, data[0]);
        

        res.status(200).json({
            success : true,
            data : data[0]
        })
        
        
    } catch (error) {
        
        console.log(`Error in View_Booking_Using_Player_Id_Controller API : ${error.message}`.bgRed);

        res.status(200).json({
            
            success : false,
            message : `Error in View_Booking_Using_Player_Id_Controller API : ${error.message}`.bgRed
        })
    }
}

exports.View_Booking_Using_Player_Id_Controller = View_Booking_Using_Player_Id_Controller