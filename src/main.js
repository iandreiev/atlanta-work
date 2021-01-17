import Vue from 'vue'
import App from './App.vue'
import router from './router'
import forms from './store/forms'
import store from './store'
import './assets/sass/style.sass'
import './assets/fonts/proxima/stylesheet.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  forms,
  render: h => h(App)
}).$mount('#app')
