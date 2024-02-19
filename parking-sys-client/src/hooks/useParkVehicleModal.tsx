import { create } from "zustand";
import ParkingStates from "../components/parking/types/ParkingStatesEnum";

export interface ParkVehicleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  viewType: ParkingStates;
}

const useParkVehicleModal = create<ParkVehicleModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  viewType: ParkingStates.VACANT
}));

export default useParkVehicleModal;