import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import MenuClosedIcon from "../images/menu-closed.png"
import MenuOpenIcon from "../images/menu-open.png"

interface NavBarProps {}

const NavBarItem: React.FC = ({ children }) => {
  return (
    <div className="hover:text-highlight hover:cursor-pointer">{children}</div>
  )
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const isMobile = () => window.innerWidth <= 480
  const [showMobileNavBar, setShowMobileNavBar] = useState(isMobile())
  window.addEventListener("resize", () => {
    setShowMobileNavBar(isMobile())
  })

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen)

  const openMobileMenu = (
    <div className="absolute w-full h-full bg-white z-10">
      <div className="flex justify-end m-5">
        <img
          className="w-12 h-12"
          src={MenuOpenIcon}
          onClick={toggleMobileMenu}
        />
      </div>
      <nav className="flex flex-col items-center text-2xl space-y-5">
        <NavBarItem>
          <Link to="/">Home</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/about">About</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/resume">Resumé</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/portfolio">Portfolio</Link>
        </NavBarItem>
      </nav>
    </div>
  )
  const closedMobileMenu = (
    <div className="flex justify-end m-5">
      <img
        className="w-12 h-12"
        src={MenuClosedIcon}
        onClick={toggleMobileMenu}
      />
    </div>
  )
  const mobileNavBar = mobileMenuIsOpen ? openMobileMenu : closedMobileMenu

  const regularNavBar = (
    <nav className="container max-w-5xl mx-auto mt-24 mb-10 flex justify-around items-center text-2xl">
      <NavBarItem>
        <Link to="/">Home</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/about">About</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/resume">Resumé</Link>
      </NavBarItem>
      <NavBarItem>
        <Link to="/portfolio">Portfolio</Link>
      </NavBarItem>
    </nav>
  )
  return showMobileNavBar ? mobileNavBar : regularNavBar
}
