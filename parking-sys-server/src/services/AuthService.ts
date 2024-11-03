import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../modelsNew/UserModel";
import BaseService from "./BaseService/BaseService";
import { ACCESS_TOKEN_SECRET } from "../routesNew/secret";
import type { Transaction } from "objection";

class UserService extends BaseService {
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

  public async register(
    username: string,
    password: string,
    trx?: Transaction
  ): Promise<{ username: string }> {
    try {
      trx?.initialize();
      const userModel = await UserModel.query(trx).findOne({
        username,
      });
      if (userModel) {
        throw Error("Username already exists!");
      }
      const hashedPassword = await this.hashPassword(password);
      const res = await UserModel.query(trx).insert({
        username,
        password: hashedPassword,
      });

      trx?.commit();
      return {
        username: res.username,
      };
    } catch (error) {
      trx?.rollback();
      throw error;
    }
  }

  public async login(
    username: string,
    password: string
  ): Promise<{
    accessToken?: string;
  }> {
    try {
      const user = await UserModel.query().findOne({
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
        accessToken,
      };
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
