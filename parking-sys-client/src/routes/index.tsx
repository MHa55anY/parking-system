import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import ParkingScreen from "../components/parking/ParkingScreen";
import useAuth from "../hooks/useAuth";
import { Toaster } from "react-hot-toast";

const AppRoutes = () => {
    const { isAuthenticated, login, logout } = useAuth();
    return(
        <>
            <Toaster />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/parking" element={<ParkingScreen />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes;