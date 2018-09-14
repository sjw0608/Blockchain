<template>
  <div class="block">
    <div class="block_title">
      <h2>区块</h2>
    </div>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-hover">
        <thead>
          <tr class="title">
            <th>区块高度</th>
            <th>生成时间</th>
            <th>矿工</th>
            <th>交易笔数</th>
            <th>出块节点</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in transactions">
            <th>
              <router-link :to="{name:'BloBlockDetailck',params:{blockHeight:'985415'}}">985415</router-link>
            </th>
            <th>1秒前</th>
            <th>
              <router-link :to="{}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
            </th>
            <th>2</th>
            <th>1.25.254</th>
          </tr>
        </tbody>
      </table>
      </div>
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
