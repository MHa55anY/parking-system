import { create } from "zustand";
import ParkingStates from "../components/parking/types/ParkingStatesEnum";

export interface ParkVehicleModalStore {
  isOpen: boolean;
  currentSlotIndex: number | null;
  onOpen: (index: number) => void;
  onClose: () => void;
  viewType: ParkingStates;
}

const useParkVehicleModal = create<ParkVehicleModalStore>((set) => ({
  isOpen: false,
  currentSlotIndex: null,
  onOpen: (index) => set({ isOpen: true, currentSlotIndex: index}),
  onClose: () => set({ isOpen: false, currentSlotIndex: null }),
  viewType: ParkingStates.VACANT
}));

export default useParkVehicleModal;