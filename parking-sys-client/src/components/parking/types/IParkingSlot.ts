import ParkingStates from "./ParkingStatesEnum";

interface  IParkngSlot {
    code: string;
    coordinate: string;
    status: ParkingStates
};

export default IParkngSlot;