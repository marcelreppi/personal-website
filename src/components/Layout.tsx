import React, { useState } from "react"
import { NavBar } from "./NavBar"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen)

  return (
    <div className={`${mobileMenuIsOpen ? "fixed" : ""}`}>
      <NavBar
        mobileMenuIsOpen={mobileMenuIsOpen}
        toggleMobileMenu={toggleMobileMenu}
      ></NavBar>
      <div className="max-w-4.5xl w-full mx-auto px-7">{children}</div>
      <footer className="mb-10"></footer>
    </div>
  )
}
