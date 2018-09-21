<template>
  <div>
    <v-search :blockInfo='info'></v-search>
    <div class="container record">
      <span>{{$t('transaction.tx_history')}}</span>
      <router-link :to="{name:'Transactions'}" class="more_view">{{$t('transaction.view_more')}} >></router-link>
    </div>
    <v-transaction :txMessages='actions'></v-transaction>
  </div>
</template>

<script>
import VSearch from '@/components/Search/search'
import VTransaction from '@/components/Transaction/transaction'
export default {
  components: {
    VSearch,
    VTransaction
  },
  data() {
    return {
      actions: [],
      info: {}
    }
  },
  mounted() {
    this._getInfo()
    this._getActions()
    // this._getActionsInfo = setInterval(() => {
    //   this._getActions()
    // }, 5000)
    // this._getBlockInfo = setInterval(() => {
    //   this._getInfo()
    // }, 3000)
  },
  destroyed() {
    clearInterval(this._getBlockInfo)
    clearInterval(this._getActionsInfo)
  },
  methods: {
    _getInfo() {
      var _this = this
      this.$http.post('http://192.168.1.67:8888/v1/chain/get_info').then(res => {
        console.log(res.data)
        _this.info = res.data
      })
    },
    _getActions() {
      var _this = this
      eos.getActions({ account_name: 'eosio.token' }).then(res => {
        _this.actions = res.actions
      })
      // this.$http
      //   .post('http://192.168.1.67:8888/v1/history/get_actions', {
      //     account_name: 'eosio.token'
      //   })
      //   .then(res => {
      //     console.log(res)
      //   })
    }
  }
}
</script>

<style scoped>
.record {
  padding-right: 20px;
  margin-top: 50px;
  margin-bottom: 10px;
}
.record span {
  font-size: 24px;
}
.record .more_view {
  font-size: 16px;
  float: right;
  padding-top: 10px;
}
</style>
