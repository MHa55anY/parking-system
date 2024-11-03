import express from "express";
import ParkingController from "../controllers/ParkingController";
import { authenticateToken } from "../middleware/authMiddleware";

const parkingRoutes = express.Router();

parkingRoutes.put(
  "/occupy-parking-slot",
  authenticateToken,
  ParkingController.createParkingSlot
);

export default parkingRoutes;
