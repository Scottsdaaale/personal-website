import React from "react";
import AboutMe from "./sections/AboutMe";
import ProjectShowcase from "./sections/ProjectShowcase";
import Resume from "./sections/Resume";
import Intro from "./sections/Intro";
function Main() {
  return (
    <div className="main">
      <div className="intro">
        <Intro/>
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
      <div className="project-showcase">
        <ProjectShowcase />
      </div>
      <div className="resume">
        <Resume />
      </div>
    </div>
  );
}

export default Main;
