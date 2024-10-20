import { ModelProps } from "objection";
import BaseModel from "./BaseModel";

interface UserModel {
  id: number;
  username: string;
  readonly password: string;
}
class UserModel extends BaseModel {
  static tableName: string = "users";
}
export type TUser = ModelProps<UserModel>;

export default UserModel;
