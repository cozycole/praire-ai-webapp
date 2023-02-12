import React from "react";
import houseImg from "../../assets/annotatedHouse.png";

function Home() {
  return (
    <section className="homeSection1">
      <div className="textSection1">
        <h1>Automatic Property Condition Data with AI</h1>
        <p>
          We collect streetview imagery of residential properties and use AI
          models to evaluate their distress. This service is made for{" "}
          <strong>real estate wholesalers and investors</strong> for automating
          list creation of potential off-market opportunites.
        </p>
      </div>
      <div className="imgDiv">
        <img src={houseImg} alt="Distressed House" className="houseAnimated" />
      </div>
    </section>
  );
}

export default Home;
