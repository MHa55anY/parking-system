import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

interface FormInputProps {
    //write props
    name: string;
    type: 'email' | "password" | "text" | "number";
    placeholder?: string;
    icon?: IconType;
    required?: boolean

}

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  icon: Icon,
  required
}) => {
  const { register, formState: { errors } } = useFormContext();
  let validation = undefined;
  if(required) {
    validation = {
      required: 'Field is required',
      minLength: {
        value: 1,
        message: 'Field is required'
      },
    }
  }
  if(type === 'email') {
    validation = {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }
  }
  if( type === 'password') {
    validation = {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters long'
        },
        maxLength: {
          value: 20,
          message: 'Password cannot exceed 20 characters'
        }
    }
  }
  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex items-center text-amber-500 relative">
          <div className="absolute inset-y-0 left-1 flex items-center pl-2 font-bold">
            {Icon && <Icon size={20} color="white"/>}
          </div>
          <input 
            {...register(name, validation)}
            type={type} 
            placeholder={placeholder} 
            className={`w-full text-white rounded-full h-[50px] p-2 focus:placeholder:opacity-0 bg-gradient-to-r from-orange-500 to-orange-400 
                    placeholder:text-white ${Icon ? 'pl-10' : 'pl-8'}`}
          />
      </div>
      {errors?.[name] && <p className="text-red-500 mt-1 pl-3">{errors?.[name]?.message as string}</p>}
    </div>
    
  )
}

export default FormInput