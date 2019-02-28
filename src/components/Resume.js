import React from 'react'

import '../styles/Resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div className="section-container resume-container">
        <div className="resume-title">Resumé</div>
        <hr></hr>
        <div className="resume-section">About</div>
        <div className="resume-content">Hi, I'm Marcel</div>
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