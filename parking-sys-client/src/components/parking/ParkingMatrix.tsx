import ParkingSlot from "./ParkingSlot"
import ParkingModal from "./ParkingModal";
import useParkVehicleModal from "../../hooks/useParkVehicleModal";
import { useState } from "react";
import defaulltSlots from "./helper/defaultSlots";
import IParkngSlot from "./types/IParkingSlot";
import ParkingStates from "./types/ParkingStatesEnum";

const ParkingMatrix = () => {
  const [parkingSlots, setParkingSlots] = useState<IParkngSlot[]>(defaulltSlots);

  const onChangeStatus = (index:number, status: ParkingStates) => {
    setParkingSlots((parking) => {
      parking[index].status = status
      return {...parking}
    })
  }

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