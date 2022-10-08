import React from "react";
import Activity from "../components/Activity";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

export const Resume: React.FC = ({}) => {
  return (
    <Layout pageTitle="Resumé">
      <div className="page-title">Resumé</div>
      <div className="mb-10 -mt-12 text-center">
        <a
          href="/cv.pdf"
          className="text-highlight hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
      <div className="space-y-10">
        <SectionTitle text="Experience" />
        <div className="divide-y-1">
          <Activity
            type="work"
            title={
              <div>
                Full Stack Developer at{" "}
                <a
                  className="link"
                  href="https://jfrog.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JFrog
                </a>
              </div>
            }
            location="Tel Aviv, Israel"
            duration="09/2022 - today"
          />
          <Activity
            type="work"
            title={
              <div>
                Software Developer at{" "}
                <a
                  className="link"
                  href="https://icn.sap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAP Innovation Center Potsdam
                </a>
              </div>
            }
            location="Potsdam, Germany"
            duration="04/2021 - 04/2022"
            details={[
              "Fullstack development of cloud native applications in a modern cross-functional agile team",
              "Driving innovative strategic projects and cloud transformation of cross-product solutions",
              "Pioneering and verifying company's tech strategy, frameworks and architecture",
              'Received a "Spot Award" for exceptional efforts and results',
              "JavaScript, TypeScript, Node.js, Vue.js, Kotlin, Java, Spring Boot, git, SQL, CI/CD, Docker, K8s, Cloud Foundry",
            ]}
          />
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
            location="Technical University of Berlin, Germany"
            duration="04/2019 - 10/2019"
            details={[
              "Mobile crowdsourcing platform for perceived safety of urban citizens",
              "Agile development in a multi-cultural team on a user-centered, modern and performant application",
              "App development with React Native and Firebase",
              <span>
                Implementation of{" "}
                <a
                  href="https://sensafety.org/map.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  statistics dashboard and live map
                </a>{" "}
                with real-time popups
              </span>,
            ]}
          />
          <Activity
            type="tutor"
            title="Student Tutor"
            location="Technical University of Berlin, Germany"
            duration="04/2016 - 04/2017"
            details={[
              "Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)",
              "Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical Foundations of Computer Science)",
            ]}
          />
        </div>

        <div>
          <SectionTitle text="Publications" />
          <div className="divide-y-1">
            <Activity
              type="publication"
              title={
                <a
                  className="link"
                  href="https://www.sciencedirect.com/science/article/pii/S2667091722000061"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What if Air Quality Dictates Road Pricing? Simulation of an Air Pollution-based
                  Road Charging Scheme
                </a>
              }
            />

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
          <SectionTitle text="Education" />
          <div className="divide-y-1">
            <Activity
              type="degree"
              title="Master Information Systems Management (Grade: 1.2, One of the best graduates of my year)"
              location="Technical University of Berlin, Germany"
              duration="04/2018 - 10/2020"
              details={[
                "Master Thesis: „Traffic Simulation for an Air Pollution-aware Toll System with Dynamic Charging” (Grade: 1.0)",
              ]}
            />

            <Activity
              type="degree"
              title="Bachelor Wirtschaftsinformatik (Grade: 1.8, One of the best graduates of my year)"
              location="Technical University of Berlin, Germany"
              duration="10/2014 - 03/2018"
              details={[
                "Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability Offering” (Grade: 1.3)",
              ]}
            />

            <Activity
              type="degree"
              title="Schiller Gymnasium, Staatliche Europaschule Berlin (German-English Bilingual
                Highschool)"
              location="Berlin, Germany"
              duration="2007 - 2013"
              details={["Abitur (Grade: 1.3)", "Major subjects: English and Physics"]}
            />

            <Activity
              type="degree"
              title="Quentin Blake Europeschool (Bilingual Primary School
            (German-English))"
              location="Berlin, Germany"
              duration="2001 - 2007"
            />
          </div>
        </div>

        <div>
          <SectionTitle text="Skills" />
          <div className="flex flex-wrap">
            <div className="badge">Fullstack Development</div>
            <div className="badge">NodeJS</div>
            <div className="badge">TypeScript</div>
            <div className="badge">Python</div>
            <div className="badge">Kotlin</div>
            <div className="badge">Java</div>
            <div className="badge">Spring Boot</div>
            <div className="badge">Next.js</div>
            <div className="badge">React</div>
            <div className="badge">Vue</div>
            <div className="badge">Tailwind</div>
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
          <SectionTitle text="Traits" />
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
          <SectionTitle text="Interests" />
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
  );
};

export default Resume;
