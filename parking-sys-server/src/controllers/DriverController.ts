import DriverModel from "../modelsNew/DriverModel";
import DriverService from "../services/DriverService";
import BaseController from "./BaseController";

import type { Request, Response } from "express";

type TCreateDriverInput = Pick<
  DriverModel,
  "name" | "phoneNumber" | "vehicleModel" | "vehicleNumber"
>;

class DriverController extends BaseController {
  private driverService = new DriverService();

  async getDriverById(req: Request<{ id: string }, {}, {}>, res: Response) {
    try {
      const { id } = req.params;
      const driver = await this.driverService.getDriverById(id);

      return this.sendSuccess(res, driver, "Success!");
    } catch (error) {
      return this.sendError(res, error, 500);
    }
  }
}

export default new DriverController();
