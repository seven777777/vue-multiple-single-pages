
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const isDev = (process.env.NODE_ENV === "development")
Vue.config.productionTip = isDev

import '@/assets/style/moduleB.scss'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')