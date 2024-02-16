import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import { BrowserRouter  } from "react-router-dom";

function App() {
  console.log("TRIGGERED")
  return (
    <BrowserRouter>
      <Toaster />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
