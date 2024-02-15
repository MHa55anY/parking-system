import { useState } from "react"
import { IoMdAdd } from "react-icons/io";

enum ParkingStates {
    VACANT = 'vacant',
    OCCUPIED = 'occupied'
}

const ParkingSlot = () => {
    const [parkingState, setParkingState] = useState<ParkingStates>(ParkingStates.VACANT);
    const ViewForVacant = () => (
        <button className="p-8 h-[20%] w-[20%] hover:bg-red-400 shadow-sm rounded-full m-auto flex items-center justify-center " >
            <div>
                <IoMdAdd className="text-[40px]"/>
            </div>
        </button>
    )
    const ViewForOccupied = () => (
        <div className="m-auto text-[50px]">🚘</div>
    )
    const view =  {
            [ParkingStates.VACANT]: <ViewForVacant/>,
            [ParkingStates.OCCUPIED]: <ViewForOccupied/>
        }[parkingState];
    const colorLabel = parkingState === ParkingStates.VACANT ? "bg-lime-300" : "bg-red-500"

    return (
        <div className="border-2 w-full min-h-[10rem] bg-orange-200 rounded-lg shadow-sm flex hover:opacity-80 cursor-pointer">
            <div className={"fixed h-10 w-10  m-auto " + colorLabel} >
                <p className="h-full w-full text-center">A-1</p>
            </div>
            {view}
        </div>
    )
}

export default ParkingSlot