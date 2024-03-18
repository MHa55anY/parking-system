import PaymentStatesEnum from '../types/PaymentStatesEnum.js';
import pool from './common.js';

const createParkingFeesTable = async () => {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS parking_fees (
            id SERIAL PRIMARY KEY,
            payment_code VARCHAR(255) NOT NULL,
            amount  NUMERIC(15, 2) NOT NULL,
            FOREIGN KEY (driver_id) REFERENCES driver(id),
            createdOn timestamp NOT NULL DEFAULT '${new Date()}', 
            updateOn timestamp NOT NULL DEFAULT '${new Date()}'
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