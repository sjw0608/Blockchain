<template>
  <div>
    <div class="tx_header">
      <h2>{{$t('transaction.tx_title')}}</h2>
    </div>
    <div class="tx_">
      <v-transaction :txMessages='actions'></v-transaction>
    </div>
  </div>
</template>

<script>
import VTransaction from '@/components/Transaction/transaction'
import { get_actions } from '@/services/services'
export default {
  name: 'Transactions',
  components: {
    VTransaction
  },
  data() {
    return {
      actions: []
    }
  },
  mounted() {
    this._getActions()
    this._getActionsInfo = setInterval(() => {
      this._getActions()
    }, 1000)
  },
  destroyed() {
    clearInterval(this._getActionsInfo)
  },
  methods: {
    _getActions() {
      var _this = this
      get_actions({ account_name: 'eosio.token' }).then(res => {
        _this.actions = res.data.actions
      })
    }
  }
}
</script>

<style>
.tx_header {
  background-color: #4090f7;
  height: 240px;
  color: #fff;
  text-align: center;
}
.tx_header > h2 {
  line-height: 180px;
  font-size: 44px;
  font-weight: 700;
}
.tx_ {
  margin-top: -60px;
}
</style>
