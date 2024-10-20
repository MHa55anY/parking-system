import pool from './common.js';

const createParkingFeesTable = async () => {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS parking_fees (
            id SERIAL PRIMARY KEY,
            payment_code VARCHAR(255) NOT NULL,
            amount  NUMERIC(15, 2) NOT NULL,
            vehicle_number VARCHAR(20) UNIQUE NOT NULL,
            createdOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}',
            updateOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}'
        );
      `);
      console.log('Fees table created successfully');
    } catch (error) {
      console.error('Error creating fees table:', error);
    } finally {
      client.release();
    }
};

export default createParkingFeesTable;