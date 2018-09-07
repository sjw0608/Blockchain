// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/lib/global'
import Vue from 'vue'
import App from './App'
import router from './router'
import locales from '@/locales'
// import VueTimeago from 'vue-timeago'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Vue.use(VueTimeago, {
//   name: 'timeago',
//   locale: 'zh',
//   locales: {
//     zh: require('vue-timeago/locales/zh-CN.json'),
//     en: require('vue-timeago/locales/en-US.json')
//   }
// })

Vue.component('Chart', ECharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n: locales,
  components: { App },
  template: '<App/>'
})
