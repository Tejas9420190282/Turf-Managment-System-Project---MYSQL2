
// resetPassword_Controller.js (Node)

const bcrypt = require("bcrypt");
const { mySqlConnectionPool } = require("../Config/Db");

const resetPassword_Controller = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        console.log("Received token:", token);
        console.log("Received password:", password);

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        // Find the user with the reset token and check if it's still valid
        const [userResult] = await mySqlConnectionPool.query(
            "SELECT * FROM user WHERE resetToken = ? AND resetTokenExpiry > ?",
            [token, Date.now()]
        );
        const user = userResult[0];

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired token",
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password and clear the reset token
        await mySqlConnectionPool.query(
            "UPDATE user SET password = ?, resetToken = NULL, resetTokenExpiry = NULL WHERE email = ?",
            [hashedPassword, user.email]
        );

        // Send a user-friendly response
        res.status(200).json({
            success: true,
            message: "You can now log in on your device.",
            redirect: "/", // Redirect to the login page
        });
    } catch (error) {
        console.log(`Error in resetPassword_Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Error in resetPassword_Controller: ${error.message}`,
        });
    }
};

module.exports = { resetPassword_Controller };
