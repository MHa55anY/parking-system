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
  private CREATE_QUERY = `        
    CREATE TABLE IF NOT EXISTS driver (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    vehicle_number VARCHAR(20) UNIQUE NOT NULL,
    vehicle_model VARCHAR(20),
    parking_id INTEGER NOT NULL,
    FOREIGN KEY (parking_id) REFERENCES parking(id) ON DELETE CASCADE,
    createdOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}',
    updateOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}'
  );
`;
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
