import React from "react";
import Navbar from "./Navbar";

function Contactus() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "90%",
        }}
      >
      <br></br>
        <h1>Call us: +91 7418529635</h1>
        <h1>Email us: revoclinic@gmail.com</h1>

        {/* Fixed iframe syntax for Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7582904877013!2d86.96712780977242!3d23.684600391212633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f7738fba10b%3A0x7907c393bcc16504!2sAsansol%20ECG%20Center!5e0!3m2!1sen!2sin!4v1741791128425!5m2!1sen!2sin"
          width="500"
          height="240"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <br />
        <br />
      </div>
    </div>
  );
}

export default Contactus;
