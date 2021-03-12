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
  interface Route {
    path: string
    name: string
  }
  const routes: Array<Route> = [
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
  const navBarItems = routes.map(({ name, path }) => {
    const active =
      typeof window !== "undefined" && window.location.pathname === path
    return (
      <NavBarItem key={name} active={active}>
        <Link to={path}>{name}</Link>
      </NavBarItem>
    )
  })

  const mobileNavBar = (
    <div
      className={`w-full h-full bg-white ${
        mobileMenuIsOpen ? "absolute z-10" : ""
      }`}
    >
      <div className="flex justify-end m-5">
        <StaticImage
          layout="fixed"
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
          layout="fixed"
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
      <nav className="flex flex-col items-center text-2xl space-y-5">
        {mobileMenuIsOpen ? navBarItems : null}
      </nav>
    </div>
  )

  const regularNavBar = (
    <nav className="container max-w-5xl mx-auto mt-24 mb-10 flex justify-around items-center text-2xl">
      {navBarItems}
    </nav>
  )
  return mobile ? mobileNavBar : regularNavBar
}
