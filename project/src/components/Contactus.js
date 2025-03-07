//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Contactus() {
    return (
        <div>
            <Navbar />
            <h1> Call us: +91 7418529635</h1>
            <h1> Email us: revoclinic@gmail.com</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.885230976291!2d86.94870451498069!3d23.71579218460641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f28112dc85f%3A0xc2814fdb4c367784!2sAsansol%20Engineering%20College%20(AEC)!5e0!3m2!1sen!2sin!4v1676523178240!5m2!1sen!2sin" width="1600" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <br /><br />
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Contactus;