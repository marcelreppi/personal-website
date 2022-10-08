import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import Image from "next/image";

import githubIcon from "@/images/github.png";
import linkedinIcon from "@/images/linkedin.png";
import twitterIcon from "@/images/twitter.png";
import mailIcon from "@/images/mail.png";

import { linkToUncryptMailTo } from "../helpers/uncryptMailTo";
import Layout from "../components/Layout";
import JFrogLogo from "../components/JFrogLogo";

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
        <h1 className="flex flex-col items-center space-y-2">
          <span>Full Stack Developer</span>
          <span>@</span>
          <div className="w-28 h-28">
            <a
              href="https://jfrog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--jfrog-logo"
            >
              <JFrogLogo />
            </a>
          </div>
        </h1>

        <h1>
          Information Systems Management
          <br />
          Master Graduate from Technical University of Berlin
        </h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-5">
          <a
            href="https://github.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--github"
          >
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
            className="umami--click--linkedin"
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
          <a
            href="https://twitter.com/marcelreppi"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--twitter"
          >
            <Image
              quality={100}
              layout="fixed"
              width={32}
              height={32}
              src={twitterIcon}
              alt="Twitter Icon"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer umami--click--mail"
            onClick={linkToUncryptMailTo}
          >
            <Image
              quality={100}
              layout="fixed"
              width={32}
              height={32}
              src={mailIcon}
              alt="Mail Icon"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
