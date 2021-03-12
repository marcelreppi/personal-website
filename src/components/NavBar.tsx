import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

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
  mobileMenuIsOpen: boolean
  toggleMobileMenu: () => void
}
export const NavBar: React.FC<NavBarProps> = ({
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

  return (
    <>
      {/* Regular NavBar */}
      <nav className="hidden sm:flex container max-w-5xl mx-auto mt-24 mb-10 justify-around items-center text-2xl">
        {navBarItems}
      </nav>

      {/* Mobile NavBar */}
      <div
        className={`block sm:hidden w-full h-full bg-white ${
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
            alt="Open menu"
            src="../images/menu-open.png"
            onClick={toggleMobileMenu}
            loading="eager"
            quality={100}
          />
          <StaticImage
            layout="fixed"
            className={`${mobileMenuIsOpen ? "hidden" : ""}`}
            placeholder="blurred"
            width={48}
            height={48}
            alt="Closed menu"
            src="../images/menu-closed.png"
            onClick={toggleMobileMenu}
            loading="eager"
            quality={100}
          />
        </div>
        <nav
          className={`${
            mobileMenuIsOpen ? "flex" : "hidden"
          } flex-col items-center text-2xl space-y-5`}
        >
          {navBarItems}
        </nav>
      </div>
    </>
  )
}
