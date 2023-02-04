import {React, useState, useEffect} from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "../App.css";
function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll(){
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-name">
        <img ></img>
        <span>Scott Peterson</span>
      </div>

      <nav className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-item"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-item"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-item"
        >
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

//with the react-scroll package you can use {Link} from 'react-scroll'
//Then you can use the Link component in your Navbar component and set
//the to prop to the ID of the element you want to scroll to.

{
  /* <Link
  className="navbar-item"
  to="about-section"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  >
  About Me
</Link> */
}
// You also need to add an id to the element you want to scroll to.

// <section id="about-section">
//    // content
// </section>
