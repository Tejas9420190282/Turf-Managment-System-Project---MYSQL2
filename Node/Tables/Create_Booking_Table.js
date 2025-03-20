
// createBookingTable.js

const { mySqlConnectionPool } = require("../Config/Db");

const createBookingTable = async () => {

    try {

        const createBooking = await mySqlConnectionPool.query("CREATE TABLE IF NOT EXISTS booking(booking_id INT PRIMARY KEY AUTO_INCREMENT, booking_date DATE NOT NULL, slote_id INT, FOREIGN KEY (slote_id) REFERENCES slote(slote_id), turf_id INT, FOREIGN KEY (turf_id) REFERENCES turf(TURF_ID), player_id INT, FOREIGN KEY (player_id) REFERENCES player(id))")
         
    } catch (error) {
        
        console.log(`Error in creating Booking table : ${error.message}`.bgRed); 
    }
}

createBookingTable();