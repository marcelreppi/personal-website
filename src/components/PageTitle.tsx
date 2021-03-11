import React from "react"

export const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="w-full medium-font text-center text-highlight text-3.5xl mb-12">
      {children}
    </h1>
  )
}
