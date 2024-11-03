import ParkingModel from "../modelsNew/ParkingModel";
import ParkingService from "../services/ParkingService";
import { TCreateParkingInput } from "../services/ParkingService/types";
import BaseController from "./BaseController";

import type { Request, Response } from "express";

class ParkingController extends BaseController {
  private parkingService = new ParkingService();

  async fetchParkingByUserId(req: Request<{ userId: string }>, res: Response) {
    const { userId } = req.params;

    try {
      const slots = await this.parkingService.fetchParkingByUserId(userId);

      return this.sendSuccess(res, slots, "Fetched Slots Successfully!");
    } catch (error) {
      console.error(error);
      return this.sendError(res, error, 500);
    }
  }

  async createParkingSlot(
    req: Request<{}, {}, TCreateParkingInput>,
    res: Response
  ) {
    const { ...input } = req.body;
    try {
      const resData = await this.parkingService.createParking(input);

      return this.sendSuccess(
        res,
        resData,
        "Created Parking and Registered Driver Successfully!"
      );
    } catch (error) {
      console.error(error);
      return this.sendError(res, error, 500);
    }
  }
}

export default new ParkingController();
