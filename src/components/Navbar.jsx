import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="center">
          <ul id="ul-1">
            <li className="decor-link letter-spacing">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="decor-link letter-spacing">
              <Link to="/art" className="nav-link">
                Art & Design
              </Link>
            </li>
          </ul>
        </div>

        <ul className={menuOpen ? "open" : ""} id="ul-2">
          <Link
            to="/"
            className="nav-link"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <li className="decor-link letter-spacing">Home</li>
          </Link>

          <Link
            to="/art"
            className="nav-link"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <li className="decor-link letter-spacing">Art & Design</li>
          </Link>

          {/* Credit to Code Complete (YouTube) */}
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span id="line-1"></span>
            <span id="line-2"></span>
            <span id="line-3"></span>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
