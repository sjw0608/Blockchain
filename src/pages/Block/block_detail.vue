<template>
  <div>
    <div>
      <div class="block_detial_title">
        <h2>{{$t('block.b_title')}}</h2>
        <!-- <h3>994160</h3> -->
      </div>
      <div class="container block_message">
        <h2>{{$t('transaction.message')}}</h2>
        <div v-if="block_message">
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('transaction.b_height')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>{{blockDetail.block_num}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('block.block_id')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>{{blockDetail.id}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('block.last')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>
                {{blockDetail.previous}}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('block.time')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>{{new Date(blockDetail.timestamp+'Z').format('yyyy-MM-dd hh:mm:ss')}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('search.reversible')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>false</p>
            </div>
          </div>
          <div class="row" v-if=" blockDetail.new_producers ||  blockDetail.producer">
            <div class="col-md-3 col-xs-12">
              {{$t('block.b_account')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>
                <router-link :to="{name:'Account',params:{a_id:(blockDetail.new_producers ? blockDetail.new_producers : blockDetail.producer)}}">{{blockDetail.new_producers ? blockDetail.new_producers : blockDetail.producer}}</router-link>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('search.node')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>{{blockDetail.producer_signature}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12">
              {{$t('block.tx_num')}}
            </div>
            <div class="col-md-9 col-xs-12">
              <p>{{Block_tx_num}}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>{{$t('tip.block_tip')}}</p>
        </div>
      </div>
      <!-- <tx-detail :Block_tx = 'Block_tx'></tx-detail> -->
      <div class="container tx_message">
        <h2>{{$t('transaction.tx_title')}}</h2>
        <div class="table-responsive" v-if="Block_tx.length">
        <table class="table">
          <thead>
            <tr class="title">
              <th>TxHash</th>
              <th>{{$t('block.b_title')}}</th>
              <th>{{$t('block.b_time')}}</th>
              <th>{{$t('block.b_status')}}</th>
              <th>{{$t('block.actions')}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="idx in Block_tx">
              <th>
                <router-link :to="{name:'TransactionDetail',params:{tx_id:idx.trx.id?idx.trx.id:idx.trx}}">{{idx.trx.id?idx.trx.id:idx.trx}}</router-link>
              </th>
              <th>
                {{blockDetail.block_num}}
              </th>
              <th>{{idx.trx.transaction?new Date(idx.trx.transaction.expiration+'Z').format('yyyy-MM-dd hh:mm:ss'):new Date(blockDetail.timestamp+'Z').format('yyyy-MM-dd hh:mm:ss') }}</th>
              <th>
                {{idx.status}}
              </th>
              <th>
                {{idx.trx.transaction?idx.trx.transaction.actions.length :0}}
              </th>
            </tr>
          </tbody>
        </table>
        </div>
        <div v-else>
          {{$t('tip.tx_tip')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TxDetail from '@/components/Transaction/tx_detail'
import { get_block } from '@/services/services'
export default {
  components: {
    TxDetail
  },
  data() {
    return {
      blockDetail: {},
      Block_tx: [],
      Block_tx_num: 0,
      block_message: true
    }
  },
  mounted() {
    this.blockHeight = this.$route.params.blockHeight
    this._getBlockDetail(this.blockHeight)
  },
  watch: {
    $route(route) {
      this.blockHeight = this.$route.params.blockHeight
      this._getBlockDetail(this.blockHeight)
    }
  },
  methods: {
    _getBlockDetail(block_id) {
      var _this = this
      get_block({ block_num_or_id: block_id }, function(res) {
        console.log(new Date(res.timestamp + 'Z').format('yyyy-MM-dd hh:mm:ss'))
        _this.blockDetail = res
        _this.Block_tx = res.transactions
        _this.Block_tx_num = res.transactions.length
      })
    }
  }
}
</script>

<style scoped>
.block_message .table tr {
  height: 45px;
  line-height: 45px;
}
.tx_message {
  margin-top: 50px !important;
  padding-bottom: 20px;
}
</style>
