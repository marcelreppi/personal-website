import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/NavBar.css'

export default () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-item nav-home">Home</Link>
      <Link to="/about" className="navbar-item nav-about">About</Link>
      <Link to="/resume" className="navbar-item nav-resume">Resumé</Link>
      <Link to="/projects" className="navbar-item nav-projects">Projects</Link>
    </div>
  )
}