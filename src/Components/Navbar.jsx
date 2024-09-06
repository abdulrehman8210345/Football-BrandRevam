import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar">
          <div className="nvabr-logo-div">
            <div className="navbar-logo" onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="hamburger">
            <GiHamburgerMenu />
          </div>
          <div className="navbar-menu">
            <ul className="nav-links">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/services")}>Service</li>
              <li>FAQ</li>
              <li onClick={() => navigate("/contact")}>Contact</li>
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
