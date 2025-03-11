

const { mySqlConnectionPool } = require("../Config/Db");

const createUserTable = async () => {
    try {
        
        const query = `CREATE TABLE IF NOT EXISTS user(userId INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, phone VARCHAR(10) UNIQUE)`;

        await mySqlConnectionPool.query(query); 

    } catch (error) {
        
        console.log(`Error in creation of User Table : ${error.message}`);
    }
}

createUserTable();


