<template>
  <div>
    <div class="section-title">Resumé</div>

    <div class="resume-section">Experience</div>
    <div class="resume-content">
      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="workIcon" alt="" />
        </span>
        <b>Mobile/Web Developer at <a href="https://sensafety.org/">SenSafety</a></b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>04/2019 - 10/2019</div>
      </div>
      <ul class="chapter-details">
        <li>Mobile crowdsourcing platform for perceived safety of urban citizens</li>
        <li>
          Agile development in a multi-cultural team on a user-centered, modern and performant
          application
        </li>
        <li>App development with React Native and Firebase</li>
        <li>
          Implementation of
          <a href="https://sensafety.org/statistics.html"> statistics dashboard and live map</a>
          with real-time popups
        </li>
      </ul>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="tutorIcon" alt="" />
        </span>
        <b>Student Tutor</b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>04/2016 - 04/2017</div>
      </div>

      <ul>
        <li>Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)</li>
        <li>
          Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical Foundations of
          Computer Science)
        </li>
      </ul>
    </div>

    <div class="resume-section">Publications</div>
    <div class="resume-content publication-container">
      <div class="publication-title">
        <a
          href="https://www.researchgate.net/publication/337068653_Sensafety_Crowdsourcing_the_Urban_Sense_of_Safety"
          >Sensafety: Crowdsourcing the Urban Sense of Safety</a
        >
      </div>
      <!-- <div>
        Garzon, Sandro & Deva, Bersant. (2019). Sensafety: Crowdsourcing the Urban Sense of Safety.
        </br>
        Advances in Cartography and GIScience of the ICA. 2. 1-8. 10.5194/ica-adv-2-12-2019.
      </div> -->
      <div></div>
    </div>

    <div class="resume-section">Education</div>
    <div class="resume-content">
      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt="" />
        </span>
        <b>Master Information Systems Management (Wirtschaftsinformatik)</b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>04/2018 - today</div>
      </div>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt="" />
        </span>
        <b>Bachelor Wirtschaftsinformatik (Information Systems Management)</b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>Technical University of Berlin</div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>10/2014 - 03/2018</div>
      </div>

      <ul>
        <li>Final grade: 1,8</li>
        <li>
          Certificate for being honoured as part of the best students in my year
        </li>
        <li>
          Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability
          Offering” (Grade: 1,3)
        </li>
      </ul>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt="" />
        </span>
        <b>Abitur</b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>
          Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual Highschool (German-English))
        </div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>2007 - 2013</div>
      </div>

      <ul>
        <li>Final grade: 1,3</li>
        <li>
          Major subjects: English and Physics
        </li>
      </ul>

      <hr />

      <div class="chapter-overview">
        <span class="icon-container">
          <img class="icon-img" :src="degreeIcon" alt="" />
        </span>
        <b>Quentin Blake Europeschool (Bilingual Primary School (German-English))</b>
        <span class="icon-container">
          <img class="icon-img" :src="locationIcon" alt="" />
        </span>
        <div>
          Berlin
        </div>
        <span class="icon-container">
          <img class="icon-img" :src="durationIcon" alt="" />
        </span>
        <div>2001 - 2007</div>
      </div>
    </div>

    <div class="resume-section">Interests</div>
    <div class="resume-content interest-container">
      <div class="interest">Piano</div>
      <div class="interest">Traveling</div>
      <div class="interest">Programming</div>
      <div class="interest">Wakeboarding</div>
      <div class="interest">Longboarding</div>
      <div class="interest">Board Games</div>
      <div class="interest">Origami</div>
      <div class="interest">Running</div>
    </div>
  </div>
</template>

<script>
import workIcon from "../static/img/work.png"
import degreeIcon from "../static/img/degree.png"
import tutorIcon from "../static/img/tutor.png"
import locationIcon from "../static/img/location.png"
import durationIcon from "../static/img/duration.png"

export default {
  data: function() {
    return {
      workIcon,
      degreeIcon,
      tutorIcon,
      locationIcon,
      durationIcon,
    }
  },
}
</script>

<style>
.resume-section {
  font-size: 20px;
  font-family: metropolis-medium;
  letter-spacing: 1px;
  color: #234ef3;
}

.resume-section::after {
  margin: 10px 0 30px 0;
  content: "";
  width: 150px;
  border-bottom: 3px solid #234ef3;
  display: block;
}

.resume-content {
  margin-bottom: 40px;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.publication-title {
  margin-bottom: 10px;
  font-size: 20px;
}

.publication-container {
  padding-left: 20px;
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
  grid-template-rows: repeat(3, auto);
  row-gap: 10px;
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
  border-color: #234ef3;
}
</style>
