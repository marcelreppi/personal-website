import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface NavBarItemProps {
  active: boolean
}
const NavBarItem: React.FC<NavBarItemProps> = ({ active, children }) => {
  return (
    <div
      className={`hover:text-highlight hover:cursor-pointer ${
        active ? "text-highlight" : ""
      }`}
    >
      {children}
    </div>
  )
}

export const NavBar: React.FC = ({}) => {
  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth <= 480
  }
  const [showMobileNavBar, setShowMobileNavBar] = useState(isMobile())

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileNavBar(isMobile())
    })
  })

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen)

  interface NBItem {
    path: string
    name: string
  }
  const navBarItems: Array<NBItem> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Resumé",
      path: "/resume",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
  ]

  const openMobileMenu = (
    <div className="absolute w-full h-full bg-white z-10">
      <div className="flex justify-end m-5">
        <StaticImage
          placeholder="blurred"
          width={48}
          height={48}
          alt="Menu open"
          src="../images/menu-open.svg"
          onClick={toggleMobileMenu}
          loading="eager"
        />
      </div>
      <nav className="flex flex-col items-center text-2xl space-y-5">
        {navBarItems.map(({ name, path }) => (
          <NavBarItem key={name} active={window.location.pathname === path}>
            <Link to={path}>{name}</Link>
          </NavBarItem>
        ))}
      </nav>
    </div>
  )
  const closedMobileMenu = (
    <div className="flex justify-end m-5">
      <StaticImage
        placeholder="blurred"
        width={48}
        height={48}
        alt="Menu closed"
        src="../images/menu-closed.svg"
        onClick={toggleMobileMenu}
        loading="eager"
      />
    </div>
  )
  const mobileNavBar = mobileMenuIsOpen ? openMobileMenu : closedMobileMenu

  const regularNavBar = (
    <nav className="container max-w-5xl mx-auto mt-24 mb-10 flex justify-around items-center text-2xl">
      {navBarItems.map(({ name, path }) => (
        <NavBarItem key={name} active={window.location.pathname === path}>
          <Link to={path}>{name}</Link>
        </NavBarItem>
      ))}
    </nav>
  )
  return showMobileNavBar ? mobileNavBar : regularNavBar
}
