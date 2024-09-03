import React from "react";
import footballvideo from "../assets/footballvideo.mp4";

const Video = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="main-video">
          <video controls>
            <source src={footballvideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
