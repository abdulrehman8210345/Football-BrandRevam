import React from "react";
import logo from "../assets/logo.png";
import facebooklogo from "../assets/facebook.png";
import twitterlogo from "../assets/twitter.png";
import instalogo from "../assets/insta.png";
import inbox from "../assets/inbox.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="main-footer">
          <div className="footer-logo">
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Aliquam et magna ut arcu rutrum <br /> dignissim. Aliquam erat
              volutpat. Nunc lobortis <br /> pulvinar nulla in tempus. Phasellus
              nibh elit, lacinia <br /> nec euismod non, vehicula at lacus
            </p>
          </div>
          <div className="footer-usefullinks">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li>Home</li>
              <li>Services</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="playlastmen">
            <h3>Play Last Man</h3>
            <div className="playlastmen-links">
              <p>Pick Team</p>
              <p>Join a Competition</p>
              <p>Create a Competition</p>
            </div>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <div className="social-links">
              <div className="social-logo">
                <img src={facebooklogo} alt="" />
              </div>
              <div className="social-logo">
                <img src={twitterlogo} alt="" />
              </div>
              <div className="social-logo">
                <img src={instalogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">© 2024 Copyright. All rights reserved </p>
      </div>
      <div className="footer-inbox">
        <img src={inbox} alt="" />
      </div>
    </section>
  );
};

export default Footer;
