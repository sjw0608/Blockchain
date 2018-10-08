<template>
  <div>
    <div class="account_title">
      <h2>{{$t('account.account')}}</h2>
    </div>
    <div class="container account_message">
      <h2>{{$t('account.a_message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.account_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{account.account_name}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.created')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{new Date(account.created+'Z').format('yyyy-MM-dd hh:mm:ss')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.balance')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{account.core_liquid_balance}}</p>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.try_currency')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>$ 9999999</p>
        </div>
      </div> -->
    </div>
    <tx-detail :Block_tx='block_tx'></tx-detail>
    <div class="page container" v-if="block_tx.length">
      <div class="last" @click='getMoreLast()'>last</div>
      <div class="next" @click='getMoreNext()'>next</div>
    </div>
  </div>
</template>

<script>
import TxDetail from '@/components/Transaction/tx_detail'
import { get_account, get_actions } from '@/services/services'
export default {
  components: {
    TxDetail
  },
  data() {
    return {
      account: {},
      block_tx: [],
      account_name: '',
      offset: 20,
      pops: 1
    }
  },
  mounted() {
    this.account_name = this.$route.params.a_id
    this._getAccount(this.account_name)
    this._getActions(this.account_name, this.pops, this.offset)
  },
  watch: {
    $route(route) {
      this.account_name = this.$route.params.a_id
      this._getAccount(this.account_name)
      this._getActions(this.account_name, this.pops, this.offset)
    }
  },
  methods: {
    _getAccount(account_name) {
      var _this = this
      get_account({ account_name: account_name }, res => {
        _this.account = res
      })
    },
    _getActions(account_name, pops, offset) {
      var _this = this
      var data = {
        account_name: account_name,
        pos: offset * (pops - 1),
        offset: offset
      }
      get_actions(data, res => {
        _this.block_tx = Array.reverse(res.actions)
      })
    },
    getMoreLast() {
      if (this.pops == 1) return
      this.pops -= 1
      this._getActions(this.pops, this.offset)
    },
    getMoreNext() {
      if (this.block_tx.length < 20) return
      this.pops += 1
      this._getActions(this.pops, this.offset)
    }
  }
}
</script>

<style scoped>
.tx_message {
  margin-top: 0px !important;
}
</style>
