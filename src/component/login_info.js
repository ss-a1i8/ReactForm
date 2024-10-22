import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register_login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Phone Number:", phoneNumber);
        console.log("Gender:", gender);
        console.log("Date of Birth:", dob);
        navigate("/signup-bussiness-info");
    };

    return (
        <div className="login-container">
            <h1>Register - Login Info</h1>
            <form onSubmit={handleRegister}>
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
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    type="date"
                    placeholder="Enter date of birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    );
};

export default Register_login;