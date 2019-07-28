import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import "./css/App.css"

import NavBar from "./components/NavBar.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Resume from "./pages/Resume.js"
import Projects from "./pages/Projects.js"
import Error404 from "./pages/404.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
      mobileMenuOpen: false,
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth <= 480,
    })

    window.addEventListener("resize", this.handleScreenSize)
  }

  handleScreenSize = () => {
    this.setState({
      isMobile: window && window.innerWidth <= 480,
    })
  }

  setMobileMenuOpen = mobileMenuOpen => {
    this.setState({ mobileMenuOpen })
  }

  render() {
    return (
      <div className={`App ${this.state.mobileMenuOpen ? "no-scroll" : ""}`}>
        <NavBar isMobile={this.state.isMobile} setMobileMenuOpen={this.setMobileMenuOpen} />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/" component={Error404} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
