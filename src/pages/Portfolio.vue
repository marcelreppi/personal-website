<template>
  <div>
    <div class="page-title">Portfolio</div>
    <div class="portfolio-container">
      <div class="portfolio-section">
        <div class="section-title">Projects</div>
        <div class="card-container">
          <div class="card">
            <a href="https://sensafety.org">
              <div class="sen-header centered">
                <img class="sen-logo" :src="SenSafetyLogo" />
              </div>
            </a>
            <div>Mobile crowdsourcing platform for perceived safety of urban citizens</div>
            <div class="centered">
              <Carousel class="carousel" :per-page="1">
                <Slide>
                  <img class="sen-picture" :src="SenSafetyPicture1" alt="" />
                </Slide>
                <Slide>
                  <img class="sen-picture" :src="SenSafetyPicture2" alt="" />
                </Slide>
                <Slide>
                  <img class="sen-picture" :src="SenSafetyPicture3" alt="" />
                </Slide>

                <Slide>
                  <img class="sen-picture" :src="SenSafetyPicture4" alt="" />
                </Slide>
                <Slide>
                  <img class="sen-picture" :src="SenSafetyPicture5" alt="" />
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <!-- <div>
        Garzon, Sandro & Deva, Bersant. (2019). Sensafety: Crowdsourcing the Urban Sense of Safety.
        </br>
        Advances in Cartography and GIScience of the ICA. 2. 1-8. 10.5194/ica-adv-2-12-2019.
      </div>-->

      <div class="portfolio-section">
        <div class="section-title">Published npm packages</div>
        <div class="card-container">
          <div class="card">
            <a class="package-name" href="https://www.npmjs.com/package/shape2geohash"
              >shape2geohash</a
            >
            <div class="package-desc">Turns any GeoJSON shape into a list of geohashes</div>
            <a class="npm-stats" href="https://nodei.co/npm/shape2geohash/">
              <img alt="package summary" src="https://nodei.co/npm/shape2geohash.png" />
            </a>
          </div>
          <div class="card">
            <a class="package-name" href="https://www.npmjs.com/package/purposize">purposize</a>

            <div class="package-desc">
              <a class="link" href="http://docs.sequelizejs.com/">Sequelize</a> plugin to help with
              GDPR-compliant data storage
            </div>
            <a class="npm-stats" href="https://nodei.co/npm/purposize/">
              <img alt="package summary" src="https://nodei.co/npm/purposize.png" />
            </a>
          </div>
        </div>
      </div>

      <div class="coming-soon">
        <p>More coming soon!</p>
        <p>
          <span role="img" aria-label="show-up">☝( ◠‿◠ )☝</span>
        </p>
        <p>＼（＾▽＾）／</p>
        <p>◕‿◕</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

import SenSafetyLogo from "../static/img/sensafety-logo.png"
import SenSafetyPicture1 from "../static/img/sen-1.jpg"
import SenSafetyPicture2 from "../static/img/sen-2.jpg"
import SenSafetyPicture3 from "../static/img/sen-3.jpg"
import SenSafetyPicture4 from "../static/img/sen-4.jpg"
import SenSafetyPicture5 from "../static/img/sen-5.jpg"

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
    }
  },
}
</script>

<style scoped>
.sen-header {
  background: rgb(100, 85, 232);
  background: linear-gradient(90deg, rgba(100, 85, 232, 1) 0%, rgba(150, 71, 219, 1) 100%);
  margin: -30px -30px 20px -30px;
  border-radius: 5px 5px 0 0;
  padding: 5px 0px 5px 0px;
}

.sen-picture {
  height: 300px;
}

.carousel {
  width: 200px;
  margin-top: 30px;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sen-logo {
  width: 30%;
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
}

a {
  color: inherit;
  text-decoration: inherit;
}

.link {
  color: blue;
  text-decoration: underline;
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
}

.package-name:hover {
  font-size: 24px;
}

.npm-stats {
  margin-top: 20px;
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
}
</style>
