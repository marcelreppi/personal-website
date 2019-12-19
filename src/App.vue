<template>
  <div class="app" :class="{ 'no-scroll': mobileMenuOpen }">
    <NavBar :isMobile="isMobile" :setMobileMenuOpen="setMobileMenuOpen"></NavBar>
    <div class="main-content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  components: { NavBar },
  data: function() {
    return {
      mobileMenuOpen: false,
      isMobile: false,
    }
  },
  methods: {
    setMobileMenuOpen: function(isOpen) {
      this.mobileMenuOpen = isOpen
    },
    handleResize: function() {
      this.isMobile = window && window.innerWidth <= 480
    },
  },
  mounted: function() {
    this.isMobile = window.innerWidth <= 480

    window.addEventListener("resize", this.handleResize)
  },
}
</script>

<style>
@font-face {
  font-family: metropolis;
  src: url("./static/fonts/Metropolis-Regular.otf");
}

@font-face {
  font-family: metropolis-medium;
  src: url("./static/fonts/Metropolis-Medium.otf");
}

@font-face {
  font-family: metropolis-bold;
  src: url("./static/fonts/Metropolis-Bold.otf");
}

.app {
  --app-font-size: 16px;
  font-family: metropolis;
  font-size: var(--app-font-size);
}

.medium-font {
  font-family: metropolis-medium;
}

.bold-font {
  font-family: metropolis-bold;
}

@media (min-width: 480px) {
  .app {
    margin-top: 100px;
  }
}

.main-content-container {
  display: block;
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 40px;
}

.page-title {
  text-align: center;
  font-size: 34px;
  color: #234ef3;
  font-family: metropolis-medium;
  hyphens: auto;
  margin: 0px 0px 50px 0px;
  padding: 5px;
  font-weight: 500;
}

.icon-container {
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-img {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.no-scroll {
  overflow: hidden;
  position: fixed;
}
</style>
