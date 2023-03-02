import React from "react";
import houseImg from "../../assets/distressedHouse.png";

function Demo() {
  return (
    <div className="demoSection">
      <h1>PraiRE AI Condition Score Demo</h1>
      <div className="demo">
        <div className="imgDiv">
          <span className="imgBorder">
            <img src={houseImg} alt="House" />
          </span>
          <button>Upload Image</button>
        </div>
        <div className="scoreDiv">
          <span>
            <h2>Distress Score</h2>
            <p className="distressScore">
              <strong>100</strong>
            </p>
          </span>
          <span className="featureDiv">
            <p>Boarded Windows Detected</p>
            <p>Tarp Not Detected</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Demo;
