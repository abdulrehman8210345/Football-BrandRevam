import React from "react";

const Join = () => {
  return (
    <section className="join-section">
      <div className="container">
        <div className="main-join">
          <div className="join-competition-section">
            <div className="competition-input">
              <input type="text" placeholder="Competition Code" />
            </div>
            <div className="competition-input">
              <input placeholder="Referral Name" type="text" />
            </div>
            <div className="back-next-btn-div">
              <button className="back-btn">
                <span>Back</span>
              </button>
              <button className="next-btn">
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
