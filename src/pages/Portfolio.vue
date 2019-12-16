<template>
  <div>
    <div class="section-title">Portfolio</div>
    <div class="portfolio-container">
      <div class="portfolio-section">Research</div>

      <div class="portfolio-section">Published npm packages</div>
      <div class="npm-packages-container">
        <div class="npm-package">
          <div class="package-name">
            <a class="package-link" href="https://www.npmjs.com/package/shape2geohash">
              shape2geohash
            </a>
          </div>

          <div>Turns any GeoJSON shape (polygon or line) into a list of geohashes</div>
          <a class="npm-stats" href="https://nodei.co/npm/shape2geohash/">
            <img alt="package summary" src="https://nodei.co/npm/shape2geohash.png" />
          </a>
        </div>
        <div class="npm-package">
          <div class="package-name">
            <a class="package-link" href="https://www.npmjs.com/package/purposize">
              purposize
            </a>
          </div>

          <div>
            A <a href="http://docs.sequelizejs.com/">Sequelize</a> plugin to help with
            GDPR-compliant data storage
          </div>
          <a class="npm-stats" href="https://nodei.co/npm/purposize/">
            <img alt="package summary" src="https://nodei.co/npm/purposize.png" />
          </a>
        </div>
      </div>

      <div class="coming-soon">
        <p>More coming soon!</p>
        <p>
          <span role="img" aria-label="show-up">
            ☝( ◠‿◠ )☝
          </span>
        </p>
        <p>＼（＾▽＾）／</p>
        <p>◕‿◕</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.portfolio-container {
  text-align: center;
  font-size: 20px;
}

.portfolio-section {
  font-size: 22px;
  font-family: metropolis-medium;
  letter-spacing: 1px;
  color: #234ef3;
  text-align: left;
}

.portfolio-section::after {
  margin: 10px 0 30px 0;
  content: "";
  width: 120px;
  border-bottom: 3px solid #234ef3;
  display: block;
}

.npm-packages-container {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.npm-package {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
}

.package-name:hover {
  font-size: 24px;
}

.package-link {
  text-decoration: none;
  color: white;
}

.npm-stats {
  margin-top: 20px;
}

.coming-soon {
  margin: 70px auto;
  font-size: 26px;
}

@media (max-width: 900px) {
  .npm-packages-container {
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 10px;
  }
}

@media (max-width: 480px) {
  .npm-stats {
    display: none;
  }
}
</style>
