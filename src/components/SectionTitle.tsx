import React from "react"

export const SectionTitle: React.FC = ({ children }) => (
  <div className="text-highlight text-xl medium-font tracking-wider mb-8">
    {children}
    <div className="w-38 h-0.75 mt-1 bg-highlight"></div>
  </div>
)
