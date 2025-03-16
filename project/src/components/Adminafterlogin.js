import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
function Adminafterlogin(){
    let usertype=sessionStorage.getItem('utype');
    if (usertype==null)
    {
        return(<Navigate to="/adminlogin"/>);
    }
    else
    {
    return(
        <div>
        <Navbar/>
            
        <h1 style={{ 
            textAlign: "center", 
            marginTop: "20px" 
        }}>
            Welcome Admin!!
        </h1>
        </div>
    )
    }
}

export default Adminafterlogin;