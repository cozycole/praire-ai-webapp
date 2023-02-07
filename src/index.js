import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.js";
// import "./styles.scss";

const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" component={App} />
    </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
