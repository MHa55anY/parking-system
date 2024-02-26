import pool from './common.js';

const createDriverTable = async () => {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS driver (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            phone_number VARCHAR(20) UNIQUE NOT NULL,
            vehicle_number VARCHAR(20) UNIQUE NOT NULL,
            vehicle_model VARCHAR(20) 
        );
      `);
      console.log('driver table created successfully');
    } catch (error) {
      console.error('Error creating user table:', error);
    } finally {
      client.release();
    }
};

export default createDriverTable;