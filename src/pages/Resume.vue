<template>
  <div>
    <div class="section-title">Resumé</div>
    <div class="resume-section">Education</div>
    <div class="resume-content">
      <LifeChapter
        title="Master Information Systems Management (Wirtschaftsinformatik)"
        duration="04/2018 - today"
        location="Technical University of Berlin"
        :icon="degreeIcon"
      ></LifeChapter>
      <hr />
      <LifeChapter
        title="Bachelor Wirtschaftsinformatik (Information Systems Management)"
        location="Technical University of Berlin"
        duration="10/2014 - 03/2018"
        :details="[
          'Final grade: 1,8',
          'Certificate for being honoured as part of the best students in my year',
          'Bachelors Thesis: „Creation of a Lightweight Microservice for Semantic Capability Offering” (Grade: 1,3)',
        ]"
        :icon="degreeIcon"
      ></LifeChapter>
      <hr />
      <LifeChapter
        title="Abitur"
        location="Staatliche Europaschule Berlin, Schiller Gymnasium (Bilingual Highschool (German-English))"
        duration="2007 - 2013"
        :details="['Final grade: 1,3', 'Major subjects: English and Physics']"
        :icon="degreeIcon"
      ></LifeChapter>
      <hr />
      <LifeChapter
        title="Quentin Blake Europeschool (Bilingual Primary School (German-English))"
        location="Berlin"
        duration="2001 - 2007"
        :icon="degreeIcon"
      ></LifeChapter>
    </div>
    <div class="resume-section">Work experience</div>
    <div class="resume-content">
      <LifeChapter
        title="Student Tutor"
        location="Technical University of Berlin"
        duration="04/2016 - 04/2017"
        :details="[
          'Geschäftsprozesse & IT-Dienste (Business Processes and IT-Services)',
          'Technische Grundlagen der Informatik für Wirtschaftsinformatiker (Technical Foundations of Computer Science)',
        ]"
        :icon="tutorIcon"
      ></LifeChapter>
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
import LifeChapter from "../components/LifeChapter.vue"

import degreeIcon from "../static/img/degree.png"
import tutorIcon from "../static/img/tutor.png"

export default {
  components: { LifeChapter },
  data: function() {
    return {
      degreeIcon,
      tutorIcon,
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
