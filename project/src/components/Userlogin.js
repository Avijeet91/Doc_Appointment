// FUNCTIONAL COMPONENT
import React, { useState } from "react";
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [useremail, setUserEmail] = useState("");
    const [userpass, setUserPass] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const executeSubmit = (evt) => {
        evt.preventDefault();

        console.log(`USER Email: ${useremail}`);
        console.log(`PASS: ${userpass}`);

        const loginobj = {
            loginemail: useremail,
            loginpass: userpass
        };

        // COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/userlogin', loginobj)
            .then(response1 => {
                console.log(response1.data);
                sessionStorage.setItem("utype", "USER");
                sessionStorage.setItem("username", response1.data[0].empname);
                localStorage.setItem("loggedInUser", "demo");

                navigate("/Userafterlogin");
            })
            .catch(err => {
                setMsg('INVALID UID OR PASSWORD');
            });

        setUserEmail('');
        setUserPass('');
    };

    return (
        <div>
            <Navbar />

            <div
  style={{
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "90%",
  }}
>
            <form style={{width:"400px",height:"250px"}} onSubmit={executeSubmit} className="form-element">
                <h3 style={{ color: 'blue',textAlign:"center" }}>USER LOGIN</h3>
                <h4 style={{ color: 'red' }}>{msg}</h4>

                <input type="email" value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter USER ID" required />
                <br /><br />

                <input type="password" value={userpass}
                    onChange={(e) => setUserPass(e.target.value)}
                    placeholder="Enter PASSWORD" required />
                <br /><br />

                {/* Submit as a button */}
                <button type="submit">Login</button>
            </form>

            <h3>New user?</h3>
            <Link to="/userreg">
                <button >Register</button>
            </Link>

            <br></br><br></br><br></br><br></br><br></br><br></br>
            
            

            </div>
        </div>
    );
}

export default Login;
