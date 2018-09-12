<template>
  <div class="transaction">
    <div class="container">
      <table class="table table-striped">
        <tr class="title">
          <th>区块高度</th>
          <th>生成时间</th>
          <th>交易笔数</th>
          <th>出块节点</th>
        </tr>
        <tr v-for="i in transactions">
          <th>
            <router-link :to="{}">985415</router-link>
          </th>
          <th>1秒前</th>
          <th>2</th>
          <th>1.25.254</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: 20
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
