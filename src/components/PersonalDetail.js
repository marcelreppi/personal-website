import React from 'react'

import '../css/PersonalDetail.css'

export default (props) => {
  let info
  if (props.link) {
    info = <a href={props.link}>{props.info}</a>
  } else {
    info = props.info
  }

  return (
    <div className="detail">
      <span className="icon-container">
        <img className="icon-img" src={props.icon} alt=""></img>
      </span>
      <span className="break-word">
        {info}
      </span>  
    </div>
  )
}