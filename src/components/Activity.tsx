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
          quality={100}
          layout="fixed"
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/work.png"
          alt="Work icon"
        />
      )
    case "tutor":
      return (
        <StaticImage
          quality={100}
          layout="fixed"
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/tutor.png"
          alt="Tutor icon"
        />
      )
    case "degree":
      return (
        <StaticImage
          quality={100}
          layout="fixed"
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/degree.png"
          alt="Degree icon"
        />
      )
    case "publication":
      return (
        <StaticImage
          quality={100}
          layout="fixed"
          placeholder="blurred"
          width={20}
          height={20}
          src="../images/publication.png"
          alt="Publication icon"
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
        <div className="">{getActivityIcon(type)}</div>
        <div className="text-lg medium-font">{title}</div>
      </div>
      {location ? (
        <div className="flex items-center space-x-2">
          <div>
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={20}
              height={20}
              src="../images/location.png"
              alt="Location icon"
            />
          </div>
          <div>{location}</div>
        </div>
      ) : null}
      {duration ? (
        <div className="flex items-center space-x-2">
          <div>
            <StaticImage
              quality={100}
              layout="fixed"
              placeholder="blurred"
              width={20}
              height={20}
              src="../images/duration.png"
              alt="Duration icon"
            />
          </div>
          <div>{duration}</div>
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
