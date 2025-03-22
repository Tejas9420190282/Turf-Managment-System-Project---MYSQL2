const bcrypt = require("bcrypt");
const { mySqlConnectionPool } = require("../Config/Db");


const getResetPasswordPage = async (req, res) => {
    try {
        const { token } = req.params;

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

        // Render the reset password page (you can use a template engine like EJS or send a simple HTML response)
        res.send(`
            <form action="/reset-password/${token}" method="POST">
                <label for="password">New Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Reset Password</button>
            </form>
        `);

    } catch (error) {
        console.log(`Error in getResetPasswordPage: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Error in getResetPasswordPage: ${error.message}`,
        });
    }
};

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

        res.status(200).json({
            success: true,
            message: "Password reset successfully",
            redirect: "/",
        });
    } catch (error) {
        console.log(`Error in resetPassword_Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Error in resetPassword_Controller: ${error.message}`,
        });
    }
};

module.exports = { resetPassword_Controller, getResetPasswordPage };