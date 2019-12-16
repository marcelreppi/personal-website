<template>
  <div class="home-container">
    <!-- <Typed strings={["Hi, I'm Marcel"]} typeSpeed={100} class="section-title" /> -->
    <!-- <vue-typed-js :strings="['Hi']" :typeSpeed="100" class="section-title">
      <div class="typing"></div>
    </vue-typed-js> -->
    <VueTyper
      text="Hi, I'm Marcel"
      :repeat="0"
      :type-delay="150"
      caret-animation="smooth"
    ></VueTyper>

    <div class="intro">
      Information Systems Management
      <br />
      Master Student @ Technical University of Berlin
    </div>
    <div class="social-links">
      <span class="icon-container">
        <a href="https://github.com/marcelreppi">
          <img class="social-icon-img" src="../static/img/github.png" alt="" />
        </a>
      </span>
      <span class="icon-container">
        <a href="https://twitter.com/marcelreppi">
          <img class="social-icon-img" src="../static/img/twitter.png" alt="" />
        </a>
      </span>
      <span class="icon-container">
        <a href="https://www.linkedin.com/in/marcel-reppenhagen-b8994a121/">
          <img class="social-icon-img" src="../static/img/linkedin.png" alt="" />
        </a>
      </span>
    </div>
    <div class="contact-details">
      <div class="contact-details-item">
        <div class="detail">
          <span class="icon-container">
            <img class="icon-img" src="../static/img/mail.png" alt="" />
          </span>
          <span class="break-word">
            <a href="mailto:marcelreppi@gmail.com">marcelreppi@gmail.com</a>
          </span>
        </div>
      </div>
      <div class="contact-details-item">
        <div class="detail">
          <span class="icon-container">
            <img class="icon-img" src="../static/img/homepage.png" alt="" />
          </span>
          <span class="break-word">
            <a href="https://www.reppenhagen.space">reppenhagen.space</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer"

export default {
  components: { VueTyper },
}
</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.intro {
  text-align: center;
  font-size: 22px;
  font-family: metropolis-medium;
  line-height: 30px;
}

.vue-typer {
  text-align: center;
  font-family: metropolis-medium;
  hyphens: auto;
  margin-bottom: 50px;
  padding: 5px;
  height: 40px;
}

.vue-typer .custom.caret.complete,
.vue-typer .custom.caret.typing {
  width: 3px;
  font-size: 34px;
  background-color: #234ef3;
  display: inline-block !important;
  margin-left: 5px;
}

.vue-typer .custom.char.typed {
  font-size: 34px;
  color: #234ef3;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.social-icon-img {
  width: 30px;
  height: 30px;
}

.contact-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contact-details-item {
  margin: 0 20px;
}

@media (max-width: 480px) {
  .contact-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
  .contact-details-item {
    margin: 0px;
  }
}

.detail {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 40px auto;
  margin-bottom: 5px;
}

.break-word {
  -ms-word-break: break-all;
  -ms-word-wrap: break-all;
  -webkit-word-break: break-word;
  -webkit-word-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  overflow: auto;
}
</style>
