
// verifyPaymentController.js

const crypto = require("crypto");
require("dotenv").config();

const verifyPaymentController = async (req, res) => {

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            res.status(200).json({
                success: true,
                message: "Payment verified successfully",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }

        

    } catch (error) {
        console.error(`Error in verifyPayment: ${error}`.bgRed);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

exports.verifyPaymentController = verifyPaymentController



