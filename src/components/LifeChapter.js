import React from "react"

import locationIcon from "../static/img/location.png"
import durationIcon from "../static/img/duration.png"

import "../styles/LifeChapter.css"

export default props => {
  console.log(props)
  return (
    <div className="life-chapter">
      <div className="chapter-overview">
        <span className="info-icon">
          <img className="info-icon-img" src={props.icon} alt="" />
        </span>
        <b className="info">{props.title}</b>
        <span className="info-icon">
          <img className="info-icon-img" src={locationIcon} alt="" />
        </span>
        <div className="info">{props.location}</div>
        <span className="info-icon">
          <img className="info-icon-img" src={durationIcon} alt="" />
        </span>
        <div className="info">{props.duration}</div>
      </div>
      <div className="chapter-details">
        {props.details ? (
          <ul>
            {props.details.map((d, i) => {
              return <li key={i}>{d}</li>
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
