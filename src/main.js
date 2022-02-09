import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faShoppingCart, faInstagram, faFacebookSquare)
// Vue.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
