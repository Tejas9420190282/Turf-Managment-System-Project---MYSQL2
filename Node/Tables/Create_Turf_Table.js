
// create_Turf_Table.js (Node)

const { mySqlConnectionPool } = require("../Config/Db");

const create_Turf_Table = async () => {
    try {
        const query =
            "CREATE TABLE IF NOT EXISTS turf(TURF_Id INT AUTO_INCREMENT PRIMARY KEY, turf_name VARCHAR(255) NOT NULL, area VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, pincode VARCHAR(255) NOT NULL, light VARCHAR(10), price_hr FLOAT NOT NULL, equipment VARCHAR(10) NOT NULL, openingTime VARCHAR(10) NOT NULL,closingTime VARCHAR(10) NOT NULL, image_URL VARCHAR(500))";

        await mySqlConnectionPool.query(query);

        console.log("✅ Turf table created successfully.".bgGreen);
    } catch (error) {
        console.log(`❌ Error creating Turf table: ${error}`.bgRed);
    }
};

create_Turf_Table();
