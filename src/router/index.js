import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Resume from "../pages/Resume.vue"
import Projects from "../pages/Projects.vue"
import NotFound from "../pages/404.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/resume",
      component: Resume,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
})
