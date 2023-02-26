import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import Contact from "./components/Contact/Contact";

// wrapper div used to give a margin for all content
// within body since body will have auto side margins
const App = () => {
  return (
    <div className="fullView">
      <div className="centerContents">
        <div className="wrapperMargin">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
