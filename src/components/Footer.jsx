import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://discordapp.com/users/https://discordapp.com/users/833526125807796234"
            rel="noreferrer"
            className="f-link"
          >
            Discord
          </a>

          <a
            href="mailto:sophie.rong@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="f-link"
          >
            Email
          </a>

          <a
            href="https://github.com/sophie900"
            target="_blank"
            rel="noreferrer"
            className="f-link"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/sr_the_artist"
            target="_blank"
            rel="noreferrer"
            className="f-link"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/sophie-rong-38743a256/"
            target="_blank"
            rel="noreferrer"
            className="f-link"
          >
            LinkedIn
          </a>
        </div>

        <h3 className="footer-title">Made with 🩷 by Sophie R.</h3>
      </div>
    </footer>
  );
};

export default Footer;
