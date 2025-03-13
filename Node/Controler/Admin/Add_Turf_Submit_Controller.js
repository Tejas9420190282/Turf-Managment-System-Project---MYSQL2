
// Add_Turf_Submit_Controller (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const Add_Turf_Submit_Controller = async (req, res) => {

    try {

        const { turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime } = req.body;

        console.log(req.body);

        if (!turf_name || !area || !city || !pincode || !light || !price_hr || !equipment || !openingTime || !closingTime) {
            
            console.log("All inputs are Mandatory...".bgGreen);
            
            res.status(400).json({      // 400 ====> Bad request 
                
                success : false,
                message : "All inputs are Mandatory..."
            });           
        }

        await mySqlConnectionPool.query("INSERT INTO turf (turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [turf_name, area, city, pincode, light, price_hr, equipment, openingTime, closingTime]);
 
        console.log("New Truf Inserted ✅".bgGreen);
        
        res.status(200).json({

            success : true,
            message : "New Truf Inserted Successfully",
            redirect: "/admin/add-turn/add-turf-submit/turf-result"
        })
        
    } catch (error) {
        
        console.log(`Error in Add_Turf_Submit_Controller API : ${error.message}`.bgRed);

        res.status(500).json({
            
            success : false,
            message : `Error in Add_Turf_Submit_Controller API : ${error.message}`
        })
    }
}

exports.Add_Turf_Submit_Controller = Add_Turf_Submit_Controller;