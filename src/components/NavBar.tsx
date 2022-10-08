import NextLink from "next/link";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavBarItem {
  name: string;
  href: string;
}
const navBarItems: Array<NavBarItem> = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Resumé",
    href: "/resume",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Web Navbar */}
      <nav className="items-center justify-around hidden max-w-4xl mx-auto pt-24 pb-14 text-2xl sm:flex">
        {navBarItems.map(({ name, href }) => {
          const active = router.pathname === href;
          return (
            <div
              className={`hover:text-highlight hover:cursor-pointer ${
                active ? "text-highlight" : ""
              }`}
              key={href}
            >
              <Link href={href}>{name}</Link>
            </div>
          );
        })}
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="fixed bottom-5 right-5 z-50 p-2 rounded-full shadow-btn bg-highlight">
          <Hamburger
            color="#FFF"
            toggled={mobileMenuOpen}
            toggle={setMobileMenuOpen}
            rounded
            label="Show menu"
          ></Hamburger>
        </div>
        <nav
          className={`fixed top-0 left-0 flex flex-col w-screen h-screen bg-white z-40 items-center justify-center transition-all transform ${
            mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
          // className={` flex flex-col w-full h-full bg-white z-10 items-center justify-center ${
          //   mobileMenuOpen ? "absolute" : "hidden"
          // }`}
        >
          {navBarItems.map((x, i) => {
            return (
              <NextLink href={x.href} key={i}>
                <a
                  className={`py-2 my-1 text-xl transition-colors border-b-2 border-white link--underline`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {x.name}
                </a>
              </NextLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
