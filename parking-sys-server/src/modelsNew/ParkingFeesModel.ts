import BaseModel from "./BaseModel";

class ParkingFeesModel extends BaseModel {
  private CREATE_QUERY = `
        CREATE TABLE IF NOT EXISTS parking_fees (
            id SERIAL PRIMARY KEY,
            payment_code VARCHAR(255) NOT NULL,
            amount  NUMERIC(15, 2) NOT NULL,
            vehicle_number VARCHAR(20) UNIQUE NOT NULL,
            createdOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}',
            updateOn timestamp NOT NULL DEFAULT '${new Date().toISOString()}'
        );
      `;
}

export default ParkingFeesModel;
