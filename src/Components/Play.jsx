import React from "react";
import play1 from "../assets/play1.jfif";
import play2 from "../assets/play2.jfif";
import play3 from "../assets/play3.jfif";

const Play = () => {
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
          <h2>Play Last Man</h2>
          <div className="play-divs">
            <div className="play-div1">
              <div className="play-content">
                <h5>Create a Competition</h5>
              </div>
            </div>
            <div className="play-div2">
              <div className="play-content">
                <h5>Join a Competition</h5>
              </div>
            </div>
            <div className="play-div3">
              <div className="play-content">
                <h5>Pick Team</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Play;
