<template>
  <div>
    <div class="tx_header">
      <h2>{{$t('transaction.tx_title')}}</h2>
    </div>
    <div class="tx_">
      <v-transaction :txMessages='actions'></v-transaction>
      <div class="page container">
        <div class="last" @click='getMoreLast()'>last</div>
        <div class="next" @click='getMoreNext()'>next</div>
      </div>
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
      actions: [],
      pops: 1,
      offset: 20
    }
  },
  mounted() {
    this._getActions(this.pops, this.offset)
    this._getActionsInfo = setInterval(() => {
      this._getActions(this.pops, this.offset)
    }, 1000)
  },
  destroyed() {
    clearInterval(this._getActionsInfo)
  },
  methods: {
    _getActions(pops, offset) {
      var _this = this
      var data = {
        account_name: 'eosio.token',
        pos: offset * (pops - 1),
        offset: offset
      }
      get_actions(data, res => {
        _this.actions = Array.reverse(res.actions)
      })
    },
    getMoreLast() {
      if (this.pops == 1) return
      this.pops -= 1
      this._getActions(this.pops, this.offset)
    },
    getMoreNext() {
      this.pops += 1
      this._getActions(this.pops, this.offset)
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
