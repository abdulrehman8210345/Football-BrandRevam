import React from "react";
import play1 from "../assets/play1.jfif";
import play2 from "../assets/play2.jfif";
import play3 from "../assets/play3.jfif";
import playdiv1 from "../assets/playdiv1.png";
import playdiv2 from "../assets/playdiv3.png";
import playdiv3 from "../assets/playdiv2.png";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const navigate = useNavigate();
  const play = [
    {
      id: 1,
      img: play1,
      title: "",
    },
    {
      id: 2,
      img: play2,
      title: "Join a Competition",
    },
    {
      id: 3,
      img: play3,
      title: "Pick Team",
    },
  ];
  return (
    <section className="play-section">
      <div className="container">
        <div className="main-play">
          <h2 class="stroked">
            Play Last Man
          </h2>
          <h2>Play Last Man</h2>
          <div className="play-divs">
            <div className="play-div1">
              <div className="play-content">
                <h5>Create a Competition</h5>
              </div>
              <div className="play-overlay">
                <div className="play-overlay-inner">
                  <div className="play1-hover-img">
                    <img src={playdiv1} alt="" />
                  </div>
                  <div>
                    <h5>Create a Competition</h5>
                    <p>Create competition for your own organisation</p>
                  </div>

                  <div className="join-btn-div">
                    {" "}
                    <button
                      onClick={() => navigate("/create-competition")}
                      className="join-btn"
                    >
                      <span>Create</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="play-div2">
              <div className="play-content">
                <h5>Join a Competition</h5>
              </div>
              <div className="play-overlay">
                <div className="play-overlay-inner">
                  <div className="play2-hover-img">
                    <img src={playdiv2} alt="" />
                  </div>
                  <div>
                    <h5>Join a Competition</h5>
                    <p>Received a code? Join a league</p>
                  </div>

                  <div className="join-btn-div">
                    <button
                      onClick={() => navigate("/join-competition")}
                      className="join-btn"
                    >
                      <span>Join</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="play-div3">
              <div className="play-content">
                <h5>Pick Team</h5>
              </div>
              <div className="play-overlay">
                <div className="play-overlay-inner">
                  <div className="play3-hover-img">
                    <img src={playdiv3} alt="" />
                  </div>
                  <div>
                    <h5>Pick Team</h5>
                    <p>Select your team for this gameweek</p>
                  </div>

                  <div className="join-btn-div">
                    <button className="join-btn">
                      <span>Pick</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Play;
