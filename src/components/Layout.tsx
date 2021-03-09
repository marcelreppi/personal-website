import React from "react"
import { NavBar } from "./NavBar"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-5xl w-full mx-auto px-10">{children}</div>
      <footer className="mt-5"></footer>
    </>
  )
}
