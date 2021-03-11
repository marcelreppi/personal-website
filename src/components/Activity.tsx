import React, { useState } from "react"
import styled from "styled-components"
import WorkIcon from "../images/work.png"
import LocationIcon from "../images/location.png"
import DurationIcon from "../images/duration.png"
import TutorIcon from "../images/tutor.png"
import DegreeIcon from "../images/degree.png"
import PublicationIcon from "../images/publication.png"

interface ActivityProps {
  type: "work" | "tutor" | "degree" | "publication"
  title: string | React.ReactNode
  location?: string
  duration?: string
  details?: Array<string | React.ReactNode>
}

function getActivityIcon(type: ActivityProps["type"]) {
  switch (type) {
    case "work":
      return WorkIcon
    case "tutor":
      return TutorIcon
    case "degree":
      return DegreeIcon
    case "publication":
      return PublicationIcon
    default:
      return WorkIcon
  }
}

interface ArrowProps {
  rotate: boolean
}

const Arrow = styled.div<ArrowProps>`
  margin-right: 8px;
  margin-left: -3px;
  width: 8px;
  height: 8px;
  border-top: 2px solid black;
  border-right: 2px solid black;

  transition: all 0.5s;
  transform: ${(props) => (props.rotate ? "rotate(135deg)" : "rotate(45deg)")};
  margin-top: ${(props) => (props.rotate ? "-6px" : "0px")};
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

  let activityIcon = getActivityIcon(type)

  return (
    <div className="space-y-2 pt-4 pb-4 first:pt-0 last:pb-0">
      <div className="flex items-center space-x-2 ">
        <img className="w-5 h-5" src={activityIcon} alt="" />
        <span className="text-lg medium-font">{title}</span>
      </div>
      {location ? (
        <div className="flex items-center space-x-2">
          <img className="w-5 h-5" src={LocationIcon} alt="" />
          <span>{location}</span>
        </div>
      ) : null}
      {duration ? (
        <div className="flex items-center space-x-2">
          <img className="w-5 h-5" src={DurationIcon} alt="" />
          <span>{duration}</span>
        </div>
      ) : null}
      {details ? (
        <div className="ml-8">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDetails}
          >
            <Arrow rotate={showDetails ? true : false}></Arrow>
            <div className="text-gray-500 select-none">
              {showDetails ? "Less" : "More"} details
            </div>
          </div>
          <ul
            className={`list-disc list-inside ${showDetails ? "" : "hidden"}`}
          >
            {details.map((detail) => (
              <li>
                <span className="-ml-2">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
