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
    <div className="max-w-xl w-full h-full shadow-custom rounded-lg overflow-hidden p-6 flex flex-col items-center">
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
        className="flex-grow flex items-end"
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
