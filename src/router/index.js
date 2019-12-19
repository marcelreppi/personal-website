import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import(/* webpackChunkName: "route-home" */ "../pages/Home.vue")
const About = () => import(/* webpackChunkName: "route-about" */ "../pages/About.vue")
const Resume = () => import(/* webpackChunkName: "route-resume" */ "../pages/Resume.vue")
const Portfolio = () => import(/* webpackChunkName: "route-portfolio" */ "../pages/Portfolio.vue")
const NotFound = () => import(/* webpackChunkName: "route-404" */ "../pages/404.vue")

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
      path: "/portfolio",
      component: Portfolio,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
})
