import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import NPMPackage from "../components/NPMPackage";
import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";

import sensafetyLogo from "@/images/sensafety-logo.png";
import sensafetyPic1 from "@/images/sen-1.jpg";
import sensafetyPic2 from "@/images/sen-2.jpg";
import sensafetyPic3 from "@/images/sen-3.jpg";
import sensafetyPic4 from "@/images/sen-4.jpg";
import sensafetyPic5 from "@/images/sen-5.jpg";

import moodleBuddyPic1 from "@/images/mb-1.png";
import moodleBuddyPic2 from "@/images/mb-2.png";
import moodleBuddyPic3 from "@/images/mb-3.png";

import wordchainLogo from "@/images/wordchain.png";

export const Portfolio: React.FC = () => {
  return (
    <Layout pageTitle="Portfolio">
      <div className="page-title">Portfolio</div>
      <div className="space-y-12">
        <div>
          <SectionTitle text="Projects" />
          <div className="grid grid-cols-1 gap-y-8 place-items-center lg:grid-cols-2 lg:gap-x-8">
            <div className="w-full h-full max-w-xl overflow-hidden rounded-lg shadow-custom">
              <a
                href="https://sensafety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 py-1 bg-gradient-to-r from-sen1 to-sen2 umami--click--sensafety-portfolio"
              >
                <Image
                  quality={100}
                  layout="fixed"
                  placeholder="blur"
                  height={50}
                  objectFit="contain"
                  alt="SenSafety Logo"
                  src={sensafetyLogo}
                />
              </a>
              <div className="p-5 space-y-3 flex flex-col flex-grow">
                <div className="text-xl leading-6 text-center">
                  Mobile crowdsourcing platform for perceived safety of urban citizens. The data is
                  aggregated and can be used by municipalities to evaluate how perceived safety
                  changes over time and how additional infrastructure impacts the perceived safety.
                </div>
                <div className="flex flex-grow items-end">
                  <Carousel
                    images={[
                      sensafetyPic1,
                      sensafetyPic2,
                      sensafetyPic3,
                      sensafetyPic4,
                      sensafetyPic5,
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-full max-w-xl overflow-hidden rounded-lg shadow-custom">
              <a
                href="https://moodlebuddy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 py-1 bg-mb umami--click--moodlebuddy-portfolio"
              >
                <span className="text-2xl font-bold text-white">MoodleBuddy</span>
              </a>
              <div className="p-5 space-y-3 flex flex-col flex-grow">
                <div className="text-xl leading-6 text-center">
                  Cross-platform browser plugin that offers mass download and notification
                  functionality for the <b>Moodle</b> learning management platform.
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <a
                    className="flex flex-wrap justify-center space-x-1 space-y-1 umami--click--moodlebuddy-chrome-stats"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chrome.google.com/webstore/detail/moodle-buddy/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                  >
                    <img
                      className="mt-1"
                      src="https://img.shields.io/chrome-web-store/v/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Version"
                    />
                    <img
                      src="https://img.shields.io/chrome-web-store/users/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Users"
                    />
                    <img
                      src="https://img.shields.io/chrome-web-store/rating/nomahjpllnbcpbggnpiehiecfbjmcaeo"
                      alt="Ratings"
                    />
                  </a>
                  <a
                    className="flex flex-wrap justify-center space-x-1 space-y-1 umami--click--moodlebuddy-firefox-stats"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://addons.mozilla.org/en-US/firefox/addon/moodle-buddy/"
                  >
                    <img
                      className="mt-1"
                      src="https://img.shields.io/amo/v/moodle-buddy"
                      alt="Version"
                    />
                    <img src="https://img.shields.io/amo/users/moodle-buddy" alt="Users" />
                    <img src="https://img.shields.io/amo/rating/moodle-buddy" alt="Ratings" />
                  </a>
                </div>
                <div className="flex flex-grow items-end">
                  <Carousel images={[moodleBuddyPic1, moodleBuddyPic2, moodleBuddyPic3]} />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-full max-w-xl overflow-hidden rounded-lg shadow-custom">
              <a
                href="https://www.amazon.de/-/en/dp/B074CQL5NJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 py-1 bg-wordchain umami--click--wordchain-portfolio"
              >
                <span className="text-2xl font-bold text-white">Wordchain Alexa Skill</span>
              </a>
              <div className="p-5 space-y-3">
                <div className="text-xl leading-6 text-center">
                  Alexa skill to play the wordchain game where you must reply with words that start
                  with the last letter of Alexa's word.
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.amazon.de/-/en/dp/B074CQL5NJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3xl flex umami--click--wordchain-portfolio"
                  >
                    <Image
                      quality={100}
                      placeholder="blur"
                      height={200}
                      width={200}
                      alt="Wordchain Logo"
                      src={wordchainLogo}
                      className="rounded-2xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle text="npm packages" />
          <div className="grid grid-cols-1 gap-y-8 place-items-center lg:grid-cols-2 lg:gap-x-8">
            <NPMPackage
              name="shape2geohash"
              description="Turns any GeoJSON shape into a list of geohashes"
            ></NPMPackage>
            <NPMPackage
              name="purposize"
              description={
                <span>
                  <a className="link" href="http://docs.sequelizejs.com/">
                    Sequelize
                  </a>{" "}
                  plugin to help with GDPR-compliant data storage
                </span>
              }
            ></NPMPackage>
          </div>
        </div>

        <div className="space-y-6 text-2xl text-center">
          <div>More is coming!</div>
          <div>
            <span role="img" aria-label="show-up">
              ☝( ◠‿◠ )☝
            </span>
          </div>
          <div>＼（＾▽＾）／</div>
          <div>◕‿◕</div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
