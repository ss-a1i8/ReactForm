import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import LandingPage from "./component/landingpage";
import Login from "./component/login"; 
import Register_personal from "./component/personal_details";
import Register_login from "./component/login_info";
import Register_bussiness from "./component/bussiness_info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register-personal-details" element={<Register_personal />} />
        <Route path="/register-login-info" element={<Register_login/>} />
        <Route path="/register-bussiness-info" element={<Register_bussiness/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;