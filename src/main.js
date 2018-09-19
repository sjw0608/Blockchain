// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/lib/global'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import locales from '@/locales'
import store from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n: locales,
  store,
  components: { App },
  template: '<App/>'
})
