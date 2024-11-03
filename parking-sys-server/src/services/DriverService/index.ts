import DriverModel from "../../modelsNew/DriverModel";
import BaseService from "../BaseService/BaseService";
import type { TCreateDriverInput } from "./types";
import type { Transaction } from "objection";

class DriverService extends BaseService {
  public async getDriverById(id: string) {
    try {
      const driver = await DriverModel.query().findById(id);

      return driver;
    } catch (error) {
      throw error;
    }
  }

  public async createDriver(input: TCreateDriverInput, trx?: Transaction) {
    try {
      const driver = await DriverModel.query(trx).insert(input);

      return driver;
    } catch (error) {
      throw error;
    }
  }
}

export default DriverService;
