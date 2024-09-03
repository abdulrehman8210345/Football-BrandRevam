import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-menu">
            <ul className="nav-links">
              <li>Home</li>
              <li>Service</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
            <div className="navbar-btn">
              <button className="signup-btn">
                <span>Sign up</span>
              </button>
              <button className="login-btn">
                <span>Login</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
