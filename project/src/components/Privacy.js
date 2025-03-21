import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    privacyPolicy: {
      textAlign: "center",
      padding: "50px 20px",
    //   backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    policyHeader: {
      marginBottom: "30px",
    },
    policyHeaderTitle: {
      color: "#2c3e50",
      fontSize: "36px",
    },
    policyHeaderSubtitle: {
      color: "#16a085",
      fontSize: "18px",
      fontWeight: "bold",
    },
    policyContent: {
      maxWidth: "800px",
      margin: "auto",
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    },
    policySection: {
      marginBottom: "30px",
    },
    policySectionTitle: {
      color: "#2980b9",
      fontSize: "24px",
      marginBottom: "10px",
    },
    policyText: {
      color: "#555",
      fontSize: "16px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.privacyPolicy}>
      <div style={styles.policyHeader}>
        <h1 style={styles.policyHeaderTitle}>Privacy Policy</h1>
        <p style={styles.policyHeaderSubtitle}>
          Your Data Security is Our Top Priority
        </p>
      </div>

      <div style={styles.policyContent}>
        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>1. Introduction</h2>
          <p style={styles.policyText}>
            Welcome to <strong>Revo Clinic</strong>. We are committed to
            protecting your privacy and ensuring the security of your personal
            information when you use our doctor appointment management services.
          </p>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>2. Information We Collect</h2>
          <p style={styles.policyText}>
            We collect and store the following types of information:
          </p>
          <ul style={styles.policyText}>
            <li>✔ Personal details (name, phone number, email, etc.)</li>
            <li>✔ Medical history and appointment records</li>
            <li>✔ Payment and billing information (if applicable)</li>
            <li>✔ Any other data you provide through our platform</li>
          </ul>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>3. How We Use Your Information</h2>
          <p style={styles.policyText}>
            The collected data is used to:
          </p>
          <ul style={styles.policyText}>
            <li>✔ Schedule and manage your appointments</li>
            <li>✔ Improve our services and user experience</li>
            <li>✔ Ensure secure communication with doctors</li>
            <li>✔ Comply with legal and regulatory requirements</li>
          </ul>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>4. Data Security</h2>
          <p style={styles.policyText}>
            We use industry-standard security measures to protect your data from unauthorized access, loss, or misuse.
          </p>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>5. Third-Party Services</h2>
          <p style={styles.policyText}>
            We do not sell or share your personal information with third parties, except when necessary for service fulfillment (e.g., payment gateways, healthcare providers).
          </p>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>6. Your Rights</h2>
          <p style={styles.policyText}>
            You have the right to access, modify, or delete your personal data. If you have any concerns, contact us at **revoclinic@gmail.com**.
          </p>
        </div>

        <div style={styles.policySection}>
          <h2 style={styles.policySectionTitle}>7. Changes to This Policy</h2>
          <p style={styles.policyText}>
            We may update this Privacy Policy from time to time. Please check back periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
