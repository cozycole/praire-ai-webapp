import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavLinks = (props) => {
  if (!props.links) {
    throw new Error("No links provided to NavLinks")
  }
  console.log(props.links)
  return (
    <ul>
      {props.links.map((l, i) => 
        <li key={i} onClick={props.onClick}>
          <Link to={l.link}>{l.text}</Link>
        </li>
        )}
    </ul>
  );
}

const Navbar = () => {
  const [dropDown, setDrop] = useState(false);
  const links = [
    {text:"Home", link: "/"},
    {text:"API", link: "/demo"},
    {text:"Sample", link: "/demo"},
    {text:"Contact", link: "/contact"}
  ]

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
      <div className="navLinks">
        <NavLinks links={links} />
      </div>
      <div className={dropDown ? "navLinksDropDown" : "navLinksHidden"}>
        <NavLinks links={links} onClick={() => setDrop(!dropDown)}/>
      </div>
    </nav>
  );
};

export default Navbar;
