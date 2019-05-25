import React from "react"

import "../css/Projects.css"

export default () => {
  return (
    <React.Fragment>
      <div className="section-title">Projects</div>
      <div className="projects-container">
        <div className="project-section">Published npm packages</div>
        <div className="npm-packages-container">
          <div className="npm-package">
            <div className="package-name">
              <a className="package-link" href="https://www.npmjs.com/package/shape2geohash">
                shape2geohash
              </a>
            </div>

            <div>Turns any GeoJSON shape (polygon or line) into a list of geohashes</div>
            <a className="npm-stats" href="https://nodei.co/npm/shape2geohash/">
              <img alt="package summary" src="https://nodei.co/npm/shape2geohash.png" />
            </a>
          </div>
          <div className="npm-package">
            <div className="package-name">
              <a className="package-link" href="https://www.npmjs.com/package/purposize">
                purposize
              </a>
            </div>

            <div>
              A <a href="http://docs.sequelizejs.com/">Sequelize</a> plugin to help with
              GDPR-compliant data storage
            </div>
            <a className="npm-stats" href="https://nodei.co/npm/purposize/">
              <img alt="package summary" src="https://nodei.co/npm/purposize.png" />
            </a>
          </div>
        </div>
        <div className="coming-soon">
          <p>More coming soon!</p>
          <p>
            <span role="img" aria-label="show-up">
              ☝( ◠‿◠ )☝
            </span>
          </p>
          <p>＼（＾▽＾）／</p>
          <p>◕‿◕</p>
        </div>
      </div>
    </React.Fragment>
  )
}
