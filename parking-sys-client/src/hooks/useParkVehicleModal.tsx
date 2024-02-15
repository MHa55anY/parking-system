import { create } from "zustand";

export interface ParkVehicleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () =>void;
}
const useParkVehicleModal = create<ParkVehicleModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }) 
}));

export default useParkVehicleModal;