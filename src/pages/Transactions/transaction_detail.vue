<template>
  <div>
    <div class="tx_detial_title">
      <h2>{{$t('transaction.tx_title')}}</h2>
    </div>
    <div class="container tx_message">
      <h2>{{$t('transaction.message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.tx_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{tx_detail.id}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.b_height')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'BlockDetail',params:{blockHeight:tx_detail.block_num}}">{{tx_detail.block_num}}</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.tx_time')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{new Date(tx_detail.block_time+'z').format('yyyy-MM-dd hh:mm:ss')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.from')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'Account',params:{a_id:tx_detail.traces[0].act.data.from}}">{{tx_detail.traces[0].act.data.from}}</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.to')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'Account',params:{a_id:tx_detail.traces[0].act.data.to}}">{{tx_detail.traces[0].act.data.to}}</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.amount')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{tx_detail.traces[0].act.data.quantity}}</p>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.fee')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>0.0001</p>
        </div>
      </div> -->
      <div class="row">
        <div class="col-md-3 col-xs-12">
         {{$t('transaction.note')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>{{tx_detail.traces[0].act.data.memo}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tx_detail: {}
    }
  },
  mounted() {
    this.tx_id = this.$route.params.tx_id
    this._getTxDetail(this.tx_id)
  },
  watch: {
    $route(route) {
      this.tx_id = this.$route.params.tx_id
    }
  },
  methods: {
    _getTxDetail(tx_id) {
      var _this = this
      eos.getTransaction({ id: tx_id }).then(res => {
        _this.tx_detail = res
      })
    }
  }
}
</script>

<style scoped>
</style>
