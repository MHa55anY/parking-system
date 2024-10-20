import { Model } from "objection";

interface DriverModel {
  id: number;
  name: string;
  parkingId: number;
  phoneNumber: string;
  vehicleNumber: string;
  vehicleModel?: string;
  createdOn: string;
  updatedOn: string;
}

class DriverModel extends Model {
  static hello = () => console.log("hello");
}

export default DriverModel;
