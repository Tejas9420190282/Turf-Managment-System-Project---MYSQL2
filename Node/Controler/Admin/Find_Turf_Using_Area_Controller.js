
// find_Turf_Using_Area_Controller.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const find_Turf_Using_Area_Controller = async (req, res) => {

    try {
        
        const { area } = req.params;

        const [row] = await mySqlConnectionPool.query("SELECT * FROM turf WHERE area=?", [area]);

        if (!row ||row.length === 0) {

            console.log("Turf not found".bgRed);
            
            return res.status(404).json({ message: "Turf not found" });
        }

        console.log(`All data found : `, row);

        res.status(200).json({
            row : row[0],
            redirect : "/admin/search-area-turf/:area/final-update-turf"
        });

    } catch (error) {
        
        console.log(`Error in Update_Turf_Using_Area_Controller API : ${error.message}`);
        
        res.status(500).json({

            success : false,
            message : `Error in find_Turf_Using_Area_Controller API : ${error.message}`
        });
    }
}

exports.find_Turf_Using_Area_Controller = find_Turf_Using_Area_Controller;

