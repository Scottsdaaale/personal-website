import React from "react";
import AboutMe from "./sections/AboutMe";
import ProjectShowcase from "./sections/ProjectShowcase";
import Resume from "./sections/Resume";
import Intro from "./sections/Intro";
function Main() {
  return (
    <div className="main">
      <section id="home" className="intro">
        <Intro/>
      </section>
      <section id="about" className="about-me">
        <AboutMe />
      </section>
      <section id="projects" className="project-showcase">
        <ProjectShowcase />
      </section>
      <section id="resume" className="resume">
        <Resume />
      </section>
    </div>
  );
}

export default Main;


