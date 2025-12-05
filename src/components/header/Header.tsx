import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={styles.wrapper}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          MyLogo
        </Link>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </nav>

      {/* Auth */}
      <div style={styles.auth}>
        <Link to="/register" style={styles.link}>
          Register
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </div>
    </header>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    height: "60px",
    background: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "20px",
    fontWeight: 700,
  },
  logoLink: {
    color: "#fff",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  auth: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
