
// delete_Turf_Controller.js (Node)

const { mySqlConnectionPool } = require("../../Config/Db");

const delete_Turf_Controller = async (req, res) => {

    try {
        
            const { area } = req.body;

            if (!area) {
                
                console.log("Input is Mandatory");
                
                res.status(501).json({

                    success : false,
                    message : "Input is Mandatory"
                })
            }

            const [deleteTurf] = await mySqlConnectionPool.query("DELETE FROM turf WHERE area = ?", [area]);

            console.log("Turf Deleted Successfully");
                
            res.status(200).json({

                success : true,
                message : "Turf Deleted Successfully"
            })            

        } catch (error) {
         
            console.log("Turf Deleted Successfully".bgGreen);
            
            res.status(400).json({

                success : false,
                message : `Error in delete_Turf_Controller API : ${error.message}`
            })
        }   
}

exports.delete_Turf_Controller = delete_Turf_Controller;
