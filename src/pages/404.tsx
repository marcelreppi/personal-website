import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { Layout } from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-5">
        <div className="text-4xl font-medium medium-font text-highlight">
          Error 404: Page not found!
        </div>
        <div className="space-y-3 text-center text">
          <p>Whoops!</p>
          <p>
            I don't know what you did there but I know what you should
            definitely do:
          </p>
          <p>
            Subscribe to{" "}
            <OutboundLink
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
              href="https://www.youtube.com/user/PewDiePie"
            >
              PewDiePie
            </OutboundLink>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
