import React from "react"
import Typist from "react-typist"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../components/Layout"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-10">
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
            <StaticImage
              width={32}
              height={32}
              src="../images/github.png"
              alt="GitHub Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              width={32}
              height={32}
              src="../images/linkedin.png"
              alt="LinkedIn Icon"
            />
          </a>
          <a
            href="https://twitter.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              width={32}
              height={32}
              src="../images/twitter.png"
              alt="Twitter Icon"
            />
          </a>
        </div>

        {/* Other Links */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:items-center sm:space-x-10 sm:space-y-0">
          <div className="flex items-center">
            <StaticImage
              width={20}
              height={20}
              className="mr-2"
              src="../images/mail.png"
              alt="Mail Icon"
            />
            <a className="break-all link" href="mailto:marcelreppi@gmail.com">
              marcelreppi@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <StaticImage
              width={20}
              height={20}
              className="mr-2"
              src="../images/homepage.png"
              alt="Homepage Icon"
            />
            <a className="break-all link" href="https://www.reppenhagen.space">
              reppenhagen.space
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
