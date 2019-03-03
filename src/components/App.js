import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import '../css/App.css';

import NavBar from './NavBar.js'
import Home from './Home.js'
import About from './About.js'
import Resume from './Resume.js'
import Projects from './Projects.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="main-content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;
