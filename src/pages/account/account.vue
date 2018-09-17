<template>
  <div>
    <div class="account_title">
      <h2>{{$t('account.account')}}</h2>
      <h3>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</h3>
    </div>
    <div class="container account_message">
      <h2>{{$t('account.a_message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.balance')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>999999</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.try_currency')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>$ 9999999</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.account_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</p>
        </div>
      </div>
    </div>
    <div class="container block_tx">
      <h2>{{$t('transaction.tx_title')}}</h2>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>{{$t('transaction.tx_id')}}</th>
              <th>{{$t('transaction.b_height')}}</th>
              <th>{{$t('transaction.tx_time')}}</th>
              <th>{{$t('transaction.from')}}</th>
              <th>{{$t('transaction.to')}}</th>
              <th>{{$t('transaction.amount')}}</th>
              <th>{{$t('transaction.fee')}}</th>
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
.account_title {
  background-color: #4090f7;
  height: 240px;
  text-align: center;
  color: #fff;
  padding-top: 50px;
  box-sizing: border-box;
}
.account_title > h2 {
  font-size: 44px;
  font-weight: 700;
}
.account_title > h3,
.account_message .row p,
.block_tx .table td > a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.block_tx .table td > a {
  display: block;
  width: 132px;
}
.account_message,
.block_tx {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 15px #ccc;
}
.account_message {
  margin-top: -60px;
  margin-bottom: 30px;
}

.account_message > h2,
.block_tx > h2 {
  border-bottom: 1px solid #ccc;
  font-size: 28px;
  padding-bottom: 10px;
}
.account_message .table tr {
  height: 45px;
  line-height: 45px;
}
.account_message .row {
  height: 30px;
  line-height: 30px;
}
</style>
