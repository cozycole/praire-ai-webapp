import React from "react"

export default function EvalDisplay(props) {
    return (
        <div className="scoreDiv">
          <div>
            <h2>Distress Score</h2>
            <p className="distressScore">
              <strong>{props.score}</strong>
            </p>
          </div>
          <span className="featureDiv">
            <p>Boarded Windows Detected</p>
            <p>Tarp Not Detected</p>
          </span>
        </div>
    )
}