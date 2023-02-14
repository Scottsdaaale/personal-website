import { React, useState, useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "../App.css";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-name">
        <img></img>
        <span>Scott Peterson</span>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <div className={`navbar-item ${scrolled ? "scrolled" : ""}`}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              // className={`navbar-item ${scrolled ? "scrolled" : ""}`}
            >
              About
            </Link>
          </div>
          <div className={`navbar-item ${scrolled ? "scrolled" : ""}`}>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              // className={`navbar-item ${scrolled ? "scrolled" : ""}`}
            >
              Projects
            </Link>
          </div>
          <div className={`navbar-item ${scrolled ? "scrolled" : ""}`}>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              // className={`navbar-item ${scrolled ? "scrolled" : ""}`}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
