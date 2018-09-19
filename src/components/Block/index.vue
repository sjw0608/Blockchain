<template>
  <div class="block">
    <div class="block_title">
      <h2>{{$t('block.b_title')}}</h2>
    </div>
    <div class="container">
      <v-blocks :blockMessages='blockMessages'></v-blocks>
    </div>

  </div>
</template>

<script>
import VBlocks from './block'
export default {
  components: {
    VBlocks
  },
  props: {
    blockMessages: Array
  }
}
</script>

<style scoped>
.block_title {
  height: 240px;
  background-color: #4090f7;
  color: #fff;
  text-align: center;
}
.block_title > h2 {
  line-height: 180px;
  font-size: 44px;
  font-weight: 700;
}
.block .container {
  margin-top: -60px;
}
.block .table tr {
  height: 50px;
  color: #000;
  font-weight: 500;
}
.block .table th {
  padding-left: 10px;
  line-height: 2.5;
}
.block .title {
  border-bottom: 1px solid #e8e8e8;
  background-color: #f9f9f9;
}
.table-responsive {
  box-shadow: 0 0 15px #ccc;
}
.block .table {
  background-color: #fff;
}
</style>
