import React, {useState} from "react";
import ImgUpload from "./ImgUpload"
import EvalDisplay from "./EvalDisplay"
import houseImg from "../../assets/distressedHouse.png";

function Demo() {
  const [score, setScore] = useState(100);
  const onEvalResponse = (res) => {
    setScore(res.distressScore * 100);
  }
  return (
    <div className="demoSection">
      <h1>PraiRE AI Condition Score Demo</h1>
      <div className="demo">
        <ImgUpload onEval={onEvalResponse} />
        <EvalDisplay score={score}/>
      </div>
    </div>
  );
}

export default Demo;
