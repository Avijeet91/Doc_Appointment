import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#000000",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        fontSize: "14px",
        marginTop: "30px",
      }}
    >
      <p>© {new Date().getFullYear()} Revo Clinic. All Rights Reserved.</p>
      <p>
        <Link to="./Aboutus" style={{ color: "#ffffff", textDecoration: "none", marginRight: "15px" }}>
          About Us
        </Link>
        <Link to="./Contactus" style={{ color: "#ffffff", textDecoration: "none", marginRight: "15px" }}>
          Contact
        </Link>
        <Link to="./privacy" style={{ color: "#ffffff", textDecoration: "none" }}>
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
