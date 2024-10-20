import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "parking_system",
  password: "example",
  port: 5432,
});

export default pool;
