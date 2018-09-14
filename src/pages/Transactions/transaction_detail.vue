<template>
  <div>
    <div class="tx_detial_title">
      <h2>交易</h2>
      <h3>0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8</h3>
    </div>
    <div class="container tx_message">
      <h2>信息</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          交易Hash
        </div>
        <div class="col-md-9 col-xs-12">
          <p>0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          区块高度
        </div>
        <div class="col-md-9 col-xs-12">
          <p>9515614</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          交易时间
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1秒前</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          来自
        </div>
        <div class="col-md-9 col-xs-12">
          <p>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          发往
        </div>
        <div class="col-md-9 col-xs-12">
          <p>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          金额
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1.0000</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          手续费
        </div>
        <div class="col-md-9 col-xs-12">
          <p>0.0001</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          备注
        </div>
        <div class="col-md-9 col-xs-12">
          <p>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tx_detial_title {
  background-color: #4090f7;
  height: 240px;
  text-align: center;
  color: #fff;
  padding-top: 50px;
  box-sizing: border-box;
}
.tx_detial_title > h2 {
  font-size: 44px;
  font-weight: 700;
}
.tx_detial_title > h3,
.tx_message .row p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tx_message {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 15px #ccc;
}
.tx_message {
  margin-top: -60px;
  margin-bottom: 30px;
}

.tx_message > h2,
.block_tx > h2 {
  border-bottom: 1px solid #ccc;
  font-size: 28px;
  padding-bottom: 10px;
}
.tx_message .table tr {
  height: 45px;
  line-height: 45px;
}
.tx_message .row {
  height: 30px;
  line-height: 30px;
}
</style>
