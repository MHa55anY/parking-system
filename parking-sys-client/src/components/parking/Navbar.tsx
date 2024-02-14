import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div 
    className="w-full p-4 bg-gradient-to-r from-orange-400 to-orange-500 h-[100px] text-white flex justify-between items-center"
>
        <h1 className="font-bold text-center text-2xl">WELCOME TO YOUR PARKING!😀</h1>
        <button className="w-[10%] rounded-full border-red-300 border-2 flex justify-between items-center p-4" onClick={() => null}>
            <FaRegUser />
            <span className="flex-1 text-white">Logout</span>
        </button>
    </div>
  )
}

export default Navbar