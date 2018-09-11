<template>
  <div>
    <v-search></v-search>
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

<style>
</style>
