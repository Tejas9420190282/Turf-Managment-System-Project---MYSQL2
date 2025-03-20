
// selected_Available_Slote_Controller.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const selected_Available_Slote_Controller = async (req, res) => {
    try {
        const { sloteid, turfid } = req.body;

        console.log(req.body);

        const [booked_Slote] = await mySqlConnectionPool.query(
            ("SELECT t.TURF_Id, t.turf_name, t.area, t.city, t.pincode, t.light, t.price_hr, t.equipment, t.image_URL, s.slote_id, s.start_time, s.end_time FROM turf t LEFT JOIN slote s ON t.TURF_Id = s.turf_id WHERE t.TURF_Id = ? AND s.slote_id = ?"), [turfid, sloteid]
        );

        console.log("Booked Slote : ", booked_Slote);

        res.status(200).json({
            success: true,
            booked_Slote: booked_Slote,
        });

    } catch (error) {
        console.log(`Error in API : ${error.message}`);

        res.status(500).json({
            success: false,
            message: `Error in API : ${error.message}`,
        });
    }
};

exports.selected_Available_Slote_Controller =
    selected_Available_Slote_Controller;


