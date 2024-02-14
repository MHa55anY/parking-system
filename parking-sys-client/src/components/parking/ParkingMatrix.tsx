import ParkingSlot from "./ParkingSlot"

const ParkingMatrix = () => {
  return (
    <div className="grid grid-cols-4 border-2 p-2 gap-2">
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
        <ParkingSlot/>
    </div>
  )
}

export default ParkingMatrix