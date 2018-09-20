import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import Transactions from '@/pages/Transactions/transactions'
import Block from '@/pages/Block/block'
import BlockDetail from '@/pages/Block/block_detail'
import TransactionDetail from '@/pages/Transactions/transaction_detail'
import Account from '@/pages/account/account'
import NoPage from '@/pages/404'
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
      path: '/block/:blockHeight',
      name: 'BlockDetail',
      component: BlockDetail
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/transactions/:tx_id',
      name: 'TransactionDetail',
      component: TransactionDetail
    },
    {
      path: '/account/:a_id',
      name: 'Account',
      component: Account
    },
    {
      path: '/404',
      name: '404',
      component: NoPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
