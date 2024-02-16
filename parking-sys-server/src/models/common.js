import pkg from 'pg';
import createUserTable from './user.model.js';
import createParkingTable from './parking.model.js'

const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'parking_system',
  password: 'example',
  port: 5432,
});

export async function initializeDatabase() {
  try {
    await createUserTable();
    await createParkingTable();
  } catch (error) {
    throw new Error('Error initializing database: ' + error.message);
  }
}

export default pool;