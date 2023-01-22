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
