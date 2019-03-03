import React from 'react'

import LifeChapter from './LifeChapter.js'

import degreeIcon from '../static/img/degree.png'
import tutorIcon from '../static/img/tutor.png'

import '../styles/Resume.css'

export default () => (
  <div className="section-container">
    <div className="section-title">Resumé</div>
    {/* <div className="resume-section">Personal Information</div>
    <div className="resume-content">
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
    </div> */}
    <div className="resume-section">Education</div>
    <div className="resume-content">
      <LifeChapter
        title="Master Information Systems Management (Wirtschaftsinformatik)"
        duration="04/2018 - today"
        location="Technische Universität Berlin"
        icon={degreeIcon}>
      </LifeChapter>
      <hr></hr>
      <LifeChapter
        title="Bachelor Wirtschaftsinformatik (Information Systems Management)"
        location="Technische Universität Berlin"
        duration="10/2014 - 03/2018"
        details={[
          "Final grade: 1,8",
          "Certificate for being honoured as part of the best students in my year",
          "Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability Offering” (Grade: 1,3)"
        ]}
        icon={degreeIcon}>
      </LifeChapter>
      <hr></hr>
      <LifeChapter
        title="Abitur"
        location="Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual Highschool (German-English))"
        duration="2007 - 2013"
        details={[
          "Final grade: 1,3",
          "Major subjects: English and Physics"
        ]}
        icon={degreeIcon}>
      </LifeChapter>
      <hr></hr>
      <LifeChapter
        title="Quentin Blake Europeschool (Bilingual Primary School (German-English))"
        location="Berlin"
        duration="2001 - 2007"
        icon={degreeIcon}>
      </LifeChapter>
    </div>
    <div className="resume-section">Work experience</div>
    <div className="resume-content">
      <LifeChapter
        title="Student Tutor"
        location="Technische Universität Berlin"
        duration="04/2016 - 04/2017"
        details={[
          "Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)",
          "Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical Foundations of Computer Science)"
        ]}
        icon={tutorIcon}>
      </LifeChapter>
    </div>
    <div className="resume-section">Interests</div>
    <div className="resume-content interest-container">
      <div className="interest">Piano</div>
      <div className="interest">Traveling</div>
      <div className="interest">Programming</div>
      <div className="interest">Wakeboarding</div>
      <div className="interest">Longboard</div>
      <div className="interest">Board Games</div>
      <div className="interest">Origami</div>
      <div className="interest">Running</div>
    </div>
  </div>
)