import React from 'react'

import locationIcon from '../static/img/location.png'
import durationIcon from '../static/img/duration.png'

import '../styles/LifeChapter.css'

export default (props) => {
  console.log(props)
  return (
    <div className="life-chapter">
      <div className="chapter-basics">
        <span className="info-icon">
          <img className="info-icon-img" src={props.icon} alt=""></img>
        </span>
        <b className="chapter-title">{props.title}</b>
        <span className="info-icon">
          <img className="info-icon-img" src={locationIcon} alt=""></img>
        </span>
        <div>{props.location}</div>
        <span className="info-icon">
          <img className="info-icon-img" src={durationIcon} alt=""></img>
        </span>
        <div>{props.duration}</div>
      </div>
      {
        props.details ? 
          <ul>
            { props.details.map( d => {
              return <li>{d}</li>
            }) }
          </ul>
        : null
      }
    </div>
  )
}