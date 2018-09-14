<template>
  <div>
    <v-search></v-search>
    <div class="container record">
      <span>交易记录</span>
      <router-link :to="{name:'Transactions'}" class="more_view">更多 >></router-link>
    </div>
    <v-transaction></v-transaction>
  </div>
</template>

<script>
import VSearch from '@/components/Search/search'
import VTransaction from '@/components/Transaction/transaction'
export default {
  components: {
    VSearch,
    VTransaction
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
