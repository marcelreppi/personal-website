import React from "react"
import Typist from "react-typist"

import { Layout } from "../components/Layout"
import GitHubIcon from "../images/github.png"
import LinkedInIcon from "../images/linkedin.png"
import TwitterIcon from "../images/twitter.png"
import MailIcon from "../images/mail.png"
import HomePageIcon from "../images/homepage.png"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center space-y-10">
        {/* Typer */}
        <Typist
          className="text-3.5xl text-highlight medium-font"
          avgTypingDelay={150}
          cursor={{ blink: true, hideWhenDone: false, hideWhenDoneDelay: 0 }}
        >
          Hi, I'm Marcel
        </Typist>

        {/* Intro Text */}
        <h2 className="text-1.5xl medium-font font-medium text-center">
          Information Systems Management
          <br />
          Master Graduate from Technical University of Berlin
        </h2>

        {/* Social Links */}
        <div className="flex justify-center space-x-5">
          <a
            href="https://github.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={GitHubIcon} alt="GitHub Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://twitter.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={TwitterIcon} alt="Twitter Icon" />
          </a>
        </div>

        {/* Other Links */}
        <div className="flex justify-center space-x-10">
          <div className="flex items-center">
            <img className="w-5 h-5 mr-2" src={MailIcon} alt="Mail Icon" />
            <a
              className="break-all underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="mailto:marcelreppi@gmail.com"
            >
              marcelreppi@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <img
              className="w-5 h-5 mr-2"
              src={HomePageIcon}
              alt="Homepage Icon"
            />
            <a
              className="break-all underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://www.reppenhagen.space"
            >
              reppenhagen.space
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
