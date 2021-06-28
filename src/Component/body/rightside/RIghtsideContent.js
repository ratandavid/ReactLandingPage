import React from "react";
import AllCards from "../Cards/AllCards";
import "./RightSide.css";

function RightsideContent() {
  return (
    <>
      <div className="text">
        <div className="heading">
          <h1>What are you having for Lunch?</h1>
        </div>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eusmod tempor incididunt ut labor et.
          </p>
          <div className="line"></div>
        </div>
        <AllCards />
      </div>
    </>
  );
}
export default RightsideContent;
