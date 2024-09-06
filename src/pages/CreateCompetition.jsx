import React from "react";
import HeroText from "../Components/HeroText";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Competition from "../Components/Competition";

const CreateCompetition = () => {
  return (
    <div className="pages-hero-bg">
      <Navbar />
      <HeroText
        main={"Create a Competition"}
        sub={
          "Get setup to challenge your friends to see who will be the last man standing!"
        }
      />
      <Competition />
      <Footer />
    </div>
  );
};

export default CreateCompetition;
