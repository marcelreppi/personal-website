import React from 'react'

import profilePic from '../static/img/profilepic1.jpg'

import '../css/About.css'

export default () => {
  return (
    <div>
      <div className="section-title">About</div>
      <div className="section-container">
        <div className="profile-pic-container">
          <img src={profilePic} alt="" className="profile-pic"></img>
        </div>
        <div className="about-content">
          My hometown is Berlin, where I currently pursue my masters degree
          in <b>Infomation Systems Management</b> at the <b>Technical University of Berlin</b>.
          I am a curious student with a passion for programming, web technologies and cloud computing.
          I love exploring today's technologies and continously learn new things.
        </div>
      </div>
    </div>
  )
}