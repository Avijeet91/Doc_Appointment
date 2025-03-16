import React, { useState } from "react";
import Navbar from './Navbar';
import axios from 'axios';
import "./Reg.css"

function Reg() {
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const empobj = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        };

        axios.post('http://localhost:5000/user/userreg', empobj)
            .then(res => {
                setMessage('REGISTRATION SUCCESSFUL');

                // Clear inputs after submission
                setEmpName('');
                setEmpEmail('');
                setEmpmobile('');
                setEmpDOB('');
                setEmpPass('');
                setEmpGender('');
                setEmpCountry('');
                setEmpAddress('');
            });
    };

    return (
        <div>
            <Navbar />
            <div className="form-container">
                <h4 style={{ color: "brown", textAlign: "center" }}>{msg}</h4>
                <form onSubmit={handleSubmit} className="form-element">
                    <h3 style={{ textAlign: "center" }}>REGISTRATION FORM</h3>

                    <input type="text" value={ename} onChange={(e) => setEmpName(e.target.value)} placeholder="Enter Name" required />
                    <input type="email" value={eemail} onChange={(e) => setEmpEmail(e.target.value)} placeholder="Enter Email" required />
                    <input type="number" value={emobile} onChange={(e) => setEmpmobile(e.target.value)} placeholder="Enter Mobile No" required />
                    <br></br>
                    <label>DOB:</label>
                    <input type="date" value={edob} onChange={(e) => setEmpDOB(e.target.value)} required />

                    <input type="password" value={epass} onChange={(e) => setEmpPass(e.target.value)} placeholder="Enter Password" required />

                    <label>Gender:</label>
                    <div className="gender-container">
                        <input type="radio" name="gender" value="MALE" checked={egender === 'MALE'} onChange={(e) => setEmpGender(e.target.value)} />
                        <label>Male</label>

                        <input type="radio" name="gender" value="FEMALE" checked={egender === 'FEMALE'} onChange={(e) => setEmpGender(e.target.value)} />
                        <label>Female</label>
                    </div>

                    <label>Select Country:</label>
                    <select value={ecountry} onChange={(e) => setEmpCountry(e.target.value)}>
                        <option value="AF">Afghanistan</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                    </select>

                    <label>Address:</label>
                    <textarea value={eaddress} onChange={(e) => setEmpAddress(e.target.value)} rows="3"></textarea>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Reg;
