import { Model, ModelProps } from "objection";
import BaseModel from "./BaseModel";
import ParkingModel from "./ParkingModel";

interface DriverModel {
  id: number;
  name: string;
  parkingId: number;
  phoneNumber: string;
  vehicleNumber: string;
  vehicleModel?: string;
}

class DriverModel extends BaseModel {
  static tableName = "driver";

  static get relationMappings() {
    return {
      parking: {
        relation: Model.BelongsToOneRelation,
        modelClass: ParkingModel,
        join: {
          from: `${this.tableName}.parking_id`,
          to: `${ParkingModel.tableName}.id`,
        },
      },
    };
  }
}

export type TDriverModel = ModelProps<DriverModel>;

export default DriverModel;
