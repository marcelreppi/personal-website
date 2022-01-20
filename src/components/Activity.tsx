import Image from "next/image"
import React, { useState } from "react"
// import styled from "styled-components"

import workIcon from "../../public/images/work.png"
import tutorIcon from "../../public/images/tutor.png"
import degreeIcon from "../../public/images/degree.png"
import publicationIcon from "../../public/images/publication.png"
import locationIcon from "../../public/images/location.png"
import calendarIcon from "../../public/images/calendar.png"

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
        <Image quality={100} layout="fixed" width={20} height={20} src={workIcon} alt="Work icon" />
      )
    case "tutor":
      return (
        <Image
          quality={100}
          layout="fixed"
          width={20}
          height={20}
          src={tutorIcon}
          alt="Tutor icon"
        />
      )
    case "degree":
      return (
        <Image
          quality={100}
          layout="fixed"
          width={20}
          height={20}
          src={degreeIcon}
          alt="Degree icon"
        />
      )
    case "publication":
      return (
        <Image
          quality={100}
          layout="fixed"
          width={20}
          height={20}
          src={publicationIcon}
          alt="Publication icon"
        />
      )
    default:
      return { workIcon }
  }
}

// interface ArrowProps {
//   rotate: number
// }

// const Arrow = styled.div<ArrowProps>`
//   margin-right: 8px;
//   margin-left: -3px;
//   width: 8px;
//   height: 8px;
//   border-top: 2px solid black;
//   border-right: 2px solid black;

//   transition: all 0.5s;
//   transform: ${(props) => (props.rotate === 1 ? "rotate(135deg)" : "rotate(45deg)")};
//   margin-top: ${(props) => (props.rotate === 1 ? "-6px" : "0px")};
// `

const Activity: React.FC<ActivityProps> = ({ type, title, location, duration, details }) => {
  const [showDetails, setShowDetails] = useState(false)
  const toggleDetails = () => setShowDetails(!showDetails)

  return (
    <div className="pt-4 pb-4 space-y-2 first:pt-0 last:pb-0">
      <div className="flex items-center space-x-2 ">
        <div className="">{getActivityIcon(type)}</div>
        <div className="text-lg medium-font">{title}</div>
      </div>
      {location ? (
        <div className="flex items-center space-x-2">
          <div>
            <Image
              quality={100}
              layout="fixed"
              width={20}
              height={20}
              src={locationIcon}
              alt="Location icon"
            />
          </div>
          <div>{location}</div>
        </div>
      ) : null}
      {duration ? (
        <div className="flex items-center space-x-2">
          <div>
            <Image
              quality={100}
              layout="fixed"
              width={20}
              height={20}
              src={calendarIcon}
              alt="Calendar icon"
            />
          </div>
          <div>{duration}</div>
        </div>
      ) : null}
      {details ? (
        <div className="ml-8">
          <div className="flex items-center cursor-pointer" onClick={toggleDetails}>
            {/* <Arrow rotate={showDetails ? 1 : 0}></Arrow> */}
            <div className="text-gray-500 select-none">{showDetails ? "Less" : "More"} details</div>
          </div>
          <ul className={`list-disc list-inside ${showDetails ? "" : "hidden"}`}>
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default Activity
