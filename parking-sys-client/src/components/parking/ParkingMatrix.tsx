import ParkingSlot from "./ParkingSlot"
import ParkingModal from "./ParkingModal";
import { useEffect, useState } from "react";
import defaulltSlots from "./helper/defaultSlots";
import IParkngSlot from "./types/IParkingSlot";
import ParkingStates from "./types/ParkingStatesEnum";
import { fetchOccupiedSlots, occupySlot } from "../../services/parkingSlot";
import toast from "react-hot-toast";
import IDriver from "./types/IDriver";
import { FieldValues } from "react-hook-form";
import useParkVehicleModal from "../../hooks/useParkVehicleModal";

const ParkingMatrix = () => {
  const [parkingSlots, setParkingSlots] = useState<IParkngSlot[]>(defaulltSlots);
  const {currentSlotIndex} = useParkVehicleModal();

  const onChangeStatus = (index:number, status: ParkingStates) => {
    setParkingSlots((parking) => {
      parking[index].status = status
      return {...parking}
    })
  }

 const onModalSubmit = async (data: FieldValues) => {
  if(currentSlotIndex === null) return;
  const {code, coordinate} = parkingSlots[currentSlotIndex];
  const {driverName, vehicleModel, vehicleNumber, phoneNumber} = data;
      const req: IParkngSlot & IDriver = {
        code,
        coordinate,
        driverName,
        vehicleModel,
        phoneNumber,
        status: ParkingStates.OCCUPIED,
        vehicleNumber
      }
      try {
        const { data } = await occupySlot(req);
        const {result: { slots }} = data;
        setParkingSlots((prev) => {
          prev[currentSlotIndex] = slots[0];
          return [...prev];
        })
        toast.success("Driver has parked successfully!")
      } catch (error) {
        toast.error("Snap! Did the driver crash?")
        console.log(error)
      }
    }

  useEffect(() => {
    const fetchOccupiedSlotsFn =  async () => {
      try {
        const { data: { rows } }: {data: { rows: IParkngSlot[] }} = await fetchOccupiedSlots();
        setParkingSlots((prev) => {
          rows.forEach((occupiedSlot) => {
            const index = prev.findIndex((p) => p.code === occupiedSlot.code);
            if(index !== -1) prev[index] = occupiedSlot;
          })
          return [...prev];
        })
      } catch (error) {
        toast.error("Could not load saved parking, please check if the server is running!");
      }
    };
    fetchOccupiedSlotsFn();
  }, [])

  return (
    <>
      <div className="grid grid-cols-4 border-2 p-2 gap-2">
        {parkingSlots.map((props, index) => <ParkingSlot {...props} onChangeStatus={onChangeStatus} key={props.code} parkingIndex={index}/>)}
      </div>
      <ParkingModal onSubmit={onModalSubmit} />
    </>
  )
}

export default ParkingMatrix