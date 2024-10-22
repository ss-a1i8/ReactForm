import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import Login from "./component/login"; 
import Register_personal from "./component/personal_details";
import Register_login from "./component/login_info";
import Register_bussiness from "./component/bussiness_info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup-personal-details" element={<Register_personal />} />
        <Route path="/signup-login-info" element={<Register_login/>} />
        <Route path="/signup-bussiness-info" element={<Register_bussiness/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;