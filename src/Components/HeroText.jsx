import React from "react";

const HeroText = ({ main, sub }) => {
  return (
    <div className="page-hero-text">
      <h3>{main}</h3>
      <p dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
  );
};

export default HeroText;
