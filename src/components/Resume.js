import React from 'react'

import '../styles/Resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div className="section-container resume-container">
        <div className="resume-title">Resumé</div>
        <hr></hr>
        <div className="resume-section">About</div>
        <div className="resume-content">
          Hi, I'm Marcel :)<br/>
          My hometown is Berlin, where I currently pursue my masters degree
          in <b>Infomation Systems Management</b> at the <b>Technical University of Berlin</b>.
          I am a curious student with a passion for programming, web technologies and cloud computing.
          I love exploring today's technologies and continously learn new things.
        </div>
        <div className="resume-section">Education</div>
        <div className="resume-content">Learning never stops</div>
        <div className="resume-section">Work experience</div>
        <div className="resume-content">About to explore the real world!</div>
        <div className="resume-section">Hobbies</div>
        <div className="resume-content">Standing on my head and laughing</div>
      </div>
    )
  }
}

export default Resume