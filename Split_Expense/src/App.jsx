import {Routes,Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Dashbord from "./components/Dashbord";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
