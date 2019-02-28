import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import '../styles/PersonalDetail.css'

export default (props) => {
  let info
  if (props.link) {
    info = <a href={props.link}>{props.info}</a>
  } else {
    info = props.info
  }

  return (
    <div className="detail">
      <span className="info-icon">
        <img className="info-icon-img" src={props.icon} alt=""></img>
      </span>
      <span className="info break-word">
        {info}
      </span>  
    </div>
  )
}