import { FieldValues, FormProvider, useForm } from "react-hook-form"
import FormInput from "../inputs/FormInput"
import { useState } from "react";

const LoginCard = () => {
  const [login, setLogin] = useState(true);
  const methods = useForm<{email: string, password: string}>();
  const { handleSubmit } = methods;
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <FormProvider {...methods}>
      <div 
        className="w-[500px] h-[500px] fixed p-5 bg-white right-[10%] top-[20%] rounded-md opacity-80 shadow-sm" >
          <header className="text-2xl text-orange-500 font-bold text-center mb-[80px]">
            {login ? 'USER LOGIN' : 'CREATE ACCOUNT'}  
          </header>
          <div className="flex flex-col gap-8">
              <FormInput name="email" type="email" placeholder="Username" />
              <FormInput name="password" type="password" placeholder="Password" />
          </div>
          <div className="flex justify-center mt-10 text-xl">
            <button 
              type="submit" 
              onClick={handleSubmit(onSubmit)}
              className="bg-orange-600 hover:opacity-80 p-3 rounded-lg w-[500px] text-white"
            >
              {login ? 'Login' : 'Sign In'}
            </button>
          </div>
          <footer className="flex flex-row justify-between mt-10">
            <label className="text-orange-600 cursor-pointer" onClick={() => setLogin(!login)}>
              {login ? 'Create new account!' : 'Already have an account? Login!'}
            </label>
          </footer>
      </div>
    </FormProvider>
  )
}

export default LoginCard