import React from "react"
import { Carousel } from "react-responsive-carousel"
import { Layout } from "../components/Layout"
import { NPMPackage } from "../components/NPMPackage"
import { PageTitle } from "../components/PageTitle"
import { SectionTitle } from "../components/SectionTitle"

import SenSafetyLogo from "../images/sensafety-logo.png"
import SenSafetyPic1 from "../images/sen-1.jpg"
import SenSafetyPic2 from "../images/sen-2.jpg"
import SenSafetyPic3 from "../images/sen-3.jpg"
import SenSafetyPic4 from "../images/sen-4.jpg"
import SenSafetyPic5 from "../images/sen-5.jpg"

import MoodleBuddyPic1 from "../images/mb-1.png"
import MoodleBuddyPic2 from "../images/mb-2.png"
import MoodleBuddyPic3 from "../images/mb-3.png"

export const Portfolio: React.FC = ({}) => {
  return (
    <Layout>
      <PageTitle>Portfolio</PageTitle>
      <div className="space-y-12">
        <div>
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 gap-y-8 place-items-center lg:grid-cols-2 lg:gap-x-8">
            <div className="max-w-xl w-full h-full shadow-custom rounded-lg overflow-hidden">
              <a
                href="https://sensafety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 py-1 flex justify-center items-center bg-gradient-to-r from-sen1 to-sen2"
              >
                <img className="h-full" src={SenSafetyLogo} />
              </a>
              <div className="p-5 space-y-3">
                <div className="text-l text-center">
                  Mobile crowdsourcing platform for perceived safety of urban
                  citizens. The data is aggregated and can be used by
                  municipalities to evaluate how perceived safety changes over
                  time and how additional infrastructure impacts the perceived
                  safety.
                </div>
                <div className="flex-grow flex items-center">
                  <Carousel
                    renderThumbs={() => []}
                    autoPlay={true}
                    infiniteLoop={true}
                  >
                    <div>
                      <img className="h-80 w-auto" src={SenSafetyPic1} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={SenSafetyPic2} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={SenSafetyPic3} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={SenSafetyPic4} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={SenSafetyPic5} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="max-w-xl w-full h-full flex flex-col shadow-custom rounded-lg overflow-hidden">
              <a
                href="https://moodlebuddy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 py-1 flex justify-center items-center bg-mb"
              >
                <span className="text-2xl text-white font-bold">
                  MoodleBuddy
                </span>
              </a>
              <div className="p-5 space-y-3">
                <div className="text-l text-center">
                  Cross-platform browser plugin that offers mass download and
                  notification functionality for the <b>Moodle</b> learning
                  management platform.
                </div>
                <div className="flex flex-col items-center space-y-1 mb-3">
                  <a
                    className="flex flex-wrap justify-center space-x-1 space-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chrome.google.com/webstore/detail/moodle-buddy/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                  >
                    <img
                      className="mt-1"
                      src="https://img.shields.io/chrome-web-store/v/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Version"
                    />
                    <img
                      src="https://img.shields.io/chrome-web-store/users/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Users"
                    />
                    <img
                      src="https://img.shields.io/chrome-web-store/rating/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Ratings"
                    />
                  </a>
                  <a
                    className="flex flex-wrap justify-center space-x-1 space-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://addons.mozilla.org/en-US/firefox/addon/moodle-buddy/"
                  >
                    <img
                      className="mt-1"
                      src="https://img.shields.io/amo/v/moodle-buddy"
                      alt="Version"
                    />
                    <img
                      src="https://img.shields.io/amo/users/moodle-buddy"
                      alt="Users"
                    />
                    <img
                      src="https://img.shields.io/amo/rating/moodle-buddy"
                      alt="Ratings"
                    />
                  </a>
                </div>
                <div className="flex-grow flex items-center">
                  <Carousel
                    renderThumbs={() => []}
                    autoPlay={true}
                    infiniteLoop={true}
                  >
                    <div>
                      <img className="h-80 w-auto" src={MoodleBuddyPic1} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={MoodleBuddyPic2} />
                    </div>
                    <div>
                      <img className="h-80 w-auto" src={MoodleBuddyPic3} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>npm packages</SectionTitle>
          <div className="grid grid-cols-1 gap-y-8 place-items-center lg:grid-cols-2 lg:gap-x-8">
            <NPMPackage
              name="shape2geohash"
              description="Turns any GeoJSON shape into a list of geohashes"
            ></NPMPackage>
            <NPMPackage
              name="purposize"
              description={
                <span>
                  <a className="link" href="http://docs.sequelizejs.com/">
                    Sequelize
                  </a>{" "}
                  plugin to help with GDPR-compliant data storage
                </span>
              }
            ></NPMPackage>
          </div>
        </div>

        <div className="space-y-6 text-2xl text-center">
          <div>More is coming!</div>
          <div>
            <span role="img" aria-label="show-up">
              ☝( ◠‿◠ )☝
            </span>
          </div>
          <div>＼（＾▽＾）／</div>
          <div>◕‿◕</div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
