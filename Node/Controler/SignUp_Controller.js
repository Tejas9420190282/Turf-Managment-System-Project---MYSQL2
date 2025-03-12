
// SignUp_Controller.js (Node)


const bcrypt = require('bcrypt');
const { mySqlConnectionPool } = require("../Config/Db");

const signUp_Controller = async (req, res) => {

    try {

        const { name, email, password, phone } = req.body;

        console.log(req.body);

        if (!name || !email || !password || !phone) {
            
            console.log("All the inputs are requird".bgRed);
            
            return res.status(400).json({      // 400 ====> Bad request
                success : false,
                message : "All the inputs are requird"
            })
        }

        const [row] = await mySqlConnectionPool.query(`SELECT * FROM user WHERE email=?`,[email]) 

        if (row.length > 0) {
            
            console.log("This username already created....");

            return res.status(409).json({      // 409 ======>  Conflict
                success : false,
                message : "This username already created...."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(`Hashed Password : , ${hashedPassword}`.bg);

        await mySqlConnectionPool.query("INSERT INTO user (name, email, password, phone) VALUES (?, ?, ?, ?)", [name, email, hashedPassword, phone]);

        console.log("Account SignUp Successfully".bgGreen);
        

        res.status(201).json({  // 201 ===> created

            success : true,
            message : "Account SignUp Successfully",
            redirect : "/login"
        })
        
    } catch (error) {
        
        console.log(`Error in signUp_Controller API : , ${error.message}`.bgRed);
        
        res.status(500).json({      // 500 ====> internal server error
            
            success : false,
            message : `Error in signUp_Controller API : ${error.message}`,
        })
    }
}

exports.signUp_Controller = signUp_Controller;

