import React from "react";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className="pages-hero-bg">
      <Navbar />
      <HeroText
        main={"Contact Us"}
        sub={`Find all details of your competitions below. Click on the competition you would like to view (if you have multiple) <br/> and it wil take you to that competition page`}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
