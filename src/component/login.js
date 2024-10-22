import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Passwords do not match. Please try again.");
            return;
        } else {
            alert("Welcome!");
        }

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Re-Password:", password2);
        console.log("Phone Number:", phoneNumber);
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Re-enter password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div className="link-container">
                <p>
                    Don't have an account?
                    <Link to="/signup-personal-details" className="link"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;