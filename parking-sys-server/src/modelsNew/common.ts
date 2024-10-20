import pkg from "pg";
import createUserTable from "./UserModel";
import createParkingTable from "./parking.model";
import createDriverTable from "./driver.model";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "parking_system",
  password: "example",
  port: 5432,
});

export async function initializeDatabase() {
  try {
    // await createUserTable();
    await createParkingTable();
    await createDriverTable();
  } catch (error: any) {
    throw new Error("Error initializing database: " + error.message);
  }
}

export default pool;
