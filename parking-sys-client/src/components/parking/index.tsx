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
      <div className="h-full flex gap-2 p-4">
        <div className="card w-[20%]">
          <div className="flex justify-between">
            <h2 className="card-heading">Parking Availability</h2>
            <button className="hover:opacity-80 bg-slate-300 p-1">
              Add more
            </button>
          </div>

          <ParkingMatrix />
        </div>
        <div className="card">
          <h2 className="card-heading">History</h2>
          Slot reservation history goes here!
        </div>
        <div className="card-heading">Statistics</div>
      </div>
    </div>
  );
};

export default ParkingScreen;
