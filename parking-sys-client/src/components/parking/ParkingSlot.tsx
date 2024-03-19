import { FC } from "react"
import { IoMdAdd } from "react-icons/io";
import ParkingStates from "./types/ParkingStatesEnum";
import useParkVehicleModal from "../../hooks/useParkVehicleModal";
import IParkngSlot from "./types/IParkingSlot";

const ParkingSlot: FC<IParkngSlot & {
    onChangeStatus: (index: number, status: ParkingStates) => void, parkingIndex: number 
}> = ({onChangeStatus, parkingIndex, ...props}) => {
    const {onOpen} = useParkVehicleModal();
    const ViewForVacant = () => (
        <button 
            className="p-8 h-[20%] w-[20%] hover:bg-red-400 shadow-md rounded-full m-auto flex items-center justify-center"
            onClick={() => onOpen(parkingIndex)}
        >
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
        }[props.status];

    const colorLabel = props.status === ParkingStates.VACANT ? "bg-lime-500" : "bg-red-500"

    return (
        <div className="relative border-2 w-full min-h-[10rem] bg-orange-200 rounded-lg shadow-lg flex hover:opacity-80 cursor-pointer">
            <div className={"absolute rounded-sm h-8 w-10  m-auto " + colorLabel} >
                <p className="h-full w-full text-center">{props.code}</p>
            </div>
            {view}
        </div>
    )
}

export default ParkingSlot