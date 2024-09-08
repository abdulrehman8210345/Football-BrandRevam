import React from "react";

const HeroText = ({ main, sub }) => {
  return (
<<<<<<< HEAD
    <div className="pages-hero-bg">
    <div className="page-hero-text container">
      <h3>{main}</h3>
      <p dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
    </div>
=======
    <div className="page-hero-text">
      <h3>{main}</h3>
      <p dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
>>>>>>> 15a4a6092d5494473826d8b998df8557ef075afd
  );
};

export default HeroText;
