import React from "react"
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

export const Activity: React.FC<ActivityProps> = ({
  type,
  title,
  location,
  duration,
  details,
}) => {
  let activityIcon
  switch (type) {
    case "work":
      activityIcon = WorkIcon
      break
    case "tutor":
      activityIcon = TutorIcon
      break
    case "degree":
      activityIcon = DegreeIcon
      break
    case "publication":
      activityIcon = PublicationIcon
    default:
      break
  }
  return (
    <div className="space-y-2">
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
    </div>
  )
}
