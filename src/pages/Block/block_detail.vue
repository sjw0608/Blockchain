<template>
  <div>
    <div class="block_detial_title">
      <h2>区块</h2>
      <h3>994160</h3>
    </div>
    <div class="container block_message">
      <h2>信息</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          区块高度
        </div>
        <div class="col-md-9 col-xs-12">
          <p>15641616</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          区块ID
        </div>
        <div class="col-md-9 col-xs-12">
          <p>d1c07ebfdf1a5a5f9ec5b96024b926429321eae4c25298423885d9ed83bfa7a1</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          上个区块
        </div>
        <div class="col-md-9 col-xs-12">
          <p>d1c07ebfdf1a5a5f9ec5b96024b926429321eae4c25298423885d9ed83bfa7a2</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          生成时间
        </div>
        <div class="col-md-9 col-xs-12">
          <p>22 分钟前(2018-09-14 05:26:04 凌晨 +UTC)</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          是否可逆
        </div>
        <div class="col-md-9 col-xs-12">
          <p>false</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          生产者
        </div>
        <div class="col-md-9 col-xs-12">
          <p>xs13454asasdwq54564a64d6sa46ca</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          生成节点
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1.21.245</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          交易数
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1</p>
        </div>
      </div>
    </div>
    <div class="container block_tx">
      <h2>交易</h2>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <td>交易Hash</td>
              <td>区块高度</td>
              <td>交易时间</td>
              <td>来自</td>
              <td>发往</td>
              <td>金额</td>
              <td>数量</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <router-link :to="{name:'TransactionDetail',params:{tx_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8</router-link>
              </td>
              <td>15641616</td>
              <td>
                1秒前
              </td>
              <td>
                <router-link :to="{}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
              </td>
              <td>
                <router-link :to="{}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
              </td>
              <td>
                1.0000
              </td>
              <td>
                0.0001
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.block_detial_title {
  background-color: #4090f7;
  height: 240px;
  text-align: center;
  color: #fff;
  padding-top: 50px;
  box-sizing: border-box;
}
.block_detial_title > h2 {
  font-size: 44px;
  font-weight: 700;
}
.block_message,
.block_tx {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 15px #ccc;
}
.block_message {
  margin-top: -60px;
  margin-bottom: 30px;
}

.block_message > h2,
.block_tx > h2 {
  border-bottom: 1px solid #ccc;
  font-size: 28px;
  padding-bottom: 10px;
}
.block_message .table tr {
  height: 45px;
  line-height: 45px;
}
.block_message .row {
  height: 30px;
  line-height: 30px;
}
.block_message .row p,
.block_tx .table td > a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.block_tx .table td > a {
  display: block;
  width: 132px;
}
</style>
