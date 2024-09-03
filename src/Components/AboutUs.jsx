import React from "react";
import aboutBg from "../assets/About-bg.png";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="main-about">
          <h3>About us</h3>
          <p>
            The idea for our service was born from personal experience. Being
            involved in sporting clubs here in Dublin,
            <br /> fundraising is always tough to think of, and even harder to
            run. While the competition is a great way to generate funds, <br />{" "}
            the backend running always took up lots of time of volunteers in the
            club. We thought there must be a better way to <br /> automate this
            process for people, and make it more accessible - And Play Last Man
            was born.
          </p>
          <div className="about-bg">
            <img src={aboutBg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
