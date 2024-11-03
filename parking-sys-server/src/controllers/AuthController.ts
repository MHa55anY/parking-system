import BaseController from "./BaseController";
import AuthService from "../services/AuthService";

import type { Request, Response } from "express";

class AuthController extends BaseController {
  authService = new AuthService();

  async register(
    req: Request<{}, {}, { username: string; password: string }>,
    res: Response
  ) {
    const { username, password } = req.body;

    try {
      const data = await this.authService.register(username, password);

      this.sendSuccess(res, data, "User Registered Successfully!");
    } catch (error) {
      this.sendError(res, error, 500);
    }
  }

  async login(
    req: Request<{}, {}, { username: string; password: string }>,
    res: Response
  ) {
    const { username, password } = req.body;

    try {
      const accessToken = await this.authService.login(username, password);

      this.sendSuccess(res, { accessToken }, "User Logged In Successfully!");
    } catch (error) {
      this.sendError(res, error, 500);
    }
  }
}

export default AuthController;
