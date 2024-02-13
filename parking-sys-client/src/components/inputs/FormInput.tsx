interface FormInputProps {
    //write props
}

const FormInput = () => {
  return (
    <div className="w-full flex items-center">
        <label className="w-[30%] text-[2rem]">User</label>
        <input type="text" placeholder="Write any silly username" className="w-[70%] rounded-md h-[50px]"/>
    </div>
  )
}

export default FormInput