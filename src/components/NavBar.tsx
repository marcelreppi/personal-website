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

interface NavBarProps {
  mobile: boolean
  mobileMenuIsOpen: boolean
  toggleMobileMenu: () => void
}
export const NavBar: React.FC<NavBarProps> = ({
  mobile,
  mobileMenuIsOpen,
  toggleMobileMenu,
}) => {
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

  const mobileNavBar = (
    <div
      className={`w-full h-full bg-white ${
        mobileMenuIsOpen ? "absolute z-10" : ""
      }`}
    >
      <div className="flex justify-end m-5">
        <StaticImage
          className={`${mobileMenuIsOpen ? "" : "hidden"}`}
          placeholder="blurred"
          width={48}
          height={48}
          alt="Menu open"
          src="../images/menu-open.svg"
          onClick={toggleMobileMenu}
          loading="eager"
        />
        <StaticImage
          className={`${mobileMenuIsOpen ? "hidden" : ""}`}
          placeholder="blurred"
          width={48}
          height={48}
          alt="Menu closed"
          src="../images/menu-closed.svg"
          onClick={toggleMobileMenu}
          loading="eager"
        />
      </div>
      {mobileMenuIsOpen ? (
        <nav className="flex flex-col items-center text-2xl space-y-5">
          {navBarItems.map(({ name, path }) => (
            <NavBarItem key={name} active={window.location.pathname === path}>
              <Link to={path}>{name}</Link>
            </NavBarItem>
          ))}
        </nav>
      ) : null}
    </div>
  )

  const regularNavBar = (
    <nav className="container max-w-5xl mx-auto mt-24 mb-10 flex justify-around items-center text-2xl">
      {navBarItems.map(({ name, path }) => (
        <NavBarItem key={name} active={window.location.pathname === path}>
          <Link to={path}>{name}</Link>
        </NavBarItem>
      ))}
    </nav>
  )
  return mobile ? mobileNavBar : regularNavBar
}
