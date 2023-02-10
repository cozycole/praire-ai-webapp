import React from "react";
import houseImg from "../../assets/annotatedHouse.png";

function Home() {
  return (
    <section className="homeSection1">
      <div className="textSection1">
        <h1>Get Property Condition Data Automatically with AI</h1>
        <p>
          We collect imagery of residential properties and use AI models to
          evaluate their distress. We generate distress scores taking into
          account roof/siding condition, vegetation overgrowth, dented
          gutters/garage doors, industrial dumpsters, boarded windows and tarps.
        </p>
      </div>
      <div className="imgDiv">
        <img src={houseImg} alt="Distressed House" className="houseAnimated" />
      </div>
    </section>
  );
}

export default Home;
