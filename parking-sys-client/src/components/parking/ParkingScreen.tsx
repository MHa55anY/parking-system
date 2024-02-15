import Navbar from "./Navbar"
import ParkingMatrix from "./ParkingMatrix"


const ParkingScreen = () => {
  return (
    <div className="h-screen w-full bg-red-50">
        {/* NAVBAR */}
        <Navbar/>
        {/* HEADER */}
        <div className="w-full text-2xl text-center font-bold p-8">
            Play around with the parking matrix on the left
        </div>
        {/* CONTENT */}
        <div className="w-full flex justify-between h-[70%] p-1">
            <div className="w-full">
                <ParkingMatrix />
            </div>
        </div>
    </div>
  )
}

export default ParkingScreen