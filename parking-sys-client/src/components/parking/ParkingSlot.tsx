import { FC, useState } from "react"
import { IoMdAdd } from "react-icons/io";

enum ParkingStates {
    VACANT = 'vacant',
    OCCUPIED = 'occupied'
}

  // PARKING STRRUCTURE
  // {
  //   8936dgjs: {
    //   userName: string
    //  phoneNumber: number
  //     model?: string
  //     numberPlate: string
  //     entryTime: timestamp
  //     isPaymentDone: boolean
  //   }
  // }

interface ParkingSlotProps {
    // slotCode: string;
    // userName: string;
    // phoneNumber: number;
    // model?: string;
    // numberPlate: string;
    // entryTime: Date;
    // isPaymentDone: boolean;
    onClick?: () => void
}

const ParkingSlot: FC<ParkingSlotProps> = ({
        onClick
    }) => {
    const [parkingState, setParkingState] = useState<ParkingStates>(ParkingStates.VACANT);
    const ViewForVacant = () => (
        <button 
            className="p-8 h-[20%] w-[20%] hover:bg-red-400 shadow-md rounded-full m-auto flex items-center justify-center " 
            onClick={onClick}
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
        }[parkingState];

    const colorLabel = parkingState === ParkingStates.VACANT ? "bg-lime-500" : "bg-red-500"

    return (
        <div className="border-2 w-full min-h-[10rem] bg-orange-200 rounded-lg shadow-lg flex hover:opacity-80 cursor-pointer">
            <div className={"fixed rounded-sm h-8 w-10  m-auto " + colorLabel} >
                <p className="h-full w-full text-center">A-1</p>
            </div>
            {view}
        </div>
    )
}

export default ParkingSlot