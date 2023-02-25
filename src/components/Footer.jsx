import React from "react";
// import "./Footer.css";
import emailIcon from "../assets/email.svg";
import mapIcon from "../assets/map.svg";
import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerCenter">
        <div className="footerContainer">
          <div className="footerLeft">
            <div className="footerEmail">
              <img src={emailIcon} alt="Email" className="footerIcon" />
              <p> 
                praireoutlook@gmail.com
              </p>
            </div>
            <div className="footerLocation">
              <img src={mapIcon} alt="Location" className="footerIcon" />
              <p> 
                Portland, OR 
              </p>
            </div>
            <div className="footerSocial">
              <div className="social1">
                <a
                  href="https://github.com/cozycole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerSocial"
                >
                  <img src={githubIcon} alt="github" className="footerIcon" />
                </a>
              </div>
              <div className="social2">
                <a
                  href="https://www.linkedin.com/company/praire-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerSocial"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="footerIcon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <p className="credit">
              Copyright © 2023 PraiRE AI 
            </p>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
