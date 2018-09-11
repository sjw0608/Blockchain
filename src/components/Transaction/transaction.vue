<template>
  <div class="transaction">
    <div class="container">
      <table class="table table-striped">
        <tr class="title">
          <th>交易Hash</th>
          <th>区块高度</th>
          <th>交易时间</th>
          <th>来自</th>
          <th>发往</th>
          <th>金额</th>
          <th>手续费</th>
        </tr>
        <tr v-for="i in transactions"  class="active">
          <th>0X72f2a6a34f838</th>
          <th>977694</th>
          <th>1秒前</th>
          <th>ux3ea79b4dfd7c6</th>
          <th>ux40502243934cc</th>
          <th>1.000</th>
          <th>0.0001</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: 50
    }
  }
}
</script>

<style scoped>
.transaction {
  margin-top: 80px;
}
.transaction .table tr {
  height: 50px;
  color: #000;
  font-weight: 500;
}
.transaction .table tr:nth-child(2n-1) {
  background-color: #f9f8fa;
}
.transaction .table th {
  padding-left: 10px;
}
.transaction .title {
  border-bottom: 1px solid #e8e8e8;
}
.transaction .table {
  background-color: #fff;
  box-shadow: 0px 5px 10px 3px #efefef;
}
</style>
