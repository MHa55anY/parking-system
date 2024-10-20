import knexConnector from "knex";

const knex = knexConnector({
  client: "pg",
  connection: async () => ({
    user: "postgres",
    host: "localhost",
    database: "parking_system",
    password: "example",
    port: 5432,
  }),
});

export default knex;
