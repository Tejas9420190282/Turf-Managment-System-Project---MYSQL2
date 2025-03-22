
// forgotPassword_Controller.js (Node)
/* 
require('dotenv').config();
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { mySqlConnectionPool } = require("../Config/Db");

const forgotPassword_Controller = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        // Check if the user exists
        const [userResult] = await mySqlConnectionPool.query(
            "SELECT * FROM user WHERE email = ?",
            [email]
        );
        const user = userResult[0];

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiry = Date.now() + 15 * 60 * 1000; // Token valid for 15 minutes

        // Save the reset token and expiry in the database
        await mySqlConnectionPool.query(
            "UPDATE user SET resetToken = ?, resetTokenExpiry = ? WHERE email = ?",
            [resetToken, resetTokenExpiry, email]
        );

        // Send email with reset link
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetLink = `http://192.168.219.224:4545/reset-password/${encodeURIComponent(resetToken)}`;

        console.log(resetLink);

        const mailOptions = {
            from: "tanmayshimpi1818@gmail.com",
            to: email,
            subject: "Password Reset",
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             ${resetLink}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Error sending email",
                });
            }

            console.log("Email sent: " + info.response);
            return res.status(200).json({
                success: true,
                message: "Password reset email sent",
            });
        });
    } catch (error) {
        console.log(`Error in forgotPassword_Controller: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: `Error in forgotPassword_Controller: ${error.message}`,
        });
    }
};

module.exports = { forgotPassword_Controller };
 */
 
require('dotenv').config();
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { mySqlConnectionPool } = require("../Config/Db");

const forgotPassword_Controller = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        // Check if the user exists
        const [userResult] = await mySqlConnectionPool.query(
            "SELECT * FROM user WHERE email = ?",
            [email]
        );
        const user = userResult[0];

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiry = (Date.now() + 15 * 60 * 1000); // token valid for 15 minuts

        // Save the reset token and expiry in the database
        await mySqlConnectionPool.query(
            "UPDATE user SET resetToken = ?, resetTokenExpiry = ? WHERE email = ?",
            [resetToken, resetTokenExpiry, email]
        );

        // Send email with reset link
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetLink = `http://192.168.219.224:4545/reset-password/${encodeURIComponent(resetToken)}`;

        console.log(resetLink);
        

    
        const mailOptions = {
            from: "tanmayshimpi1818@gmail.com",
            to: email,
            subject: "Password Reset",
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             ${resetLink}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Error sending email",
                });
            }

            console.log("Email sent: " + info.response);
            res.status(200).json({
                success: true,
                message: "Password reset email sent",
            });
        });
    } catch (error) {
        console.log(`Error in forgotPassword_Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Error in forgotPassword_Controller: ${error.message}`,
        });
    }
};

module.exports = { forgotPassword_Controller };
 