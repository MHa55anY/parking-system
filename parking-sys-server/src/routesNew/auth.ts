import express from "express";
import AuthController from "../controllers/AuthController";

const userRoutes = express.Router();

userRoutes.post("/register", AuthController.register);

userRoutes.post("/login", AuthController.login);

export default userRoutes;
