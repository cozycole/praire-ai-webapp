import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
// import "./styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
