import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let userType = sessionStorage.getItem("utype");

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Revo Clinic</h1>
        <nav>
          <ul className="nav-links">
            {userType === "ADMIN" ? (
              <>
                <li><Link to="/adminafterlogin">Dashboard</Link></li>
                <li><Link to="/adddoc">Add Doctor</Link></li>
                <li><Link to="/deldoc">Manage Doctors</Link></li>
                <li><Link to="/viewbook">Appointments</Link></li>
                <li className="logout"><Link to="/adminlogout">Logout</Link></li>
              </>
            ) : userType === "USER" ? (
              <>
                <li><Link to="/userhome">Home</Link></li>
                <li><Link to="/docbook">Book Appointment</Link></li>
                <li className="logout"><Link to="/userlogout">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li className="login"><Link to="/adminlogin">Admin Login</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
