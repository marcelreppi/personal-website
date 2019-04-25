import React from "react"

import profilePic from "../static/img/profilepic1.jpg"

import "../css/About.css"

export default () => {
  return (
    <React.Fragment>
      <div className="section-title">About</div>
      <div className="profile-pic-container">
        <img src={profilePic} alt="" className="profile-pic" />
      </div>
      <div className="about-content">
        <p>
          Hi, my name is Marcel Reppenhagen{" "}
          <span role="img" aria-label="waving-man">
            🙋‍♂️
          </span>
          <span role="img" aria-label="waving-hand">
            👋
          </span>
        </p>
        <p>
          I am a curious student with a passion for programming, web
          technologies and{" "}
          <span role="img" aria-label="cloud">
            ☁️
          </span>
          -computing . I love exploring today's ever-evolving technologies and
          continously learn new things.{" "}
          <span role="img" aria-label="book">
            💡
          </span>
        </p>
        <p>
          My hometown is Berlin, where I currently pursue my masters degree in{" "}
          <b>Infomation Systems Management</b> at the{" "}
          <b>Technical University of Berlin</b>.{" "}
          <span role="img" aria-label="student">
            👨‍🎓
          </span>
        </p>
        <p>
          In my freetime I like to get outside, go running, hang out with
          friends or cruise on my longboard. If the weather allows, I
          occasionally go wakeboarding too.{" "}
          <span role="img" aria-label="surfer">
            🏄‍
          </span>
          <br />I also enjoy playing the piano or destroying friendships with
          board games.{" "}
          <span role="img" aria-label="laughing-smiley">
            😄
          </span>
        </p>
        <p>
          Oh, and I LOVE to travel!{" "}
          <span role="img" aria-label="heart-eyed-smiley">
            😍
          </span>
          <span role="img" aria-label="world">
            🌍
          </span>
        </p>
        <p>
          Feel free to contact me! I love meeting new people!{" "}
          <span role="img" aria-label="smiling-smiley">
            😊
          </span>
        </p>
      </div>
    </React.Fragment>
  )
}
