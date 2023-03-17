import React from "react";
import ImgUpload from "./ImgUpload"

function Demo() {
  return (
    <div className="demoSection">
      <h1>PraiRE AI Condition Score Demo</h1>
      <div className="demo">
        <div className="imgDiv">
          <ImgUpload/>
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
