
// Final_Update_Turf_Controler.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const Final_Update_Turf_Controler = async (req, res) => {

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

        const [row] = await mySqlConnectionPool.query(
            "UPDATE turf SET turf_name = ?, city = ?, pincode = ?, light = ?, price_hr = ?, equipment = ?, openingTime = ?, closingTime = ? WHERE area=?",
            [turf_name, city, pincode, light, price_hr, equipment, openingTime, closingTime, area]
        );

        console.log("Successfully Updated the Values");
        
        res.status(200).json({
            
            success : true,
            message : "Successfully Updated the Values",
            row : row,
            redirect : "/updated-successfull"
        });

    } catch (error) {
        
        console.log(`Error in Final_Update_Turf_Controler API : ${error.message}`.bgRed);

        res.status(500).json({
            success : false,
            message : `Error in Final_Update_Turf_Controler API : ${error.message}`,
        })
    }
}

exports.Final_Update_Turf_Controler = Final_Update_Turf_Controler