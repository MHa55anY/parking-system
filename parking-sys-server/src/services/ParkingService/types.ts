import ParkingModel from "../../modelsNew/ParkingModel";
import { TCreateDriverInput } from "../DriverService/types";

export type TCreateParkingInput = Pick<
  ParkingModel,
  "code" | "coordinate" | "userId" | "status"
> &
  Omit<TCreateDriverInput, "parkingId">;
