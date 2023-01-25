import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
function Navbar() {
  
  return (
    <nav className='navbar'>
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/about">About Me</Link>
      <Link className="navbar-item" to="/projects">Projects</Link>
      <Link className="navbar-item" to="/resume">Resume</Link>
    </nav>
  )
}

export default Navbar

//with the react-scroll package you can use {Link} from 'react-scroll'
//Then you can use the Link component in your Navbar component and set 
//the to prop to the ID of the element you want to scroll to.

{/* <Link
  className="navbar-item"
  to="about-section"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  About Me
</Link> */}
// You also need to add an id to the element you want to scroll to.

// <section id="about-section">
//    // content
// </section>