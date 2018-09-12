import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import Transactions from '@/pages/Transactions/transactions'
import Block from '@/pages/Block/block'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/block',
      name: 'Block',
      component: Block
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    }
  ]
})
