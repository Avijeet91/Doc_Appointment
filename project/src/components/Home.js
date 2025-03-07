//Functional componet
//Step 1- Import React
import React from "react";
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


//Step 2- Create functional component
function Home(){
    const bgChange=()=>{
        sessionStorage.setItem("utype","USER");
        localStorage.setItem("utype","USER");
    }
    
    return(
        <>
        <Navbar/>
           <div>
            <h1>Welcome to Revo Clinic!!<br/> Yours health is our priority</h1>
            <button><a> <Link to="/userlogin">BOOK APPOINTMENT</Link></a></button>
        </div>    
        </>
    )
}
//Step 3- Export it to use it
export default Home;