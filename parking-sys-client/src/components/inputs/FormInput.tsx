import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps {
    //write props
    name: string;
    type: 'email' | "password" | "text" | "number";
    label: string;
    placeholder?: string;
}

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  label,
  placeholder
}) => {
  const { register } = useFormContext();
  return (
    <div className="w-full flex items-center text-amber-500">
        {/* <label className="w-[30%] text-[1.5rem]">{label}</label> */}
        <input 
          {...register(name)} 
          type={type} 
          placeholder={placeholder} 
          className="w-full text-white rounded-full h-[50px] p-2 focus:placeholder:opacity-0 bg-gradient-to-r from-orange-500 to-orange-400
                   placeholder:text-white pl-8"
        />
    </div>
  )
}

export default FormInput