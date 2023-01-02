import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

// Link Font-awesome icons BootstrapVue
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font', FontAwesomeIcon)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Link Font-awesome icons and BootstrapVue

// Link AOS Animation library
import AOS from 'aos'
import 'aos/dist/aos.css'
// Link AOS Animation library


Vue.config.productionTip = false

new Vue({
  mounted() {
    AOS.init()
  },
    router,
    render: h => h(App),
}).$mount('#app')
