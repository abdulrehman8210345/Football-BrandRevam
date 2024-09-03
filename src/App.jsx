import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import HeroContent from "./Components/HeroContent";
import AboutUs from "./Components/AboutUs";
import Play from "./Components/Play";
import HowtoPlay from "./Components/HowtoPlay";
import Video from "./Components/Video";
import Welcome from "./Components/Welcome";
import Request from "./Components/Request";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <HeroContent />
      <AboutUs />
      <Play />
      <HowtoPlay />
      <Video />
      <Welcome />
      <Request />
      <Footer />
    </div>
  );
};

export default App;
