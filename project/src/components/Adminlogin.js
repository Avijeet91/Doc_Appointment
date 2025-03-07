
//Step 1-For binding data
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Adminlogin(){
    const [adminid,setAdminId]=useState("");
    const [adminpass,setAdminPass]=useState("");
    const [msg,setMsg]=useState("");

    const navigate=useNavigate();

    const executeSubmit=(evt)=>{
        evt.preventDefault();

        console.log(`ADMIN USER ID: ${adminid}`);
        console.log(`PASS: ${adminpass}`);

        if(adminid==='admin' && adminpass==='pass')
        {
            console.log('VALID');
            sessionStorage.setItem("utype","ADMIN");
            localStorage.setItem("utype","ADMIN");
            navigate("/adminafterlogin");
        }
        else{
            setMsg('INVALID UID OR PASSWORD');
            setAdminId('');
            setAdminPass(''); 
        }
    }
    return(
        <div>
        <Navbar/>
            {/*<h3 style={{color: 'red'}}>Admin Login</h3>*/}
            <h4 style={{color: 'blue'}}>{msg}</h4>
            <form onSubmit={executeSubmit} className="form-element">
            {/*Add valuen and onchange*/}
            <h3 style={{color: 'red'}}>Admin Login</h3>
                <input type='text' placeholder="Enter user ID" value={adminid} onChange={(e)=> setAdminId(e.target.value)}/><br/><br/>
                <input type='password' placeholder="Enter Password" value={adminpass} onChange={(e)=> setAdminPass(e.target.value)}/><br/><br/>
                <input type='submit'/>
                <br/><br/><br/><br/>
            </form>
        </div>
    )
}
// Step 3- Export it to use it
export default Adminlogin;