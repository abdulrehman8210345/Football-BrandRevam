import React from "react";
import infotab from "../assets/infotab.png";
import feetab from "../assets/feetab.png";
import confirmtab from "../assets/confirmtab.png";

const Competition = () => {
  return (
    <section className="competition-section">
      <div className="container">
        <div className="main-competition">
          <div className="competition-steps">
            <div className="competition-tabs">
              <div className="tab1">
                <div className="tab1-img">
                  <img src={infotab} alt="" />
                </div>
                <p>Basic Information</p>
              </div>
              <div className="tab2">
                <div className="tab2-img">
                  <img src={feetab} alt="" />
                </div>
                <p>Fee</p>
              </div>
              <div className="tab3">
                <div className="tab3-img">
                  <img src={confirmtab} alt="" />
                </div>
                <p>Confirm</p>
              </div>
            </div>
            <h3>1. Basic Information</h3>
            <div className="competition-form">
              <div className="checkbox">
                <input type="checkbox" />
                <h6>Trial Option:</h6>
              </div>
              <div className="competition-input">
                <input type="text" placeholder="Competition Name" />
              </div>
              <div className="competition-input">
                <input placeholder="Competition Start Date" type="text" />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p>I Agree to the rules of the play last Man</p>
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
      </div>
    </section>
  );
};

export default Competition;
