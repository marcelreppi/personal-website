import { Link } from "gatsby"
import React from "react"

interface NavBarProps {}

const NavBarItem: React.FC = ({ children }) => {
  return (
    <div className="hover:text-highlight hover:cursor-pointer">{children}</div>
  )
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav className="mt-24 mb-14 flex justify-center items-center text-2xl space-x-32 w-full max-w-4xl">
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
}
