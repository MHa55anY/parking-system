import express from "express";
import DriverController from "../controllers/DriverController";
import { authenticateToken } from "../middleware/authMiddleware";

const driverRoutes = express.Router();

driverRoutes.post(
  "/driver-by-parking-id/:id",
  authenticateToken,
  DriverController.getDriverById
);

export default driverRoutes;
