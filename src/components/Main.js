import React from "react";
import AboutMe from "./sections/AboutMe";
import ProjectShowcase from "./sections/ProjectShowcase";
import Resume from "./sections/Resume";
import Intro from "./sections/Intro";
function Main() {
  return (
    <div className="main">
      <section className="intro">
        <Intro/>
      </section>
      <section className="about-me">
        <AboutMe />
      </section>
      <section className="project-showcase">
        <ProjectShowcase />
      </section>
      <section className="resume">
        <Resume />
      </section>
    </div>
  );
}

export default Main;
