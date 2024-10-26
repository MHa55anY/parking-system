import { Transaction } from "objection";
import knex from "../../config/knex";

interface BaseControllerParams {
  transaction?: Transaction;
}

class BaseController {
  transaction?: Transaction;

  constructor({ transaction }: BaseControllerParams) {
    this.transaction = transaction;
  }
}

export default BaseController;
