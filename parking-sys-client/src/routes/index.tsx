import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import ParkingScreen from "../components/parking/ParkingScreen";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/parking" element={<ParkingScreen/>} />
        </Routes>
    </Router>
)

export default AppRoutes;