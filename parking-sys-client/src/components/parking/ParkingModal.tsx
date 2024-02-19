import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { BsCardText } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineDirectionsCar } from "react-icons/md";
import FormInput from "../inputs/FormInput";
import Modal from "../modal/Modal";
import useParkVehicleModal, { ParkVehicleModalStore } from "../../hooks/useParkVehicleModal";
import { FC } from "react";
import ParkingStates from "./types/ParkingStatesEnum";

interface IParkingModalProps {

}

const ParkingModal: FC<IParkingModalProps> = () => {
    const methods = useForm();
    const {handleSubmit} = methods;
    const {isOpen, onClose, viewType} = useParkVehicleModal();
    const VacantView = (
      <FormProvider {...methods}>
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between gap-2">
                <FormInput name='driverName' type="text" placeholder="Enter Driver Name" icon={FaRegUser}/>
                <FormInput name='phoneNumber' type="text" placeholder="Enter Driver Phone No." icon={MdOutlinePhone}/>
            </div>
            <div className="flex justify-between gap-2">
                <FormInput name='vehicleNumber' type="text" placeholder="Enter Vehicle Number" icon={BsCardText} />
                <FormInput name='vehicleModel' type="text" placeholder="Enter Model (optional)" icon={MdOutlineDirectionsCar}/>
            </div>
        </div>
      </FormProvider>
    )
    const OccupiedView = (
        <div className="w-full flex flex-col gap-2">
            {/* <div className="flex justify-between gap-2">
                <FormInput name='driverName' type="text" placeholder="Enter Driver Name" icon={FaRegUser}/>
                <FormInput name='phoneNumber' type="text" placeholder="Enter Driver Phone No." icon={MdOutlinePhone}/>
            </div>
            <div className="flex justify-between gap-2">
                <FormInput name='vehicleNumber' type="text" placeholder="Enter Vehicle Number" icon={BsCardText} />
                <FormInput name='vehicleModel' type="text" placeholder="Enter Model (optional)" icon={MdOutlineDirectionsCar}/>
            </div> */}
            <div className="">test</div>
        </div>
    )
    const modalBody = {
      [ParkingStates.OCCUPIED]: OccupiedView,
      [ParkingStates.VACANT]: VacantView
    }[viewType];
    const onSubmit = (data: FieldValues) => console.log(data)
    const Footer = () => (
      <div className="mt-7 w-full">
        <button 
            type="submit" 
            onClick={handleSubmit(onSubmit)}
            className="bg-orange-400 hover:opacity-80 p-3 rounded-lg w-full text-white"
            >
            Submit
        </button>
      </div>
    )
  return (
    <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        title="Enter Details"
        body={modalBody}
        footer={<Footer />}
    />
  )
}

export default ParkingModal