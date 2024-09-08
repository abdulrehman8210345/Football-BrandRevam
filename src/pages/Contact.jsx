import React from "react";
import Footer from "../Components/Footer";
import HeroText from "../Components/HeroText";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
<<<<<<< HEAD
    <div>
=======
    <div className="pages-hero-bg">
>>>>>>> 15a4a6092d5494473826d8b998df8557ef075afd
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
