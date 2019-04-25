import React from "react"
import { Link } from "react-router-dom"

import menuIcon from "../static/img/menu.png"
import xIcon from "../static/img/x.png"

import "../css/NavBar.css"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
      showMobileMenu: false,
    }
  }

  componentDidMount() {
    this.setState({
      mobile: window.innerWidth <= 480,
    })

    window.addEventListener("resize", this.handleScreenSize)
  }

  handleScreenSize = () => {
    this.setState({
      mobile: window && window.innerWidth <= 480,
    })
  }

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    })
  }

  regularNavBar = () => {
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-item nav-home">
          Home
        </Link>
        <Link to="/about" className="navbar-item nav-about">
          About
        </Link>
        <Link to="/resume" className="navbar-item nav-resume">
          Resumé
        </Link>
        <Link to="/projects" className="navbar-item nav-projects">
          Projects
        </Link>
      </div>
    )
  }

  mobileNavBar = () => {
    return (
      <div className="navbar-mobile-container">
        <img
          className="menu-icon"
          src={menuIcon}
          alt=""
          onClick={this.toggleMobileMenu}
        />
      </div>
    )
  }

  mobileMenuContent = () => {
    return (
      <div className="navbar-mobile-content">
        <img
          className="menu-icon exit-icon"
          src={xIcon}
          alt=""
          onClick={this.toggleMobileMenu}
        />
        <Link
          to="/"
          className="navbar-mobile-item navbar-item nav-home"
          onClick={this.toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="navbar-mobile-item navbar-item nav-about"
          onClick={this.toggleMobileMenu}
        >
          About
        </Link>
        <Link
          to="/resume"
          className="navbar-mobile-item navbar-item nav-resume"
          onClick={this.toggleMobileMenu}
        >
          Resumé
        </Link>
        <Link
          to="/projects"
          className="navbar-mobile-item navbar-item nav-projects"
          onClick={this.toggleMobileMenu}
        >
          Projects
        </Link>
      </div>
    )
  }

  showCorrectNavBar = () => {
    if (this.state.mobile) {
      return this.mobileNavBar()
    } else {
      return this.regularNavBar()
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.showCorrectNavBar()}
        {this.state.showMobileMenu ? this.mobileMenuContent() : null}
      </React.Fragment>
    )
  }
}

export default NavBar
