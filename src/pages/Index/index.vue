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
import { get_info, get_actions } from '@/services/services'
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
    this._getActionsInfo = setInterval(() => {
      this._getActions()
    }, 1000)
    this._getBlockInfo = setInterval(() => {
      this._getInfo()
    }, 3000)
  },
  destroyed() {
    clearInterval(this._getBlockInfo)
    clearInterval(this._getActionsInfo)
  },
  methods: {
    _getInfo() {
      var _this = this
      get_info().then(res => {
        if (res.status == 200) {
          _this.info = res.data
        }
      })
    },
    _getActions() {
      var _this = this
      var data = {
        account_name: 'eosio.token'
      }
      get_actions(data).then(res => {
        if (res.status == 200) {
          _this.actions = res.data.actions
        }
      })
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
