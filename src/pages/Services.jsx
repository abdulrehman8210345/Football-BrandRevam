import React from "react";
import PagesHero from "../Components/PagesHero";
import Navbar from "../Components/Navbar";
import HeroText from "../Components/HeroText";
import Play from "../Components/Play";
import Rules from "../Components/Rules";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div className="pages-hero-bg">
      <Navbar />
      <HeroText
        main={"Our Services"}
        sub={`Find all details of your competitions below. Click on the competition you would like to view (if you have multiple) <br/> and it wil take you to that competition page`}
      />
      <Play />
      <Rules />
      <Footer />
    </div>
  );
};

export default Services;
