import React from "react";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import Navbar from "../Components/Navbar";
import Join from "../Components/Join";

const JoinCompetition = () => {
  return (
    <div className="pages-hero-bg">
      <Navbar />
      <HeroText
        main={"Join Competition"}
        sub={"Enter a code to join a competition!"}
      />
      <Join />
      <Footer />
    </div>
  );
};

export default JoinCompetition;
