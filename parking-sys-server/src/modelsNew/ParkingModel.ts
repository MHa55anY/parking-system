import { Model } from "objection";
import BaseModel from "./BaseModel";
import UserModel from "./UserModel";

import ParkingStates from "../typesNew/ParkingStatesEnum";

interface ParkingModel {
  id: number;
  code: string;
  coordinate: string;
  status: string;
  userId: number;
}

class ParkingModel extends BaseModel {
  private CREATE_QUERY = `
        CREATE TABLE IF NOT EXISTS parking (
            id SERIAL PRIMARY KEY,
            code VARCHAR(255) NOT NULL,
            coordinate VARCHAR(20) NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT '${ParkingStates.VACANT}',
            userId INTEGER NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE, 
            CONSTRAINT unique_code_userId UNIQUE (code, userId), 
            createdOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}',
            updateOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}'
        );
      `;
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
