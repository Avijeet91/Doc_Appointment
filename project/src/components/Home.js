import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import doctor1 from "./doctor1.jpg";

function Home() {
  const bgChange = () => {
    sessionStorage.setItem("utype", "USER");
    localStorage.setItem("utype", "USER");
  };

  // Doctor details with imported images
  const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiologist", img: doctor1 },
    { name: "Dr. Emily Smith", specialty: "Dermatologist", img: doctor1 },
    { name: "Dr. Michael Brown", specialty: "Orthopedic", img: doctor1 },
    { name: "Dr. Sarah Johnson", specialty: "Pediatrician", img: doctor1 },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          width: "90%",
          margin: "50px auto",
        }}
      >
        <h1 style={{ fontSize: "28px", color: "#000000", marginBottom: "20px" }}>
          Welcome to Revo Clinic!!<br /> Your health is our priority
        </h1>

        <button>
          <Link
            to="/userlogin"
            style={{ textDecoration: "none", color: "white", display: "inline-block" }}
          >
            BOOK APPOINTMENT
          </Link>
        </button>
      </div>

      {/* Doctor showcase section */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "30px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            padding: "10px",
            width: "90%",
            justifyContent: "center",
          }}
        >
          {/* Doctor Cards */}
          {doctors.map((doctor, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1a3d",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
                width: "180px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
              }}
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>
                {doctor.name}
              </p>
              <p style={{ fontSize: "12px", color: "#ccc", margin: "0" }}>
                {doctor.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer
        style={{
          width: "100%",
          backgroundColor: "#1a1a3d",
          color: "white",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "14px",
          marginTop: "30px", // Adds space between the doctors section and the footer
        }}
      >
        <p>© {new Date().getFullYear()} Revo Clinic. All Rights Reserved.</p>
        <p>
          <Link to="/about" style={{ color: "#ffffff", textDecoration: "none", marginRight: "15px" }}>
            About Us
          </Link>
          <Link to="/contact" style={{ color: "#ffffff", textDecoration: "none", marginRight: "15px" }}>
            Contact
          </Link>
          <Link to="/privacy" style={{ color: "#ffffff", textDecoration: "none" }}>
            Privacy Policy
          </Link>
        </p>
      </footer> */}
    </>
  );
}

export default Home;
