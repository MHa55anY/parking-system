import Navbar from "./Navbar";
import ParkingMatrix from "./ParkingMatrix";

const ParkingScreen = () => {
  return (
    <div className="bg-red-50 min-h-screen">
      {/* NAVBAR */}
      <Navbar />
      {/* HEADER */}
      {/* <div className="w-full text-2xl text-center font-bold p-8">
        Play around with the parking matrix!
      </div> */}
      {/* CONTENT */}
      <div className="h-full flex">
        <div className="p-1 w-[40%]">
          <h2 className="dashboard-labels">Parking Availability</h2>
          <ParkingMatrix />
        </div>
        <div className="dashboard-labels">History</div>
        <div className="dashboard-labels">Statistics</div>
      </div>
    </div>
  );
};

export default ParkingScreen;
