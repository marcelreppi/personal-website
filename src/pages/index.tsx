import React from "react"
import Typist from "react-typist"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const SEODescription = `
Hi, I'm Marcel
Software Developer @ SAP Innovation Center
Information Systems Management
Master Graduate from Technical University of Berlin
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" slug="/" description={SEODescription}></SEO>
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
        <h1>Software Developer @ SAP Innovation Center</h1>

        <h1>
          Information Systems Management
          <br />
          Master Graduate from Technical University of Berlin
        </h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-5">
          <OutboundLink
            href="https://github.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={32}
              height={32}
              src="../images/github.png"
              alt="GitHub Icon"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/marcelreppi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={32}
              height={32}
              src="../images/linkedin.png"
              alt="LinkedIn Icon"
            />
          </OutboundLink>
          <OutboundLink
            href="https://twitter.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={32}
              height={32}
              src="../images/twitter.png"
              alt="Twitter Icon"
            />
          </OutboundLink>
        </div>

        {/* Other Links */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:items-center sm:space-x-10 sm:space-y-0">
          <div className="flex items-center">
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={20}
              height={20}
              className="mr-2"
              src="../images/mail.png"
              alt="Mail Icon"
            />
            <OutboundLink className="break-all link" href="mailto:marcelreppi@gmail.com">
              marcelreppi@gmail.com
            </OutboundLink>
          </div>
          <div className="flex items-center">
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={20}
              height={20}
              className="mr-2"
              src="../images/homepage.png"
              alt="Homepage Icon"
            />
            <OutboundLink className="break-all link" href="https://marcelreppi.com">
              marcelreppi.com
            </OutboundLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
