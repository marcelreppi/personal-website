import React from 'react'
import profilePic from '../img/MarcelBild.jpg'
import locationIcon from '../img/location.png'
import phoneIcon from '../img/phone.png'
import mailIcon from '../img/mail.png'
import homepageIcon from '../img/homepage.png'
import speakIcon from '../img/speak.png'
import githubIcon from '../img/github.png'
import linkedinIcon from '../img/linkedin.png'
import { Container, Row, Col } from 'reactstrap';

import '../styles/ProfileCard.css'

import PersonalDetail from './PersonalDetail.js'

class ProfileCard extends React.Component {

  render() {
    return (
      <div className="profile-card">
        <div className="profile-pic-container">
          <img className="profile-pic" src={profilePic} alt="profile picture"></img>
        </div>
        <h3 className="name">Marcel Reppenhagen</h3>
        <h5 className="profession">Information Systems Management Student @ TU Berlin</h5>
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
          info="marcelreppi@gmail.com">
        </PersonalDetail>
        <PersonalDetail 
          icon={homepageIcon}
          info="reppenhagen.space">
        </PersonalDetail>
        <PersonalDetail 
          icon={speakIcon}
          info="German, English, Hebrew">
        </PersonalDetail>
        <hr></hr>
        <div className="footer">
          <span className="footer-item">
            <a href="https://github.com/marcelreppi">
              <img className="footer-icon" src={githubIcon}></img>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/">
              <img className="footer-icon" src={linkedinIcon}></img>
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default ProfileCard