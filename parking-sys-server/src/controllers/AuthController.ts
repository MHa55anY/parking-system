import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../modelsNew/UserModel";
import BaseController from "./BaseController";
import { ACCESS_TOKEN_SECRET } from "../routesNew/secret";

class AuthController extends BaseController {
  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  private async isPasswordMatchWithHashed(
    hashPassword: string,
    password: string
  ) {
    return await bcrypt.compare(password, hashPassword);
  }
  private generateAccessToken(
    paramsToSign: Pick<UserModel, "username"> & { role: string }
  ) {
    return jwt.sign(paramsToSign, ACCESS_TOKEN_SECRET);
  }

  public async register(username: string, password: string) {
    const userModel = await UserModel.query(this.transaction).findOne({
      username,
    });
    if (userModel) {
      return { message: "User already exists!", statusCode: 400 };
    }
    try {
      const hashedPassword = await this.hashPassword(password);
      const res = await UserModel.query(this.transaction).insert({
        username,
        password: hashedPassword,
      });
      return {
        status: 201,
        message: "Registration Successful!",
        data: res.username,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Registration Failed!",
      };
    }
  }

  public async login(
    username: string,
    password: string
  ): Promise<{
    statusCode: number;
    message: string;
    accessToken?: string;
  }> {
    try {
      const user = await UserModel.query(this.transaction).findOne({
        username,
      });
      if (!user) {
        throw Error("Username does not exist!");
      }

      const { password: hashPassword } = user;
      const isCorrectPassword = await this.isPasswordMatchWithHashed(
        hashPassword,
        password
      );
      if (!isCorrectPassword) {
        throw Error("Incorrect Password!");
      }

      const accessToken = this.generateAccessToken({
        role: "USER",
        username,
      });
      return {
        statusCode: 200,
        message: "Logged In Successfully!",
        accessToken,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: (error as Error).message,
      };
    }
  }
}

export default AuthController;
