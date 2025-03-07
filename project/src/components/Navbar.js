//Functional componet
//Step 1- Import React
import React from "react";
import {Link} from 'react-router-dom';


//Step 2- Create functional component
function Navbar(){
    let usertype=sessionStorage.getItem('utype');
    if (usertype==='ADMIN')
    {
        return(
            <div className="NavBar">
            <h1>Revo Clinic</h1>
            <nav className="nav-elements">
            <ul>
            <li><Link to="/adminafterlogin">Admin Home</Link></li>
            <li><Link to="/adddoc">Add Doctor</Link></li>
            <li><Link to="/deldoc">Del/View Doctor</Link></li>
            <li><Link to="/viewbook">View Appoinments</Link></li>
            <li><Link to="/adminlogout">Logout </Link></li>
            </ul>
        </nav><br/><br/><br/>
        </div>
        );
    }
    else if(usertype==='USER'){
    return(
        <div className="NavBar">
        <h1>Revo Clinic</h1>
        <nav className="nav-elements">
        <ul>
            <li><Link to="/userhome">User Home</Link></li>
            <li><Link to="/docbook">Book Appointment</Link></li>
            <li><Link to="/userlogout">User Logout </Link></li>
        </ul>
        </nav><br/><br/><br/>
        </div>
    )
    }
    else{
        return(
            <div className="NavBar">
            <h1>Revo Clinic</h1>
            <nav className="nav-elements">
            <ul>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to="/contactus">Contact Us</Link></a></li>
            <li><a><Link to="/adminlogin">Admin Login </Link></a></li>
            </ul>
        </nav><br/><br/><br/>
        </div>
        );
    }


}
// Step 3- Export it to use it
export default Navbar;