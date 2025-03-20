
// createSloteTable.js (Node)

const { mySqlConnectionPool } = require("../Config/Db");

const createSloteTable = async () => {

    try {
        
        const createSloteTable = await mySqlConnectionPool.query("CREATE TABLE IF NOT EXISTS slote (slote_id INT AUTO_INCREMENT PRIMARY KEY, date DATE NOT NULL, start_time TIME NOT NULL, end_time TIME NOT NULL, status ENUM('AVAILABLE', 'BOOKED') NOT NULL DEFAULT 'AVAILABLE', turf_id INT, FOREIGN KEY (turf_id) REFERENCES turf(TURF_ID))");

        console.log(`Slote Table Created Successfully`.bgGreen);

    } catch (error) {
        
        console.log(`Error in creating Slote table : ${error.message}`.bgRed);     
    }
}

createSloteTable();





