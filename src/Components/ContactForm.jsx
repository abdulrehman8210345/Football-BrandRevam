import React from "react";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="main-contact-form">
          <div className="contact-form-heading">
            <div className="contact-form-title">
              <h3>Get in touch</h3>
              <h3 style={{ color: "#ff083e" }}>with us</h3>
            </div>
            <div className="contact-form-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel <br /> mauris sit amet massa dictum ornare. Phasellus ac
                euismod nunc, sed <br /> fermentum dui. Duis sed libero e
              </p>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-heading">
              <h4>
                Don’t be Afraid man ! <br />
                Say Hello
                <div className="form-contact-detail">
                  <div className="phone-img">
                    <img src={phone} alt="" />
                  </div>
                  <p>+(2)111-222-333</p>
                </div>
                <div className="form-contact-detail">
                  <div className="phone-img">
                    <img src={email} alt="" />
                  </div>
                  <p>dummy@gmail.com</p>
                </div>
                <div className="form-contact-detail">
                  <div className="phone-img">
                    <img src={phone} alt="" />
                  </div>
                  <p style={{ lineHeight: "34px" }}>
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                  </p>
                </div>
              </h4>
            </div>
            <form className="form">
              <div className="form-inputs">
                <div className="name-email">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email*"
                  />
                </div>
                <div className="name-email">
                  <input
                    className="form-input"
                    type="number"
                    placeholder="Phone Number"
                  />
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Subject*"
                  />
                </div>
                <div className="message">
                  <input
                    className="form-input-message"
                    type="text"
                    placeholder="Message*"
                  />
                </div>
              </div>
              <button className="form-submit-btn">
                {" "}
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
