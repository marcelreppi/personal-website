<template>
  <div>
    <h1 class="page-title">Resumé</h1>

    <div id="download">
      <a href="static/cv.pdf" target="_blank">Download</a>
    </div>
    
    <section class="resume-section">
      <div class="section-title">Experience</div>
      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="workIcon" alt />
        </span>
        <span class="medium-font">
          Mobile/Web Developer at
          <a href="https://sensafety.org/">SenSafety</a>
        </span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>04/2019 - 10/2019</div>
      </div>

      <div class="chapter-details">
        <DetailSwitch>
          <ul>
            <li>Mobile crowdsourcing platform for perceived safety of urban citizens</li>
            <li>
              Agile development in a multi-cultural team on a user-centered, modern and performant
              application
            </li>
            <li>App development with React Native and Firebase</li>
            <li>
              Implementation of
              <a
                href="https://sensafety.org/map.html"
              >statistics dashboard and live map</a>
              with real-time popups
            </li>
          </ul>
        </DetailSwitch>
      </div>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="tutorIcon" alt />
        </span>
        <span class="medium-font">Student Tutor</span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>04/2016 - 04/2017</div>
      </div>

      <div class="chapter-details">
        <DetailSwitch>
          <ul>
            <li>Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)</li>
            <li>
              Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical
              Foundations of Computer Science)
            </li>
          </ul>
        </DetailSwitch>
      </div>
    </section>

    <section class="resume-section">
      <div class="section-title">Publications</div>
      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="publicationIcon" alt />
        </span>
        <span class="medium-font">What if Distance-based Tolls Depend on Urban Air Quality? <br> Simulation of an Air Pollution-based Road Charging Scheme in Berlin</span>
      </div>

      <!-- <div class="chapter-details">
        <a
          href="https://www.researchgate.net/publication/340269152_Towards_application-layer_purpose-based_access_control"
        >Link to the paper</a>
      </div> -->
      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="publicationIcon" alt />
        </span>
        <span class="medium-font">Towards Application-Layer Purpose-Based Access Control</span>
      </div>

      <div class="chapter-details">
        <a
          href="https://www.researchgate.net/publication/340269152_Towards_application-layer_purpose-based_access_control"
        >Link to the paper</a>
      </div>
      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="publicationIcon" alt />
        </span>
        <span class="medium-font">Sensafety: Crowdsourcing the Urban Sense of Safety</span>
      </div>

      <div class="chapter-details">
        <a
          href="https://www.researchgate.net/publication/337068653_Sensafety_Crowdsourcing_the_Urban_Sense_of_Safety"
        >Link to the paper</a>
      </div>
      <hr />
    </section>

    <section class="resume-section">
      <div class="section-title">Education</div>
      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt />
        </span>
        <span class="medium-font">Master Information Systems Management (Grade: 1.2)</span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>04/2018 - 10/2020</div>
      </div>

      <div class="chapter-details">
        <DetailSwitch>
          <ul>
            <!-- <li>Final grade: 1.2</li> -->
            <li>
              Master Thesis: „Traffic Simulation for an Air Pollution-aware Toll System with Dynamic
              Charging” (Grade: 1.0)
            </li>
          </ul>
        </DetailSwitch>
      </div>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt />
        </span>
        <span class="medium-font">Bachelor Wirtschaftsinformatik (Grade: 1.8)</span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>10/2014 - 03/2018</div>
      </div>

      <div class="chapter-details">
        <DetailSwitch>
          <ul>
            <!-- <li>Final grade: 1.8</li> -->
            <li>Certificate for being honoured as part of the best students in my year</li>
            <li>
              Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability
              Offering” (Grade: 1.3)
            </li>
          </ul>
        </DetailSwitch>
      </div>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt />
        </span>
        <span class="medium-font">Abitur (Grade: 1.3)</span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual Highschool (German-English))</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>2007 - 2013</div>
      </div>

      <div class="chapter-details">
        <DetailSwitch>
          <ul>
            <!-- <li>Final grade: 1.3</li> -->
            <li>Major subjects: English and Physics</li>
          </ul>
        </DetailSwitch>
      </div>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt />
        </span>
        <span
          class="medium-font"
        >Quentin Blake Europeschool (Bilingual Primary School (German-English))</span>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt />
        </span>
        <div>Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt />
        </span>
        <div>2001 - 2007</div>
      </div>
    </section>

    <section class="resume-section">
      <div class="section-title">Interests</div>
      <div class="interest-container">
        <div class="interest">Piano</div>
        <div class="interest">Traveling</div>
        <div class="interest">Programming</div>
        <div class="interest">Wakeboarding</div>  
        <div class="interest">Longboarding</div>
        <div class="interest">Board Games</div>
        <div class="interest">Origami</div>
        <div class="interest">Running</div>
        <div class="interest">Rope Jumping</div>
      </div>
    </section>
  </div>
</template>

<script>
import workIcon from "../static/images/work.png"
import publicationIcon from "../static/images/publication.png"
import degreeIcon from "../static/images/degree.png"
import tutorIcon from "../static/images/tutor.png"
import locationIcon from "../static/images/location.png"
import durationIcon from "../static/images/duration.png"

import DetailSwitch from "../components/DetailSwitch.vue"

export default {
  components: {
    DetailSwitch,
  },
  data: function() {
    return {
      workIcon,
      publicationIcon,
      degreeIcon,
      tutorIcon,
      locationIcon,
      durationIcon,
    }
  },
}
</script>

<style scoped>
#download {
  display: flex;
  justify-content: center;
  width: 100%;
  --gap: 40px;
  margin-top: calc(var(--gap) * -1);
  margin-bottom: var(--gap);
}

#download > a {
  text-decoration: none;
  color: var(--highlight-color);
}

.section-title {
  font-size: 20px;
  font-family: metropolis-medium;
  letter-spacing: 1px;
  color: var(--highlight-color);
}

.section-title::after {
  margin: 10px 0 30px 0;
  content: "";
  width: 150px;
  border-bottom: 3px solid var(--highlight-color);
  display: block;
}

.resume-section {
  margin-bottom: 40px;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

ul {
  padding-left: 10px;
}

li {
  margin-bottom: 3px;
}

.chapter {
  margin-bottom: 40px;
}

.chapter-overview {
  font-size: 17px;
  line-height: 22px;
  display: grid;
  grid-template-columns: 40px auto;
  row-gap: 10px;
}

.chapter-overview span:nth-child(2) {
  font-size: 18px;
}

.chapter-details {
  margin-top: 10px;
  padding-left: 42px;
}

.interest-container {
  display: flex;
  flex-wrap: wrap;
}

.interest {
  background: rgb(255, 255, 255);
  margin-bottom: 15px;
  margin-right: 15px;
  padding: 3px 10px;
  border-radius: 5px;
  border: 2px;
  border-style: solid;
  border-color: var(--highlight-color);
}
</style>
