import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/slider1.jfif";
import slider2 from "../assets/slider2.jfif";
import slider3 from "../assets/slider3.jfif";
import slider4 from "../assets/slider4.jfif";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="hero-section">
      <div className="main-hero">
        <div className="hero-img">
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="slider-img">
          <Slider {...settings}>
            <div>
              <img src={slider1} alt="Slider 1" />
            </div>
            <div>
              <img src={slider2} alt="Slider 2" />
            </div>
            <div>
              <img src={slider3} alt="Slider 3" />
            </div>
            <div>
              <img src={slider4} alt="Slider 4" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
