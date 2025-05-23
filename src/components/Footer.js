import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "30px 40px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "200px",
    margin: "10px",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#f0c040",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    display: "block",
    margin: "5px 0",
    fontSize: "14px",
  };

  const iconStyle = {
    fontSize: "18px",
    margin: "0 8px",
    color: "#f0c040",
    textDecoration: "none",
  };

  const bottomText = {
    marginTop: "20px",
    fontSize: "13px",
    color: "#aaa",
    width: "100%",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      {/* Left Section */}
      <div style={sectionStyle}>
        <div style={logoStyle}>MyWebsite</div>
        <p style={{ fontSize: "14px", color: "#aaa" }}>
          Making the web better, faster and smarter.
        </p>
      </div>

      {/* Center Section */}
      <div style={sectionStyle}>
        <h4 style={{ color: "#f0c040" }}>Links</h4>
        <a href="#" style={linkStyle}>
          Home
        </a>
        <a href="#" style={linkStyle}>
          About
        </a>
        <a href="#" style={linkStyle}>
          Services
        </a>
        <a href="#" style={linkStyle}>
          Contact
        </a>
      </div>

      {/* Right Section - Social */}
      <div style={sectionStyle}>
        <h4 style={{ color: "#f0c040" }}>Follow Us</h4>
        <div>
          <a href="#" style={iconStyle}>
            🌐
          </a>
          <a href="#" style={iconStyle}>
            📘
          </a>
          <a href="#" style={iconStyle}>
            🐦
          </a>
          <a href="#" style={iconStyle}>
            📸
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div style={bottomText}>
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
