// // const express = require('express');
// // const { ApolloServer } = require('@apollo/server');
// // const { expressMiddleware } = require('@apollo/server/express4');
// // const bodyParser = require('body-parser');
// import cors from "cors";
// import express from "express";
// import { initializeDatabase } from "./models/common.js";
// import userRoutes from "./routes/auth";
// import parkingRoutes from "./routes/parking.js";
// import driverRoutes from "./routes/driver.js";

// const app = express();
// const users = [];

// // middleware
// app.use(cors());
// app.use(express.json());

// //routes
// app.use("/user", userRoutes);
// app.use("/parking", parkingRoutes);
// app.use("/driver", driverRoutes);

// initializeDatabase().then(() => {
//   app.listen(5000, () => console.log("server has started on port 5000"));
// });
