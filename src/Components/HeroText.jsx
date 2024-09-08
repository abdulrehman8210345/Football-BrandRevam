import React from "react";

const HeroText = ({ main, sub }) => {
  return (
    <div className="pages-hero-bg">
    <div className="page-hero-text container">
      <h3>{main}</h3>
      <p dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
    </div>
  );
};

export default HeroText;
