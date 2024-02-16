import pool from './common.js';

const createParkingTable = async () => {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS parking (
            id SERIAL PRIMARY KEY,
            code VARCHAR(255) NOT NULL,
            coordinate VARCHAR(20) NOT NULL,
            occupied BOOLEAN DEFAULT FALSE,
            userId INTEGER NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
            CONSTRAINT unique_code_userId UNIQUE (code, userId)
        );
      `);
      console.log('Parking table created successfully');
    } catch (error) {
      console.error('Error creating user table:', error);
    } finally {
      client.release();
    }
};

export default createParkingTable;