import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import Transactions from '@/pages/Transactions/transactions'
import BlockDetail from '@/pages/Block/block_detail'
import TransactionDetail from '@/pages/Transactions/transaction_detail'
import Account from '@/pages/account/account'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      path: '*',
      redirect: '/'
    }
  ]
})
