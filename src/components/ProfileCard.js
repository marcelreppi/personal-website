import React from 'react'
import profilePic from '../img/MarcelBild.jpg'
import locationIcon from '../img/location.png'
import phoneIcon from '../img/phone.png'
import mailIcon from '../img/mail.png'
import homepageIcon from '../img/homepage.png'
import speakIcon from '../img/speak.png'
import githubIcon from '../img/github.png'
import linkedinIcon from '../img/linkedin.png'
import twitterIcon from '../img/twitter.png'

import '../styles/ProfileCard.css'

import PersonalDetail from './PersonalDetail.js'

class ProfileCard extends React.Component {

  render() {
    return (
      <div className="section-container">
        <div className="profile-pic-container">
          <img className="profile-pic" src={profilePic} alt=""></img>
        </div>
        <div className="name"><b>Marcel Reppenhagen</b></div>
        <div className="profession">Information Systems Management<br/>Student @ TU Berlin</div>
        
        <hr></hr>
        <PersonalDetail 
          icon={locationIcon}
          info="Nürnberger Straße 38, 10777 Berlin">
        </PersonalDetail>
        <PersonalDetail 
          icon={phoneIcon}
          info="0172/3831303">
        </PersonalDetail>
        <PersonalDetail 
          icon={mailIcon}
          info="marcelreppi@gmail.com"
          link="mailto:marcelreppi@gmail.com">
        </PersonalDetail>
        <PersonalDetail 
          icon={homepageIcon}
          info="reppenhagen.space"
          link="http://www.reppenhagen.space">
        </PersonalDetail>
        <PersonalDetail 
          icon={speakIcon}
          info="German, English, Hebrew">
        </PersonalDetail>
        <hr></hr>
        <div className="footer">
          <span className="footer-item">
            <a href="https://github.com/marcelreppi">
              <img className="footer-icon" src={githubIcon} alt=""></img>
            </a>
          </span>
          <span className="footer-item">
            <a href="https://twitter.com/marcelreppi">
              <img className="footer-icon" src={twitterIcon} alt=""></img>
            </a>
          </span>
          <span className="footer-item">
            <a href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/">
              <img className="footer-icon" src={linkedinIcon} alt=""></img>
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default ProfileCard