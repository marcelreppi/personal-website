import React from 'react'

import '../styles/PersonalDetail.css'

export default (props) => {
  return (
    <div className="detail">
      <span className="info-icon">
        <img className="info-icon-img" src={props.icon} alt="location"></img>
      </span>
      <span className="info">
        {props.info}
      </span>  
    </div>
  )
}