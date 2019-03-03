import React, { Component } from 'react';

import '../styles/App.css';

import ProfileCard from './ProfileCard.js'
import Resume from './Resume.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="grid-item g1">
            <ProfileCard></ProfileCard>
          </div>
          <div className="grid-item g2">
            <Resume></Resume>
          </div>
        </div>
        {/* <div className="col-lg-3 fixed">
          <ProfileCard></ProfileCard>
        </div>
        <div className="col-lg-9 pull-right">
          <Resume></Resume>
        </div> */}
      </div>
    );
  }
}

export default App;
