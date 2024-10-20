import { Model } from "objection";
import knex from "../../config/knex";
import type { Pojo, QueryContext } from "objection";

Model.knex(knex);

interface BaseModel {
  active?: boolean;
  updatedOn?: string;
  updatedBy?: string;
  createdOn?: string;
  createdBy?: string;
}

class BaseModel extends Model {
  async $beforeUpdate(opt: Pojo, queryContext: QueryContext) {
    this.updatedOn = new Date().toISOString();

    await super.$beforeUpdate(opt, queryContext);
  }
}

export default BaseModel;
