import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueFreezeframe from 'vue-freezeframe';

Vue.use(VueFreezeframe);
Vue.use(vueSmoothScroll)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
