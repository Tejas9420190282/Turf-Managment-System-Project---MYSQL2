// search_Available_Turf_Controler.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const search_Available_Turf_Controler = async (req, res) => {
    try {
        const { city, area, booking_date } = req.query;

        console.log(req.query);

        if (!city || !area || !booking_date) {
            console.log(`All inputs are mandatory`.bgRed);

            return res.status(400).json({
                success: false,
                message: `All inputs are mandatory`,
            });
        }

        // Step 1: Fetch all slots for turfs in the specified city and area
        const [allSlots] = await mySqlConnectionPool.query(
            `SELECT 
                t.TURF_Id, 
                t.turf_name, 
                t.city, 
                t.area, 
                t.pincode, 
                t.light, 
                t.price_hr, 
                s.slote_id, 
                s.start_time, 
                s.end_time,
                s.status
             FROM 
                turf t 
             LEFT JOIN 
                slote s 
             ON 
                t.TURF_Id = s.turf_id 
             WHERE 
                t.city = ? 
                AND t.area = ?`,
            [city, area]
        );

        // Step 2: Fetch booked slots for the specified date
        const [bookedSlots] = await mySqlConnectionPool.query(
            `SELECT 
                slote_id 
             FROM 
                booking
             WHERE 
                booking_date = ?`,
            [booking_date]
        );

        console.log("Booked slote before Map function : ", bookedSlots);

        // Step 3: Filter out booked slots
        const bookedSlotIds = bookedSlots.map((slot) => slot.slote_id);
        
        console.log("Booked slote After Map function : ", bookedSlotIds);
        
        const availableSlots = allSlots.filter(
            (slot) => !bookedSlotIds.includes(slot.slote_id)
        );

        if (availableSlots.length === 0) {
            console.log(`No available slots found`.bgRed);

            return res.status(404).json({
                success: false,
                message: "No available slots found",
            });
        }

//      console.log("Available Slots : ", availableSlots);

        res.status(200).json({
            success: true,
            message: "Available slots fetched successfully",
            availableSlots: availableSlots,
        });
    } catch (error) {
        console.log(
            `Error in search_Available_TurfControler API : ${error.message}`
                .bgRed
        );

        res.status(500).json({
            success: false,
            message: `Error in search_Available_TurfControler API : ${error.message}`,
        });
    }
};

exports.search_Available_Turf_Controler = search_Available_Turf_Controler;
