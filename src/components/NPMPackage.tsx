import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"

interface NPMPackageProps {
  name: string
  description: string | React.ReactNode
}

export const NPMPackage: React.FC<NPMPackageProps> = ({
  name,
  description,
}) => {
  return (
    <div className="flex flex-col items-center w-full h-full max-w-xl p-6 overflow-hidden rounded-lg shadow-custom">
      <OutboundLink
        className="w-full h-14 flex justify-center items-center text-white text-1.5xl bg-npm rounded mb-5 p-3 hover:text-2xl transition-fontSize"
        href={`https://www.npmjs.com/package/${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </OutboundLink>
      <div className="text-xl leading-6 text-center">{description}</div>
      <OutboundLink
        className="flex items-end flex-grow"
        href={`https://nodei.co/npm/${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mt-5"
          alt="package summary"
          src={`https://nodei.co/npm/${name}.png`}
        />
      </OutboundLink>
    </div>
  )
}
