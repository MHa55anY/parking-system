import { useLocation } from "react-router-dom";
import LoginCard from "./LoginCard"
import WelcomeText from "./WelcomeText"
import { useEffect } from "react";
import toast from "react-hot-toast";

const LandingPage = () => {
  const location = useLocation();
  const isFallback = location.state

  useEffect(() =>{ 
    console.log(isFallback)
    if(isFallback)
      toast.error("You are not allowed to view this resource, please login!")
    window.history.replaceState({}, '/')
  },[isFallback])

  return (
    <div className="h-full">
        <div className="absolute inset-0 -z-10" style={{backgroundImage: 'url(/images/garage_image.jpg)', backgroundSize: 'cover', filter: 'blur(10px)'}} />
        <div className="w-full h-screen z-1 relative">
            <WelcomeText/>
            <LoginCard />
        </div>
        <footer className="absolute font-bold bottom-0 p-4 text-center text-white w-[100%]">
          Designed By: Hassan Yusuf
        </footer>
    </div>
  )
}

export default LandingPage