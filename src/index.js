import Vue from "vue"

import router from "./router"
import App from "./App.vue"

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
  el: "#root",
  router,
  render: h => h(App),
})
