import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import Image from "next/image";

import githubIcon from "@/images/github.png";
import linkedinIcon from "@/images/linkedin.png";
import twitterIcon from "@/images/twitter.png";
import mailIcon from "@/images/mail.png";
import homepageIcon from "@/images/homepage.png";

import { linkToUncryptMailTo } from "../helpers/uncryptMailTo";
import Layout from "../components/Layout";

const IndexPage: React.FC = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLDivElement | null>(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ["Hi, I'm Marcel"],
      typeSpeed: 120,
      showCursor: true,
    };

    if (el.current !== null) {
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  return (
    <Layout pageTitle="Home">
      <div className="flex flex-col items-center space-y-10">
        {/* Typer */}
        <div className="text-4xl text-highlight medium-font">
          <span ref={el}></span>
        </div>

        {/* Intro Text */}
        <h1>Software Developer @ SAP Innovation Center</h1>

        <h1>
          Information Systems Management
          <br />
          Master Graduate from Technical University of Berlin
        </h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-5">
          <a href="https://github.com/marcelreppi" target="_blank" rel="noopener noreferrer">
            <Image
              quality={100}
              layout="fixed"
              width={32}
              height={32}
              src={githubIcon}
              alt="GitHub Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marcelreppi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              quality={100}
              layout="fixed"
              width={32}
              height={32}
              src={linkedinIcon}
              alt="LinkedIn Icon"
            />
          </a>
          <a href="https://twitter.com/marcelreppi" target="_blank" rel="noopener noreferrer">
            <Image
              quality={100}
              layout="fixed"
              width={32}
              height={32}
              src={twitterIcon}
              alt="Twitter Icon"
            />
          </a>
        </div>

        {/* Other Links */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:items-center sm:space-x-10 sm:space-y-0">
          <div className="flex items-center">
            <Image
              quality={100}
              layout="fixed"
              width={20}
              height={20}
              src={mailIcon}
              alt="Mail Icon"
            />
            <a className="ml-2 break-all link hover:cursor-pointer" onClick={linkToUncryptMailTo}>
              marcelreppi@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Image
              quality={100}
              layout="fixed"
              width={20}
              height={20}
              src={homepageIcon}
              alt="Homepage Icon"
            />
            <a className="ml-2 break-all link hover:cursor-pointer" href="https://marcelreppi.com">
              marcelreppi.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
