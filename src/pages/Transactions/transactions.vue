<template>
  <div>
    <div class="tx_header">
      <h2>{{$t('transaction.tx_title')}}</h2>
    </div>
    <div class="tx_">
      <v-transaction></v-transaction>
    </div>
  </div>
</template>

<script>
import VTransaction from '@/components/Transaction/transaction'
export default {
  name: 'Transactions',
  components: {
    VTransaction
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
