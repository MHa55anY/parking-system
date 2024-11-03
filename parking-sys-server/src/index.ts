import cors from "cors";
import express from "express";
import userRoutes from "./routesNew/auth";
import parkingRoutes from "./routesNew/parking";
import driverRoutes from "./routesNew/driver";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/user", userRoutes);
app.use("/parking", parkingRoutes);
app.use("/driver", driverRoutes);

app.listen(5000, () => console.log("server has started on port 5000"));
