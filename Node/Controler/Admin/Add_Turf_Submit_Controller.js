
// Add_Turf_Submit_Controller (Node)

const { mySqlConnectionPool } = require("../../Config/Db");
const { generateSlotsForTurf } = require("./generateSlotsForTurf ");


const Add_Turf_Submit_Controller = async (req, res) => {
    try {
        const { turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime } = req.body;

        console.log(req.body);

        // Validate all inputs
        if (!turf_name || !area || !city || !pincode || !light || !price_hr || !equipment || !openingTime || !closingTime) {
            console.log("All inputs are Mandatory...".bgRed);

            return res.status(400).json({ // 400 ====> Bad request
                success: false,
                message: "All inputs are Mandatory..."
            });
        }

        // Insert the new turf into the database
        const [result] = await mySqlConnectionPool.query(
            `INSERT INTO turf (turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime]
        );

        // Get the ID of the newly inserted turf
        const turfId = result.insertId;

        console.log("New Turf Inserted ✅".bgGreen);

        // Generate slots for the new turf
        await generateSlotsForTurf(turfId, openingTime, closingTime);

        console.log(`✅ Slots generated successfully for turf ID: ${turfId}`.bgGreen);

        // Send success response
        res.status(200).json({
            success: true,
            message: "New Turf Inserted Successfully",
            redirect: "/admin/add-turn/add-turf-submit/turf-result"
        });

    } catch (error) {
        console.log(`Error in Add_Turf_Submit_Controller API : ${error.message}`.bgRed);

        res.status(500).json({
            success: false,
            message: `Error in Add_Turf_Submit_Controller API : ${error.message}`
        });
    }
};

exports.Add_Turf_Submit_Controller = Add_Turf_Submit_Controller;


