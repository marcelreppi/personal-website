import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

interface ActivityProps {
  type: "work" | "tutor" | "degree" | "publication"
  title: string | React.ReactNode
  location?: string
  duration?: string
  details?: Array<string | React.ReactNode>
}

function getActivityIcon(type: ActivityProps["type"]): React.ReactNode {
  switch (type) {
    case "work":
      return (
        <StaticImage
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/work.png"
          alt=""
        />
      )
    case "tutor":
      return (
        <StaticImage
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/tutor.png"
          alt=""
        />
      )
    case "degree":
      return (
        <StaticImage
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/degree.png"
          alt=""
        />
      )
    case "publication":
      return (
        <StaticImage
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/publication.png"
          alt=""
        />
      )
    default:
      return "../images/work.png"
  }
}

interface ArrowProps {
  rotate: number
}

const Arrow = styled.div<ArrowProps>`
  margin-right: 8px;
  margin-left: -3px;
  width: 8px;
  height: 8px;
  border-top: 2px solid black;
  border-right: 2px solid black;

  transition: all 0.5s;
  transform: ${(props) =>
    props.rotate === 1 ? "rotate(135deg)" : "rotate(45deg)"};
  margin-top: ${(props) => (props.rotate === 1 ? "-6px" : "0px")};
`

export const Activity: React.FC<ActivityProps> = ({
  type,
  title,
  location,
  duration,
  details,
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const toggleDetails = () => setShowDetails(!showDetails)

  return (
    <div className="space-y-2 pt-4 pb-4 first:pt-0 last:pb-0">
      <div className="flex items-center space-x-2 ">
        {getActivityIcon(type)}
        <span className="text-lg medium-font">{title}</span>
      </div>
      {location ? (
        <div className="flex items-center space-x-2">
          <StaticImage
            placeholder="blurred"
            width={20}
            height={20}
            src="../images/location.png"
            alt=""
          />
          <span>{location}</span>
        </div>
      ) : null}
      {duration ? (
        <div className="flex items-center space-x-2">
          <StaticImage
            placeholder="blurred"
            width={20}
            height={20}
            src="../images/duration.png"
            alt=""
          />
          <span>{duration}</span>
        </div>
      ) : null}
      {details ? (
        <div className="ml-8">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDetails}
          >
            <Arrow rotate={showDetails ? 1 : 0}></Arrow>
            <div className="text-gray-500 select-none">
              {showDetails ? "Less" : "More"} details
            </div>
          </div>
          <ul
            className={`list-disc list-inside ${showDetails ? "" : "hidden"}`}
          >
            {details.map((detail, i) => (
              <li key={i}>
                <span className="-ml-2">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
