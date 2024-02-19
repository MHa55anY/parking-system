import IParkngSlot from "../components/parking/types/IParkingSlot";
import axiosInstance from "./axiosInstance";

export const initialiseParkng = (payload: IParkngSlot[]) => axiosInstance.post('/parking//add-parking-slots', payload);