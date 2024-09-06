import React from "react";
import testimonialimg from "../assets/testimonialimg.jfif";
import testimg from "../assets/testimg.jfif";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="main-testimonial">
          <div className="testimonial-back">
            <div className="testimonial-img">
              <img src={testimonialimg} alt="" />
            </div>
            <div className="testimonial-text">
              <p>Testimonials</p>
              <h5>
                What people say about
                <br />
                us..
              </h5>
            </div>
          </div>
          <div className="slider-container">
            {/* <Slider {...settings}>
              <div className="testimonial-slider1">
                <div className="test-slider-text">
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit, sed do <br /> eiusmod
                    tempor incididunt ut labore <br /> et dolore magna aliqua.
                    Ut enim ad <br /> minim veniam.Lorem ipsum dolor sit <br />{" "}
                    amet, consectetur adipiscing elit, sed <br /> do eiusmod
                    tempor incididunt ut <br /> labore et dolore magna aliqua.
                    Ut <br /> enim ad minim veniam.
                  </p>
                </div>
                <div className="test-slider-below">
                  <div className="test-slider-detail">
                    <div className="test-slider-img">
                      <img src={testimg} alt="" />
                    </div>
                    <div className="test-slider-name">
                      <h5>David Smith</h5>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider1">
                <div className="test-slider-text">
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit, sed do <br /> eiusmod
                    tempor incididunt ut labore <br /> et dolore magna aliqua.
                    Ut enim ad <br /> minim veniam.Lorem ipsum dolor sit <br />{" "}
                    amet, consectetur adipiscing elit, sed <br /> do eiusmod
                    tempor incididunt ut <br /> labore et dolore magna aliqua.
                    Ut <br /> enim ad minim veniam.
                  </p>
                </div>
                <div className="test-slider-below">
                  <div className="test-slider-detail">
                    <div className="test-slider-img">
                      <img src={testimg} alt="" />
                    </div>
                    <div className="test-slider-name">
                      <h5>David Smith</h5>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider1">
                <div className="test-slider-text">
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit, sed do <br /> eiusmod
                    tempor incididunt ut labore <br /> et dolore magna aliqua.
                    Ut enim ad <br /> minim veniam.Lorem ipsum dolor sit <br />{" "}
                    amet, consectetur adipiscing elit, sed <br /> do eiusmod
                    tempor incididunt ut <br /> labore et dolore magna aliqua.
                    Ut <br /> enim ad minim veniam.
                  </p>
                </div>
                <div className="test-slider-below">
                  <div className="test-slider-detail">
                    <div className="test-slider-img">
                      <img src={testimg} alt="" />
                    </div>
                    <div className="test-slider-name">
                      <h5>David Smith</h5>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
