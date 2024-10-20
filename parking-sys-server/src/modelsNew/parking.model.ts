import ParkingStates from "../types/ParkingStatesEnum.js";
import pool from "./common.js";

const createParkingTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS parking (
            id SERIAL PRIMARY KEY,
            code VARCHAR(255) NOT NULL,
            coordinate VARCHAR(20) NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT '${ParkingStates.VACANT}',
            userId INTEGER NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE, 
            CONSTRAINT unique_code_userId UNIQUE (code, userId), 
            createdOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}',
            updateOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}'
        );
      `);
    console.log("Parking table created successfully");
  } catch (error) {
    console.error("Error creating parking table:", error);
  } finally {
    client.release();
  }
};

export default createParkingTable;
