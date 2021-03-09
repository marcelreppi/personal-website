import React from "react"
import { Activity } from "../components/Activity"
import { Layout } from "../components/Layout"
import { PageTitle } from "../components/PageTitle"
import ResumePDF from "../static/cv.pdf"

const SectionTitle: React.FC = ({ children }) => (
  <div className="text-highlight text-xl medium-font tracking-wider mb-8">
    {children}
    <div className="w-38 h-0.75 mt-1 bg-highlight"></div>
  </div>
)

const Badge: React.FC = ({ children }) => (
  <div className="border-highlight border-2 rounded-lg px-2 py-1 mr-3 mb-3">
    {children}
  </div>
)

export const Resume: React.FC = ({}) => {
  return (
    <Layout>
      <PageTitle>Resumé</PageTitle>
      <div className="text-center -mt-12 mb-10">
        <a
          href={ResumePDF}
          className="text-highlight"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
      <div className="space-y-10">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-5">
          <Activity
            type="work"
            title={
              <div>
                Mobile/Web Developer at{" "}
                <a
                  className="link"
                  href="https://sensafety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SenSafety
                </a>
              </div>
            }
            location="Technical University of Berlin"
            duration="04/2019 - 10/2019"
          />
          <hr></hr>
          <Activity
            type="tutor"
            title="Student Tutor"
            location="Technical University of Berlin"
            duration="04/2016 - 04/2017"
          />
        </div>

        <div>
          <SectionTitle>Publications</SectionTitle>
          <div className="space-y-5">
            <Activity
              type="publication"
              title={
                <a
                  className="link"
                  href="https://www.researchgate.net/publication/340269152_Towards_application-layer_purpose-based_access_control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Towards Application-Layer Purpose-Based Access Control
                </a>
              }
            />
            <hr></hr>
            <Activity
              type="publication"
              title={
                <a
                  className="link"
                  href="https://www.researchgate.net/publication/337068653_Sensafety_Crowdsourcing_the_Urban_Sense_of_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sensafety: Crowdsourcing the Urban Sense of Safety
                </a>
              }
            />
          </div>
        </div>

        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-5">
            <Activity
              type="degree"
              title="Master Information Systems Management (Grade: 1.2)"
              location="Technical University of Berlin"
              duration="04/2018 - 10/2020"
            />
            <hr></hr>
            <Activity
              type="degree"
              title="Bachelor Wirtschaftsinformatik (Grade: 1.8)"
              location="Technical University of Berlin"
              duration="10/2014 - 03/2018"
            />
            <hr></hr>
            <Activity
              type="degree"
              title="Abitur (Grade: 1.3)"
              location="Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual
            Highschool (German-English))"
              duration="2007 - 2013"
            />
            <hr></hr>
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
            <Badge>Fullstack Development</Badge>
            <Badge>NodeJS</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>Java</Badge>
            <Badge>React</Badge>
            <Badge>Vue</Badge>
            <Badge>DevOps</Badge>
            <Badge>Docker</Badge>
            <Badge>GitHub Actions</Badge>
            <Badge>AWS</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>MySQL</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Traffic Simulation with SUMO</Badge>
            <Badge>Alexa Skills</Badge>
          </div>
        </div>

        <div>
          <SectionTitle>Traits</SectionTitle>
          <div className="flex flex-wrap">
            <Badge>Highly motivated</Badge>
            <Badge>Adaptable</Badge>
            <Badge>Fast learner</Badge>
            <Badge>Passionate</Badge>
            <Badge>Team spirit</Badge>
            <Badge>Agile, independent and determined way of working</Badge>
          </div>
        </div>

        <div>
          <SectionTitle>Interests</SectionTitle>
          <div className="flex flex-wrap">
            <Badge>Piano</Badge>
            <Badge>Traveling</Badge>
            <Badge>Programming</Badge>
            <Badge>Wakeboarding</Badge>
            <Badge>Longboarding</Badge>
            <Badge>Board Games</Badge>
            <Badge>Origami</Badge>
            <Badge>Running</Badge>
            <Badge>Rope Jumping</Badge>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
