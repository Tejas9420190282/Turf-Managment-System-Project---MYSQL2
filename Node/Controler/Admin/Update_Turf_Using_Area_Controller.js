
const Update_Turf_Using_Area_Controller = async (req, res) => {

    try {
        
        const {area, turf_name, city, pincode, light, price_hr, equipment, openingTime, closingTime} = req.body;


    } catch (error) {
        
        console.log(`Error in Update_Turf_Using_Area_Controller API : ${error.message}`);
        
        res.status(500).json({

            success : false,
            message : `Error in Update_Turf_Using_Area_Controller API : ${error.message}`
        });
    }
}

exports.Update_Turf_Using_Area_Controller = Update_Turf_Using_Area_Controller;