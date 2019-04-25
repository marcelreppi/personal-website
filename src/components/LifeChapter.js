import React from "react"

import locationIcon from "../static/img/location.png"
import durationIcon from "../static/img/duration.png"

import "../css/LifeChapter.css"

export default props => {
  return (
    <React.Fragment>
      <div className="chapter-overview">
        <span className="icon-container">
          <img className="icon-img" src={props.icon} alt="" />
        </span>
        <b>{props.title}</b>
        <span className="icon-container">
          <img className="icon-img" src={locationIcon} alt="" />
        </span>
        <div>{props.location}</div>
        <span className="icon-container">
          <img className="icon-img" src={durationIcon} alt="" />
        </span>
        <div>{props.duration}</div>
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
    </React.Fragment>
  )
}
