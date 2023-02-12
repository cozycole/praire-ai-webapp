import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropDown, setDrop] = useState(false);

  return (
    <nav className="navBar">
      <div className="navLogo">
        <img src={logo} alt="Logo" />
      </div>
      <a href="#" className="toggleButton" onClick={() => setDrop(!dropDown)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={dropDown ? "navLinks" : "navLinksDropDown"}>
        <ul>
          <li>
            <Link to="/" onClick={() => setDrop(!dropDown)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/demo" onClick={() => setDrop(!dropDown)}>
              API
            </Link>
          </li>
          <li>
            <Link to="/demo" onClick={() => setDrop(!dropDown)}>
              Sample
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setDrop(!dropDown)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
