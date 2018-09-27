<template>
  <div>
    <div v-for="tx in Block_tx">
      <div  class="container tx_message">
        <h2>{{$t('transaction.tx_title')}}</h2>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.tx_id')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>
              <router-link :to="{name:'TransactionDetail',params:{tx_id:tx.action_trace.trx_id }}">{{tx.action_trace.trx_id }}</router-link>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.b_height')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>
              <router-link :to="{name:'BlockDetail',params:{blockHeight:tx.block_num}}">{{tx.block_num}}</router-link>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.tx_time')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>{{new Date(tx.block_time+'z').format('yyyy-MM-dd hh:mm:ss')}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.from')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>
              <router-link :to="{name:'Account',params:{a_id:tx.action_trace.act.data.from}}">{{tx.action_trace.act.data.from}}</router-link>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.to')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>
              <router-link :to="{name:'Account',params:{a_id:tx.action_trace.act.data.to}}">{{tx.action_trace.act.data.to}}</router-link>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12">
            {{$t('transaction.amount')}}
          </div>
          <div class="col-md-9 col-xs-12">
            <p>{{tx.action_trace.act.data.quantity}}</p>
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
            <p>{{tx.action_trace.act.data.memo}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Block_tx: Array
  }
}
</script>

<style scoped>
.tx_message {
  margin-top: 0;
}
</style>
