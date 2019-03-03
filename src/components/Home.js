import React from 'react'

import PersonalDetail from './PersonalDetail.js'

import githubIcon from '../static/img/github.png'
import linkedinIcon from '../static/img/linkedin.png'
import twitterIcon from '../static/img/twitter.png'
import locationIcon from '../static/img/location.png'
import phoneIcon from '../static/img/phone.png'
import mailIcon from '../static/img/mail.png'
import homepageIcon from '../static/img/homepage.png'

import '../styles/Home.css'

export default () => {
  return (
    <div className="home-container">
      <div className="greeting">Hi, I'm Marcel</div>
      <div className="intro">Information Systems Management<br/>Master Student @ Technical University of Berlin</div>
      <div className="social-links">
        <span className="icon-container">
          <a href="https://github.com/marcelreppi">
            <img className="social-icon-img" src={githubIcon} alt=""></img>
          </a>
        </span>
        <span className="icon-container">
          <a href="https://twitter.com/marcelreppi">
            <img className="social-icon-img" src={twitterIcon} alt=""></img>
          </a>
        </span>
        <span className="icon-container">
          <a href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/">
            <img className="social-icon-img" src={linkedinIcon} alt=""></img>
          </a>
        </span>
      </div>
      <div className="contact-details">
          <div class="contact-location">
            <PersonalDetail
              className="contact-location" 
              icon={locationIcon}
              info="Nürnberger Straße 38, 10777 Berlin">
            </PersonalDetail>
          </div>
          <div class="contact-homepage">
            <PersonalDetail 
              icon={homepageIcon}
              info="reppenhagen.space"
              link="http://www.reppenhagen.space">
            </PersonalDetail>
          </div>
          <div class="contact-mail">
            <PersonalDetail 
              icon={mailIcon}
              info="marcelreppi@gmail.com"
              link="mailto:marcelreppi@gmail.com">
            </PersonalDetail>
          </div>
          <div class="contact-phone">
            <PersonalDetail 
              icon={phoneIcon}
              info="0172/3831303">
            </PersonalDetail>
          </div>
        </div>
    </div>
  )
}