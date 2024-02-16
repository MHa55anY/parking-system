import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import ParkingScreen from "../components/parking/ParkingScreen";
import useAuth from "../hooks/useAuth";

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    console.log("triggered")
    return(
        <Routes>
            <Route
                path="/"
                element={isAuthenticated() ? <Navigate to="/parking" /> : <LandingPage />}
            />
            <Route
                path="/parking"
                element={isAuthenticated() ? <ParkingScreen /> : <Navigate to="/" state={{isFallback: true}}/>}
            />
        </Routes>
    )
}

export default AppRoutes;