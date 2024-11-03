import type DriverModel from "../../modelsNew/DriverModel";
import type ParkingModel from "../../modelsNew/ParkingModel";

export type TCreateDriverInput = Pick<
  DriverModel,
  "name" | "phoneNumber" | "vehicleModel" | "vehicleNumber"
> & { parkingId: ParkingModel["id"] };
