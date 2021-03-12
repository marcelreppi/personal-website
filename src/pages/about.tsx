import React from "react"
import { Layout } from "../components/Layout"
import { PageTitle } from "../components/PageTitle"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/SEO"

const SEODescription = `
Hi, my name is Marcel Reppenhagen 🙋‍♂️👋

I am a curious person with a passion for programming, web technologies and ☁️-computing. I love exploring today's ever-evolving technologies and continuously learn new things. 💡
`

export const About: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="About" slug="/about" description={SEODescription}></SEO>
      <PageTitle>About</PageTitle>
      <div className="flex flex-col items-center space-y-10">
        <StaticImage
          placeholder="blurred"
          src="../images/me.jpg"
          alt="Profile picture"
          width={256}
          height={256}
          className="rounded-lg shadow-custom"
        />
        <div className="space-y-6 text-lg">
          <p>
            Hi, my name is Marcel Reppenhagen{" "}
            <span role="img" aria-label="waving-man">
              🙋‍♂️
            </span>
            <span role="img" aria-label="waving-hand">
              👋
            </span>
          </p>
          <p>
            I am a curious person with a passion for programming, web
            technologies and{" "}
            <span role="img" aria-label="cloud">
              ☁️
            </span>
            -computing. I love exploring today's ever-evolving technologies and
            continuously learn new things.{" "}
            <span role="img" aria-label="book">
              💡
            </span>
          </p>
          <p>
            My hometown is Berlin, where I have recently completed my masters
            degree in <b>Infomation Systems Management</b> at the{" "}
            <b>Technical University of Berlin</b>.{" "}
            <span role="img" aria-label="student">
              👨‍🎓
            </span>
          </p>
          <p>
            In my freetime I like to get outside, go running, hang out with
            friends or cruise on my longboard. If the weather allows, I
            occasionally go wakeboarding too.{" "}
            <span role="img" aria-label="surfer">
              🏄‍
            </span>
            <br />I also enjoy playing the piano or destroying friendships with
            board games.{" "}
            <span role="img" aria-label="laughing-smiley">
              😄
            </span>
          </p>
          <p>
            Oh, and I LOVE to travel!{" "}
            <span role="img" aria-label="heart-eyed-smiley">
              😍
            </span>
            <span role="img" aria-label="world">
              🌍
            </span>
          </p>
          <p>
            Feel free to contact me! I love meeting new people!{" "}
            <span role="img" aria-label="smiling-smiley">
              😊
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
