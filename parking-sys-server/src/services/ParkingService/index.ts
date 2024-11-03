import knex from "../../config/knex";
import ParkingModel from "../../modelsNew/ParkingModel";
import BaseService from "../BaseService/BaseService";
import DriverService from "../DriverService";
import { TCreateParkingInput } from "./types";

class ParkingService extends BaseService {
  private driverService = new DriverService();

  public async fetchParkingByUserId(userId: string) {
    try {
      const parking = await ParkingModel.query().where({ userId });

      return parking;
    } catch (error) {
      throw error;
    }
  }

  public async createParking(input: TCreateParkingInput) {
    const { userId, code, coordinate, status, ...driverInput } = input;
    const trx = await knex.transaction();

    try {
      trx.initialize();
      //create parking slot
      const { id: parkingId } = await ParkingModel.query(trx).insert();
      //insert driver
      const { id: driverId } = await this.driverService.createDriver({
        parkingId,
        ...driverInput,
      });

      trx.commit();
      return { parkingId, driverId };
    } catch (error) {
      trx.rollback();
      throw error;
    }
  }
}

export default ParkingService;
