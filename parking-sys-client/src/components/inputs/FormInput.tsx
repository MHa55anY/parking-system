import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

interface FormInputProps {
    //write props
    name: string;
    type: 'email' | "password" | "text" | "number";
    placeholder?: string;
    icon?: IconType;

}

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  icon: Icon
}) => {
  const { register } = useFormContext();
  return (
    <div className="w-full flex items-center text-amber-500 relative">
        <div className="absolute inset-y-0 left-1 flex items-center pl-2 font-bold">
          {Icon && <Icon size={20} color="white"/>}
        </div>
        <input 
          {...register(name)} 
          type={type} 
          placeholder={placeholder} 
          className={`w-full text-white rounded-full h-[50px] p-2 focus:placeholder:opacity-0 bg-gradient-to-r from-orange-500 to-orange-400 
                  placeholder:text-white ${Icon ? 'pl-10' : 'pl-8'}`}
        />
    </div>
  )
}

export default FormInput