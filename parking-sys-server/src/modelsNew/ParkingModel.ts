import { Model } from "objection";
import BaseModel from "./BaseModel";
import UserModel from "./UserModel";

interface ParkingModel {
  id: number;
  code: string;
  coordinate: string;
  status: string;
  userId: number;
}

class ParkingModel extends BaseModel {
  static tableName: string = "parking";

  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: UserModel,
        join: {
          from: `${this.tableName}.user_id`,
          to: `${UserModel.tableName}.id`,
        },
      },
    };
  }
}

export default ParkingModel;
