import React from "react";
import './Stepper.css'

export const Stepper = () => {
  return (
    <>
      <div className="container">
        <div className="step completed">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            Lorem Ipsum 
          </div>
        </div>

        {/* <!-- active --> */}
        <div className="step active">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="content">
            Lorem Ipsum 
          </div>
        </div>

        <div className="step">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="content">
            Lorem Ipsum is simply.
          </div>
        </div>
      </div>
    </>
  );
};
