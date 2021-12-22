import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { Activity } from "../components/Activity"
import { Layout } from "../components/Layout"
import { SectionTitle } from "../components/SectionTitle"
import { SEO } from "../components/SEO"

export const Resume: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="Resumé" slug="/resume"></SEO>
      <div className="page-title">Resumé</div>
      <div className="mb-10 -mt-12 text-center">
        <OutboundLink
          href="cv.pdf"
          className="text-highlight hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </OutboundLink>
      </div>
      <div className="space-y-10">
        <SectionTitle>Experience</SectionTitle>
        <div className="divide-y-1">
          <Activity
            type="work"
            title={
              <div>
                Software Developer at{" "}
                <OutboundLink
                  className="link"
                  href="https://icn.sap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAP Innovation Center Potsdam
                </OutboundLink>
              </div>
            }
            location="Potsdam"
            duration="04/2021 - today"
            details={[
              "Fullstack development of cloud native applications in a modern cross-functional agile team",
              "Driving innovative strategic projects and cloud transformation of cross-product solutions",
              "JavaScript, TypeScript, Node.js, Vue.js, Kotlin, Java, Spring Boot, CI/CD, Docker, K8s, Cloud Foundry, SQL, git",
            ]}
          />
          <Activity
            type="work"
            title={
              <div>
                Mobile/Web Developer at{" "}
                <OutboundLink
                  className="link"
                  href="https://sensafety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SenSafety
                </OutboundLink>
              </div>
            }
            location="Technical University of Berlin"
            duration="04/2019 - 10/2019"
            details={[
              "Mobile crowdsourcing platform for perceived safety of urban citizens",
              "Agile development in a multi-cultural team on a user-centered, modern and performant application",
              "App development with React Native and Firebase",
              <span>
                Implementation of{" "}
                <OutboundLink
                  href="https://sensafety.org/map.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  statistics dashboard and live map
                </OutboundLink>{" "}
                with real-time popups
              </span>,
            ]}
          />
          <Activity
            type="tutor"
            title="Student Tutor"
            location="Technical University of Berlin"
            duration="04/2016 - 04/2017"
            details={[
              "Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)",
              "Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical Foundations of Computer Science)",
            ]}
          />
        </div>

        <div>
          <SectionTitle>Publications</SectionTitle>
          <div className="divide-y-1">
            <Activity
              type="publication"
              title={
                <OutboundLink
                  className="link"
                  href="https://www.researchgate.net/publication/340269152_Towards_application-layer_purpose-based_access_control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Towards Application-Layer Purpose-Based Access Control
                </OutboundLink>
              }
            />

            <Activity
              type="publication"
              title={
                <OutboundLink
                  className="link"
                  href="https://www.researchgate.net/publication/337068653_Sensafety_Crowdsourcing_the_Urban_Sense_of_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sensafety: Crowdsourcing the Urban Sense of Safety
                </OutboundLink>
              }
            />
          </div>
        </div>

        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="divide-y-1">
            <Activity
              type="degree"
              title="Master Information Systems Management (Grade: 1.2)"
              location="Technical University of Berlin"
              duration="04/2018 - 10/2020"
              details={[
                "Master Thesis: „Traffic Simulation for an Air Pollution-aware Toll System with Dynamic Charging” (Grade: 1.0)",
              ]}
            />

            <Activity
              type="degree"
              title="Bachelor Wirtschaftsinformatik (Grade: 1.8)"
              location="Technical University of Berlin"
              duration="10/2014 - 03/2018"
              details={[
                "Certificate for being honoured as part of the best students in my year",
                "Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability Offering” (Grade: 1.3)",
              ]}
            />

            <Activity
              type="degree"
              title="Abitur (Grade: 1.3)"
              location="Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual
            Highschool (German-English))"
              duration="2007 - 2013"
              details={["Major subjects: English and Physics"]}
            />

            <Activity
              type="degree"
              title="Quentin Blake Europeschool (Bilingual Primary School
            (German-English))"
              location="Berlin"
              duration="2001 - 2007"
            />
          </div>
        </div>

        <div>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap">
            <div className="badge">Fullstack Development</div>
            <div className="badge">NodeJS</div>
            <div className="badge">TypeScript</div>
            <div className="badge">Python</div>
            <div className="badge">Kotlin</div>
            <div className="badge">Java</div>
            <div className="badge">Spring Boot</div>
            <div className="badge">React</div>
            <div className="badge">Vue</div>
            <div className="badge">DevOps</div>
            <div className="badge">Docker</div>
            <div className="badge">Kubernetes</div>
            <div className="badge">Jenkins</div>
            <div className="badge">GitHub Actions</div>
            <div className="badge">AWS</div>
            <div className="badge">PostgreSQL</div>
            <div className="badge">MySQL</div>
            <div className="badge">MongoDB</div>
            <div className="badge">SQLite</div>
            <div className="badge">Traffic Simulation with SUMO</div>
            <div className="badge">Browser Extensions</div>
            <div className="badge">Alexa Skills</div>
          </div>
        </div>

        <div>
          <SectionTitle>Traits</SectionTitle>
          <div className="flex flex-wrap">
            <div className="badge">Highly motivated</div>
            <div className="badge">Adaptable</div>
            <div className="badge">Fast learner</div>
            <div className="badge">Passionate</div>
            <div className="badge">Curious</div>
            <div className="badge">Team spirit</div>
            <div className="badge">Agile, independent and determined way of working</div>
          </div>
        </div>

        <div>
          <SectionTitle>Interests</SectionTitle>
          <div className="flex flex-wrap">
            <div className="badge">Piano</div>
            <div className="badge">Traveling</div>
            <div className="badge">Programming</div>
            <div className="badge">Wakeboarding</div>
            <div className="badge">Longboarding</div>
            <div className="badge">Board Games</div>
            <div className="badge">Origami</div>
            <div className="badge">Running</div>
            <div className="badge">Rope Jumping</div>
            <div className="badge">Hiking</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
