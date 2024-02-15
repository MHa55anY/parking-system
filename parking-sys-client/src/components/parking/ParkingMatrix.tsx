import ParkingSlot from "./ParkingSlot"
import ParkingModal from "./ParkingModal";
import useParkVehicleModal from "../../hooks/useParkVehicleModal";

const ParkingMatrix = () => {
  const {isOpen, onClose, onOpen} = useParkVehicleModal();

  return (
    <>
      <div className="grid grid-cols-4 border-2 p-2 gap-2">
        <ParkingSlot onClick={onOpen}/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
      </div>
      <ParkingModal isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    </>
  )
}

export default ParkingMatrix