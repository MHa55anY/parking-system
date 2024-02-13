import FormInput from "../inputs/FormInput"

const LoginCard = () => {
  return (
    <div className="w-[500px] h-[500px] fixed p-5 bg-slate-300 right-[10%] top-[20%] rounded-md opacity-80 shadow-sm">
        <header className="text-2xl font-bold text-center mb-[100px]">
            Login or Sign Up
        </header>
        <div className="flex flex-col gap-2">
            <FormInput />
            <FormInput />
        </div>
    </div>
  )
}

export default LoginCard