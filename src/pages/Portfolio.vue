<template>
  <div>
    <h1 class="page-title">Portfolio</h1>
    <div class="portfolio-container">
      <section class="portfolio-section">
        <div class="section-title">Projects</div>
        <div class="card-container">
          <div class="card">
            <a href="https://sensafety.org">
              <div class="card-header sen-header centered">
                <img :src="SenSafetyLogo" />
              </div>
            </a>
            <div>Mobile crowdsourcing platform for perceived safety of urban citizens</div>
            <div class="carousel">
              <Carousel :autoplay="true" :loop="true" :per-page="1">
                <Slide>
                  <img class="carousel-pic" :src="SenSafetyPicture1" />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="SenSafetyPicture2" />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="SenSafetyPicture3" />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="SenSafetyPicture4" />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="SenSafetyPicture5" />
                </Slide>
              </Carousel>
            </div>
          </div>

          <div class="card">
            <a href="https://moodlebuddy.com/">
              <div class="card-header mb-header centered">
                <!-- <img :src="MoodleBuddyIcon" /> -->
                MoodleBuddy
              </div>
            </a>
            <div>Cross-platform browser plugin that offers mass download and notification functionality for the <b>Moodle</b> learning management platform.</div>
            <div class="carousel">
              <Carousel :autoplay="true" :loop="true" :per-page="1">
                <Slide>
                  <img class="carousel-pic" :src="MoodleBuddyPicture1" alt />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="MoodleBuddyPicture2" alt />
                </Slide>
                <Slide>
                  <img class="carousel-pic" :src="MoodleBuddyPicture3" alt />
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-title">Published npm packages</div>
        <div class="card-container">
          <div class="card">
            <a class="package-name" href="https://www.npmjs.com/package/shape2geohash">shape2geohash</a>
            <div class="package-desc">Turns any GeoJSON shape into a list of geohashes</div>
            <a href="https://nodei.co/npm/shape2geohash/">
              <img
                class="npm-stats"
                alt="package summary"
                src="https://nodei.co/npm/shape2geohash.png"
              />
            </a>
          </div>
          <div class="card">
            <a class="package-name" href="https://www.npmjs.com/package/purposize">purposize</a>

            <div class="package-desc">
              <a href="http://docs.sequelizejs.com/">Sequelize</a> plugin to help with
              GDPR-compliant data storage
            </div>
            <a href="https://nodei.co/npm/purposize/">
              <img class="npm-stats" alt="package summary" src="https://nodei.co/npm/purposize.png" />
            </a>
          </div>
        </div>
      </section>

      <section class="coming-soon">
        <p>More is coming!</p>
        <p>
          <span role="img" aria-label="show-up">☝( ◠‿◠ )☝</span>
        </p>
        <p>＼（＾▽＾）／</p>
        <p>◕‿◕</p>
      </section>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

import SenSafetyLogo from "../static/images/sensafety-logo.png"
import SenSafetyPicture1 from "../static/images/sen-1.jpg"
import SenSafetyPicture2 from "../static/images/sen-2.jpg"
import SenSafetyPicture3 from "../static/images/sen-3.jpg"
import SenSafetyPicture4 from "../static/images/sen-4.jpg"
import SenSafetyPicture5 from "../static/images/sen-5.jpg"

import MoodleBuddyIcon from "../static/images/mb.png"
import MoodleBuddyPicture1 from "../static/images/mb-course.png"
import MoodleBuddyPicture2 from "../static/images/mb-course-detail.png"
import MoodleBuddyPicture3 from "../static/images/mb-dashboard.png"

export default {
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      SenSafetyLogo,
      SenSafetyPicture1,
      SenSafetyPicture2,
      SenSafetyPicture3,
      SenSafetyPicture4,
      SenSafetyPicture5,
      MoodleBuddyIcon,
      MoodleBuddyPicture1,
      MoodleBuddyPicture2,
      MoodleBuddyPicture3,
    }
  },
}
</script>

<style>
.card-header {
  margin: -30px -30px 20px -30px;
  border-radius: 5px 5px 0 0;
  padding: 5px 0px 5px 0px;
  height: 50px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.card {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-decoration: none;
}

.sen-header {
  background: linear-gradient(90deg, rgba(100, 85, 232, 1) 0%, rgba(150, 71, 219, 1) 100%);
}

.sen-header > img {
  width: 30%;
}

.mb-header > img {
  margin-right: 10px;
}

.carousel-pic {
  height: 300px;
}

.mb-header {
  background: #c50e20;
  color: white;
  font-size: 26px;
  font-weight: bold;
}

a {
  text-decoration: none;
}

.carousel {
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-end;
  justify-self: center;
  margin-top: 20px;
}

.VueCarousel-dot-container {
  margin-top: 10px !important;
}

.VueCarousel-dot {
  margin-top: 0 !important;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.portfolio-container {
  text-align: center;
  font-size: 20px;
}

.portfolio-section {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.section-title::after {
  margin: 10px 0 30px 0;
  content: "";
  width: 120px;
  border-bottom: 3px solid #234ef3;
  display: block;
}

.section-title {
  font-size: 22px;
  font-family: metropolis-medium;
  letter-spacing: 1px;
  color: #234ef3;
  text-align: left;
}

.publication-title {
  margin-bottom: 10px;
  font-size: 20px;
}

.publication-container {
  padding-left: 20px;
}

.package-desc {
  padding: 0px 25px;
}

.package-name {
  font-size: 22px;
  background-color: #ca3736;
  border-radius: 2px;
  margin-bottom: 20px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: font-size 0.1s;
  color: white;
  text-decoration: none;
}

.package-name:hover {
  font-size: 24px;
}

.npm-stats {
  margin-top: 20px;
  max-width: 350px;
}

.coming-soon {
  margin: 70px auto;
  font-size: 26px;
}

@media (max-width: 900px) {
  .card-container {
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 10px;
  }
}

@media (max-width: 480px) {
  .npm-stats {
    display: none;
  }

  .package-desc {
    padding: 0px 10px;
  }

  .sen-logo {
    width: 50%;
  }

  .carousel {
    width: 250px;
  }

  .carousel-pic {
    height: 200px;
  }
}
</style>
