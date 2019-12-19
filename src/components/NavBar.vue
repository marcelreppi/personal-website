<template>
  <nav>
    <div v-if="isMobile" class="navbar-mobile-container">
      <img class="menu-icon" :src="MenuIcon" alt @click="toggleMobileMenu" />
    </div>

    <div v-else class="navbar-container">
      <router-link to="/" class="navbar-item nav-home">Home</router-link>
      <router-link to="/about" class="navbar-item nav-about">About</router-link>
      <router-link to="/resume" class="navbar-item nav-resume">Resumé</router-link>
      <router-link to="/portfolio" class="navbar-item nav-portfolio">Portfolio</router-link>
    </div>

    <div v-if="showMobileMenu" class="navbar-mobile-content">
      <img class="menu-icon exit-icon" :src="XIcon" @click="toggleMobileMenu" />
      <router-link
        to="/"
        class="navbar-mobile-item navbar-item nav-home"
        @click.native="toggleMobileMenu"
      >Home</router-link>
      <router-link
        to="/about"
        class="navbar-mobile-item navbar-item nav-about"
        @click.native="toggleMobileMenu"
      >About</router-link>
      <router-link
        to="/resume"
        class="navbar-mobile-item navbar-item nav-resume"
        @click.native="toggleMobileMenu"
      >Resumé</router-link>
      <router-link
        to="/portfolio"
        class="navbar-mobile-item navbar-item nav-portfolio"
        @click.native="toggleMobileMenu"
      >Portfolio</router-link>
    </div>
  </nav>
</template>

<script>
import MenuIcon from "../static/images/menu.png"
import XIcon from "../static/images/x.png"

export default {
  data: function() {
    return {
      showMobileMenu: false,
      MenuIcon,
      XIcon,
    }
  },
  props: {
    isMobile: Boolean,
    setMobileMenuOpen: Function,
  },
  methods: {
    toggleMobileMenu: function() {
      this.showMobileMenu = !this.showMobileMenu
      this.setMobileMenuOpen(this.showMobileMenu)
    },
  },
}
</script>

<style>
.navbar-container {
  display: grid;
  grid-template-columns: minmax(0px, auto) repeat(4, minmax(100px, 250px)) minmax(0px, auto);
  /* margin-top: 20px; */
  /* border: 2px solid black; */
}

.navbar-mobile-container {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
  padding-top: 20px;
}

.navbar-mobile-content {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
}

.navbar-mobile-item {
  padding: 15px;
}

.menu-icon {
  width: 50px;
  height: 50px;
}

.exit-icon {
  margin-bottom: 30px;
  padding-left: 20px;
}

.navbar-item {
  /* border: 2px solid red; */
  text-align: center;
  font-size: 24px;
  color: inherit;
  text-decoration: inherit;
}

.navbar-item:hover {
  color: #234ef3;
}

.nav-home {
  grid-column-start: 2;
  grid-column-end: 3;
}

.nav-about {
  grid-column-start: 3;
  grid-column-end: 4;
}

.nav-resume {
  grid-column-start: 4;
  grid-column-end: 5;
}

.nav-portfolio {
  grid-column-start: 5;
  grid-column-end: 6;
}

.nav-contact {
  grid-column-start: 6;
  grid-column-end: 7;
}
</style>
