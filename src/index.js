import Vue from "vue"
import VueCarousel from "vue-carousel"

import router from "./router"
import App from "./App.vue"

Vue.config.devtools = false
Vue.config.productionTip = false

Vue.use(VueCarousel)

new Vue({
  el: "#root",
  router,
  render: h => h(App),
})
