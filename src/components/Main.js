import {React, useEffect} from "react";
import AboutMe from "./sections/AboutMe";
import ProjectShowcase from "./sections/ProjectShowcase";
import Resume from "./sections/Resume";
import Intro from "./sections/Intro";
import Aos from 'aos';
import "aos/dist/aos.css";

function Main() {
  
  // useEffect(() => {
  //   Aos.init({duration: 2000});
  // },[])

  return (
    <div className="main">
      <section id="home" className="intro">
        <Intro />
      </section>
      <section id="about" className="about-me" 
      // data-aos="fade-up"
      >
        <AboutMe />
      </section>
      <section id="projects" className="project-showcase" 
      // data-aos="fade-up"
      >
        <ProjectShowcase />
      </section>
      <section id="resume" className="resume" 
      // data-aos="fade-up"
      >
        <Resume />
      </section>
    </div>
  );
}

export default Main;
