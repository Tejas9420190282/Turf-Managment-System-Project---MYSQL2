
// createPlayerTable.js 

const { mySqlConnectionPool } = require("../Config/Db");

const createPlayerTable = async () => {
    try {
        await mySqlConnectionPool.query(
            "CREATE TABLE IF NOT EXISTS player(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), contact VARCHAR(100), turf_name VARCHAR(100), city VARCHAR(100), area VARCHAR(100), pincode VARCHAR(25), date DATE, start_time TIME, end_time TIME, requird_light VARCHAR(10), requird_equipment VARCHAR(10), price VARCHAR(20), slote_id INT, FOREIGN KEY (slote_id) REFERENCES slote(slote_id) ON DELETE CASCADE, turf_id INT, FOREIGN KEY (turf_id) REFERENCES turf(TURF_ID) ON DELETE CASCADE)"
        );
        

        console.log(`Player table created Successfully`.bgGreen);
    } catch (error) {
        console.log(`Error in createPlayerTable API : ${error.message}`);
    }
};

createPlayerTable();
