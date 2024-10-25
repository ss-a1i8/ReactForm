import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register_personal = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("First Name:", fname);
        console.log("Last Name:", lname);
        console.log("Gender:", gender);
        console.log("Date of Birth:", dob);
        navigate("/register-login-info");
    };

    return (
        <div className="login-container">
            <h1>Register - Personal Details</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter first name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                />
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select Gender</option>
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
            <div className="link-container">
                <p>
                    Already have an account?
                    <Link to="/login" className="link"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register_personal;