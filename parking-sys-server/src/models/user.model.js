import pool from './common.js';

const createUserTable = async () => {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(100) UNIQUE NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL
        )
      `);
      console.log('User table created successfully');
    } catch (error) {
      console.error('Error creating user table:', error);
    } finally {
      client.release();
    }
};

export default createUserTable;