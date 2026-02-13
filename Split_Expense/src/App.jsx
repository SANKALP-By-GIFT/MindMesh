import {Routes,Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Dashbord from "./components/Dashbord";
import AddParticipants from "./components/AddParticipants";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
        <Route path="/addparticipants" element={<AddParticipants/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
