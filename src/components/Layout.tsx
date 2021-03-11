import React from "react"
import { NavBar } from "./NavBar"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-4.5xl w-full mx-auto px-5">{children}</div>
      <footer className="mb-10"></footer>
    </>
  )
}
