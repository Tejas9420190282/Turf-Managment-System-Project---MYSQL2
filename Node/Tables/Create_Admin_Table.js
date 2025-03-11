
// Tables/Create_Admin_Table.js


const { mySqlConnectionPool } = require("../Config/Db");

const createAdminTable = async() => {

    try {
        
        const query = `CREATE TABLE IF NOT EXISTS admin (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL)`;
        
        await mySqlConnectionPool.query(query);

        console.log(`Admin table created Successfully`.bgGreen);

    } catch (error) {
        
        console.log(`Error creating admin table: ${error}`.bgRed);
        
    }
}

createAdminTable();




