import React from "react";
import playbtn from "../assets/playbtn.png";

const HeroContent = () => {
  return (
    <section className="hero-content-section">
      <div className="container">
        <div className="main-hero-content">
          <h3>
            PLAY
            <br />
            <span>LAST MAN</span>
          </h3>
          <p>
            The EASIEST way to play <br />
            Last Man Standing
          </p>
          <button className="play-btn">
            <div className="play-btn-div">
              <p>Play Now</p>
              <div className="play-btn-img">
                <img src={playbtn} alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
