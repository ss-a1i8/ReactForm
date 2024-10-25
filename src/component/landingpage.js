import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRegisterClick = () => {
        navigate("/register-personal-details");
    };

    return (
        <div className="landing-container">
            <h1>Welcome to the hub</h1>
            <div className="button-container">
                <button className="login-btn" onClick={handleLoginClick}>Login</button>
                <button className="register-btn" onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
};

export default LandingPage;