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

    return (
        <div className="border-2 w-full min-h-[10rem] bg-orange-200 rounded-lg shadow-sm flex hover:opacity-80 cursor-pointer">
            <div className="fixed">
                Slot Code
            </div>
            {view}
        </div>
    )
}

export default ParkingSlot