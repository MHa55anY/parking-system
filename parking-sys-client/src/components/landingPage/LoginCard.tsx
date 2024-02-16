import { FormProvider, useForm } from "react-hook-form"
import FormInput from "../inputs/FormInput"
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const LoginCard = () => {
  const [loginFlow, setLoginFlow] = useState(true);
  const methods = useForm<{userName: string, password: string}>();
  const { handleSubmit, reset } = methods;
  const { login, register } = useAuth();
  const onSubmit = async (data: {userName: string, password: string}) => {
    if(loginFlow) {
      await login(data);
    }
    else await register(data);
  };

  const switchFlows = () => {
    reset({
      userName: '',
      password: ''
    });
    setLoginFlow(!loginFlow)
  }
  return (
    <FormProvider {...methods}>
      <div 
        className="w-[500px] h-[500px] fixed p-5 bg-white right-[10%] top-[20%] rounded-md opacity-80 shadow-sm" >
          <header className="text-2xl text-orange-500 font-bold text-center mb-[80px]">
            {loginFlow ? 'USER LOGIN' : 'CREATE ACCOUNT'}
          </header>
          <div className="flex flex-col gap-8">
              <FormInput name="userName" type="text" placeholder="Username" required />
              <FormInput name="password" type="password" placeholder="Password" required />
          </div>
          <div className="flex justify-center mt-10 text-xl">
            <button 
              type="submit" 
              onClick={handleSubmit(onSubmit)}
              className="bg-orange-600 hover:opacity-80 p-3 rounded-lg w-[500px] text-white"
            >
              {loginFlow ? 'Login' : 'Register'}
            </button>
          </div>
          <footer className="flex flex-row justify-between mt-10">
            <label className="text-orange-600 cursor-pointer" onClick={switchFlows}>
              {loginFlow ? 'Create new account!' : 'Already have an account? Login!'}
            </label>
          </footer>
      </div>
    </FormProvider>
  )
}

export default LoginCard