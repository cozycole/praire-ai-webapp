import React from "react";
import houseImg from "../../assets/annotatedHouse.png";
function Home() {
  return (
    <div>
      <h1>Get Property Condition Data Automatically</h1>
      <img src={houseImg} alt="Distressed House" />
      <p>
        We collect imagery of neighborhoods and use computer vision models to
        evaluate the distress of the properties within them. We generate
        distress scores taking into account roof/siding condition, vegetation
        overgrowth, dented gutters/garage doors, industrial dumpsters, boarded
        windows and tarps.
      </p>
      <button>Contact Us</button>
    </div>
  );
}

export default Home;
