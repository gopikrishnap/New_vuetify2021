import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './Router/Router'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  router,
  axios,
  Vuelidate
}).$mount('#app')
