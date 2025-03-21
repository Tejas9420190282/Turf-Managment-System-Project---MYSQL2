// payment_Controller.js (node)
const Razorpay = require("razorpay");
const { mySqlConnectionPool } = require("../../Config/Db");

// Initialize Razorpay instance with your keys
const razorpay = new Razorpay({
    key_id: "rzp_test_6Pg8m8ifI60Xmi", // Your Razorpay key ID
    key_secret: "9cLSFrLUCm0hJnwfbs0szhRK", // Your Razorpay key secret
});

const payment_Controller = async (req, res) => {
    try {
        const {
            turfData,
            name,
            contact,
            slote_id,
            turf_id,
            start_time,
            end_time,
            light,
            equipment,
            area,
            city,
            pin,
            basePrice,
            totalPrice,
            turfName,
            date,
        } = req.body;

        // Validate all required fields
        if (
            !turfData ||
            !name ||
            !contact ||
            !slote_id ||
            !turf_id ||
            !start_time ||
            !end_time ||
            !light ||
            !equipment ||
            !area ||
            !city ||
            !pin ||
            !basePrice ||
            !totalPrice ||
            !turfName ||
            !date
        ) {
            return res.status(400).json({
                success: false,
                message: "All inputs are mandatory",
            });
        }

        // Insert player data into the database
        const [insertPlayer] = await mySqlConnectionPool.query(
            "INSERT INTO player (name, contact, turf_name, city, area, pincode, date, start_time, end_time, requird_light, requird_equipment, price, slote_id, turf_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                name,
                contact,
                turfName,
                city,
                area,
                pin,
                date,
                start_time,
                end_time,
                light,
                equipment,
                totalPrice,
                slote_id,
                turf_id,
            ]
        );

        // Get the player ID from the inserted row
        const playerId = insertPlayer.insertId;

        console.log("Player data inserted into the player table".bgGreen);

        // Insert booking data into the database
        await mySqlConnectionPool.query(
            "INSERT INTO booking (booking_date, slote_id, turf_id, player_id) VALUES (?, ?, ?, ?)",
            [date, slote_id, turf_id, playerId]
        );

        console.log("Booking data inserted into the booking table".bgGreen);

        // Create a Razorpay order
        const options = {
            amount: totalPrice * 100, // Amount in paise (e.g., ₹500 = 50000 paise)
            currency: "INR",
            receipt: `sloteId_${slote_id}_and_turfId_${turf_id}`, // Unique receipt ID
            payment_capture: 1, // Auto-capture payment
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            order,
            navigate: "/success-booking", // Redirect after successful payment
        });
    } catch (error) {
        console.error("Error in Payment_Controller:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to process payment",
        });
    }
};

exports.payment_Controller = payment_Controller;

