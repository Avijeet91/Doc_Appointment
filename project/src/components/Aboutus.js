import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  const styles = {
    aboutUs: {
      textAlign: "center",
      padding: "50px 20px",
    //   backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    aboutHeader: {
      marginBottom: "30px",
    },
    aboutHeaderTitle: {
      color: "#2c3e50",
      fontSize: "36px",
    },
    aboutHeaderSubtitle: {
      color: "#16a085",
      fontSize: "18px",
      fontWeight: "bold",
    },
    aboutContent: {
      maxWidth: "800px",
      margin: "auto",
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    },
    aboutText: {
      marginBottom: "30px",
    },
    aboutTextTitle: {
      color: "#2980b9",
      fontSize: "24px",
      marginBottom: "10px",
    },
    aboutTextParagraph: {
      color: "#555",
      fontSize: "16px",
      lineHeight: "1.6",
    },
    aboutList: {
      listStyle: "none",
      padding: "0",
    },
    aboutListItem: {
      padding: "5px 0",
    },
  };

  return (
    <div style={styles.aboutUs}>
      <div style={styles.aboutHeader}>
        <h1 style={styles.aboutHeaderTitle}>About Our Clinic</h1>
        <p style={styles.aboutHeaderSubtitle}>Your Health, Our Priority</p>
      </div>

      <div style={styles.aboutContent}>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutTextTitle}>Who We Are</h2>
          <p style={styles.aboutTextParagraph}>
            Welcome to <strong>Revo Clinic</strong>, where we provide top-notch healthcare
            services with experienced doctors and modern facilities. Our mission
            is to offer personalized and efficient medical care to every patient.
          </p>
        </div>

        <div style={styles.aboutText}>
          <h2 style={styles.aboutTextTitle}>Our Mission</h2>
          <p style={styles.aboutTextParagraph}>
            We aim to make healthcare accessible and hassle-free by providing
            <strong> easy online appointment booking</strong> and expert medical consultation.
          </p>
        </div>

        <div style={styles.aboutText}>
          <h2 style={styles.aboutTextTitle}>Why Choose Us?</h2>
          <ul style={styles.aboutList}>
            <li style={styles.aboutListItem}>✔ Highly qualified doctors & medical staff</li>
            <li style={styles.aboutListItem}>✔ Online appointment booking & medical records</li>
            <li style={styles.aboutListItem}>✔ Affordable and transparent pricing</li>
            <li style={styles.aboutListItem}>✔ 24/7 customer support</li>
          </ul>
        </div>

        <div style={styles.aboutText}>
          <h2 style={styles.aboutTextTitle}>Contact Us</h2>
          <p style={styles.aboutTextParagraph}>📍 Address: Asansol ECG Centre</p>
          <p style={styles.aboutTextParagraph}>📞 Phone: +91 7418529635</p>
          <p style={styles.aboutTextParagraph}>📧 Email: revoclinic@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
