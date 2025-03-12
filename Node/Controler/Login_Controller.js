

// Login_Controller.js (Node)

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mySqlConnectionPool } = require('../Config/Db');

const SECRET_KEY = "secret-key"

const login_Controller = async (req, res) => {
    try {

        const { email, password } = req.body

        console.log(req.body);

        if (!email || !password) {
            
            console.log("All the inputs are requird".bgRed);
            
            return res.status(400).json({      // 400 ====> Bad request
                success : false,
                message : "All the inputs are requird"
            })
        }
 
        const [adminResult] = await mySqlConnectionPool.query(`SELECT * FROM admin WHERE email=?`, [email]);

        const admin = adminResult[0];

        if (admin) {
            
            if (password == admin.password) {
              
                const token = jwt.sign({ id: admin.id, email: admin.email}, SECRET_KEY, {expiresIn : "1h"});

                console.log();console.log("Successfully Logged in as Admin!".bgGreen);
                return res.status(200).json({
                    success: true,
                    message: "Successfully Logged in!",
                    token,
                    redirect: "/admin"
                });
                
            } else {
                console.log("Incorrect Password, Please Enter Valid Password".bgRed);
                return res.status(401).json({
                    success: false,
                    message: "Incorrect Password, Please Enter Valid Password"
                });
            }
        } 

        const [userResult] = await mySqlConnectionPool.query("SELECT * FROM user WHERE email=?", [email]);

        const user = userResult[0];

        if (!user) {
            
            console.log("Account is not created..".bgYellow);

            res.status(404).json({
                success : false,
                message : "Account is not created..",
                redirect : "/signin"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            
            console.log("Password is not Matching".bgYellow);
            
            res.status(404).json({      // 404 ====> unautherized
                success : false,
                message : "Password is not Matching..",
            })
        }

        const token = jwt.sign({email : email}, SECRET_KEY, {expiresIn: "1h"});

        console.log("Successfully Logged in.....!".bgGreen);

            return res.status(200).json({
                
                success : true,
                message : "Successfully Logged in.....!",
                redirect : "/user"
            })

        
    } catch (error) {
        
        console.log(`Error in signUp_Controller API : , ${error.message}`.bgRed);
        
        res.status(500).json({      // 500 ====> internal server error
            
            success : false,
            message : `Error in login_Controller API : ${error.message}`,
        })
    }
}

exports.login_Controller = login_Controller;