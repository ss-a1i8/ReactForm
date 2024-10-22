import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register_bussiness = () => {
    const [bussinesstype, setType] = useState("");
    const [bussinessreg, setReg] = useState("");
    const [bussinessname, setName] = useState("");
    const [bussinessregnumbr, setRegnumbr] = useState("");
    const [bussinessabout, setAbout] = useState("");
    const [bussinesstreatment, setTreatment] = useState("");
    const [bussinessbased, setBased] = useState("");
    const [bussinessadress, setAdress] = useState("");
    const [bussinesspostcode, setPostcode] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Bussiness Type : ", bussinesstype);
        console.log("Bussiness Registered : ", bussinessreg);
        console.log("Bussiness Name : ", bussinessname);
        console.log("Bussiness Reg No. : ", bussinessregnumbr);
        console.log("Bussiness About : ", bussinessabout);
        console.log("Bussiness Treatment : ", bussinesstreatment);
        console.log("Bussiness Based : ", bussinessbased);
        console.log("Bussiness Address : ", bussinessadress);
        console.log("Bussiness Postcode : ", bussinesspostcode);
        navigate("/");
        alert("Registration Sucessfull. Please Log in.");

    };

    return (
        <div className="login-container">
            <h1>Register - Bussiness Details</h1>
            <form onSubmit={handleRegister}>
                <select
                value={bussinesstype}
                onChange={(e) => setType(e.target.value)}
                required
                >
                <option value="">Select Type</option>
                <option value="Hair and nails salon">Hair & Nails Salon</option>
                <option value="Mobile beautition">Mobile Beautition</option>
                <option value="Barber shop">Barber Shop</option>
                <option value="Wellness and spa">Wellness & Spa</option>
                <option value="Beauty clinic">Beauty Clinic</option>
                <option value="Products only">Products Only</option>
                </select>
                <select
                value={bussinessreg}
                onChange={(e) => setReg(e.target.value)}
                required
                >
                <option value="">Select If Bussiness Is Registered</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter Business Name"
                    value={bussinessname}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Business Reg No."
                    value={bussinessregnumbr}
                    onChange={(e) => setRegnumbr(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="About Bussiness"
                    value={bussinessabout}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                />
                <select
                value={bussinesstreatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
                >
                <option value="">Select Treatment Bussiness Proposes</option>
                <option value="Nails">Nails</option>
                <option value="Hair">Hair</option>
                <option value="Manicure">Manicure</option>
                <option value="Pedicure">Pedicure</option>
                <option value="Feet">Feet</option>
                <option value="Feet Nails">Feet Nails</option>
                </select>
                <select
                value={bussinessbased}
                onChange={(e) => setBased(e.target.value)}
                required
                >
                <option value="">Select Where Bussiness Is Based</option>
                <option value="London">London</option>
                <option value="England">England</option>
                <option value="Uk">Uk</option>
                <option value="Scotland">Scotland</option>
                <option value="Ireland">Ireland</option>
                <option value="Pakistan">Pakistan</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter Bussiness Adress"
                    value={bussinessadress}
                    onChange={(e) => setAdress(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Bussiness Postcode"
                    value={bussinesspostcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    required
                /><br></br><br></br>
                <label>Upload ID / Proof of Adress</label>
                <input
                    type="file"
                    required
                /><br></br><br></br><br></br>
                <label>Upload Beauty Certificate</label>
                <input
                    type="file"
                    required
                /><br></br><br></br><br></br>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    );
};

export default Register_bussiness;