import { ModelProps } from "objection";
import BaseModel from "./BaseModel";

interface UserModel {
  id: number;
  username: string;
  readonly password: string;
}
class UserModel extends BaseModel {
  private CREATE_QUERY = `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL
        )
      `;
  static tableName: string = "users";
}
export type TUser = ModelProps<UserModel>;

export default UserModel;
