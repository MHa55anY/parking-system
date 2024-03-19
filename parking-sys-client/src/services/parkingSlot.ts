import IDriver from "../components/parking/types/IDriver";
import IParkngSlot from "../components/parking/types/IParkingSlot";
import axiosInstance from "./axiosInstance";

interface IResponseTemplate<T> {
    success: string;
    message: string;
    result: {
        [key: string]: T;
    }
}

export const initialiseParkng = (payload: IParkngSlot[]) => axiosInstance.post('/parking/add-parking-slots', payload);
export const fetchOccupiedSlots = () => axiosInstance.get('/parking/fetch-occupied-slots');
export const occupySlot = (payload: IParkngSlot & IDriver) =>  axiosInstance.put<IResponseTemplate<IParkngSlot[]>>('/parking/occupy-parking-slot', payload);