import React, { useState } from "react"
import { useEffect } from "react"
import { NavBar } from "./NavBar"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = () => {
    if (typeof window === "undefined") {
      // Assume mobile by default
      return true
    }

    return window.innerWidth <= 480
  }
  const [showMobileView, setShowMobileView] = useState(isMobile())

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileView(isMobile())
    })
  })

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen)

  return (
    <div className={`${mobileMenuIsOpen ? "fixed" : ""}`}>
      <NavBar
        mobile={showMobileView}
        mobileMenuIsOpen={mobileMenuIsOpen}
        toggleMobileMenu={toggleMobileMenu}
      ></NavBar>
      <div className="max-w-4.5xl w-full mx-auto px-7">{children}</div>
      <footer className="mb-10"></footer>
    </div>
  )
}
