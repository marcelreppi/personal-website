import React from "react"

export const SectionTitle: React.FC = ({ children }) => (
  <div className="mb-8 text-xl tracking-wider text-highlight medium-font">
    {children}
    <div className="w-38 h-0.75 mt-1 bg-highlight"></div>
  </div>
)
