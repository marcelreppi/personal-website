import React from 'react'

import locationIcon from '../static/img/location.png'
import durationIcon from '../static/img/duration.png'

import '../css/LifeChapter.css'

export default (props) => {
  console.log(props)
  return (
    <div className="life-chapter">
      <div className="chapter-basics">
        <span className="icon-container">
          <img className="icon-img" src={props.icon} alt=""></img>
        </span>
        <b>{props.title}</b>
        <span className="icon-container">
          <img className="icon-img" src={locationIcon} alt=""></img>
        </span>
        <div>{props.location}</div>
        <span className="icon-container">
          <img className="icon-img" src={durationIcon} alt=""></img>
        </span>
        <div>{props.duration}</div>
      </div>
      <div className="chapter-details">
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
      
    </div>
  )
}