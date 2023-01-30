import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="socials-container">
      <ul className="socials">
        <li>
          <a
            href="https://www.linkedin.com/in/scotty-peterson/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Scottsdaaale" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/scottsdaaale/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <hr className="socials-hr" />
        </li>
      </ul>
    </div>
  );
}

export default Socials;
