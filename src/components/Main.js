import React from 'react'
import AboutMe from "./sections/AboutMe";
import ProjectShowcase from "./sections/ProjectShowcase";
import Resume from "./sections/Resume";
function Main() {
  return (
    <div className='main'>
        <AboutMe/>
        <ProjectShowcase/>
        <Resume/>
    </div>
  )
}

export default Main