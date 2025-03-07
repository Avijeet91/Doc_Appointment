//Functional componet
//Step 1- Import React
import React from "react";
import { Navigate } from "react-router-dom";

//Step 2- Create functional component
function Adminlogout(){

            sessionStorage.removeItem('utype')
            sessionStorage.clear()
            //localStorage.removeItem('utype');
            return(<Navigate to="/"/>)
}
// Step 3- Export it to use it
export default Adminlogout;