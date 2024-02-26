import ParkingSlot from "./ParkingSlot"
import ParkingModal from "./ParkingModal";
import { useEffect, useState } from "react";
import defaulltSlots from "./helper/defaultSlots";
import IParkngSlot from "./types/IParkingSlot";
import ParkingStates from "./types/ParkingStatesEnum";
import { fetchOccupiedSlots } from "../../services/parkingSlot";
import toast from "react-hot-toast";

const ParkingMatrix = () => {
  const [parkingSlots, setParkingSlots] = useState<IParkngSlot[]>(defaulltSlots);

  const onChangeStatus = (index:number, status: ParkingStates) => {
    setParkingSlots((parking) => {
      parking[index].status = status
      return {...parking}
    })
  }

  useEffect(() => {
    const fetchOccupiedSlotsFn =  async () => {
      try {
        const { data }: {data: IParkngSlot[]} = await fetchOccupiedSlots();
        setParkingSlots((prev) => {
          data.forEach((occupiedSlot) => {
            const index = prev.findIndex((p) => p.code === occupiedSlot.code);
            if(index) prev[index] = occupiedSlot;
          })
          return [...prev];
        })
      } catch (error) {
        toast.error("Could not load saved parking, please check if the server is running!")
      }
    };
    fetchOccupiedSlotsFn();
  }, [])

  return (
    <>
      <div className="grid grid-cols-4 border-2 p-2 gap-2">
        {parkingSlots.map((props) => <ParkingSlot {...props} onChangeStatus={onChangeStatus} />)}
      </div>
      <ParkingModal />
    </>
  )
}

export default ParkingMatrix