<template>
  <div>
    <div class="account_title">
      <h2>{{$t('account.account')}}</h2>
    </div>
    <div class="container account_message">
      <h2>{{$t('account.a_message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('account.account_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</p>
        </div>
      </div>
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
    </div>
    <tx-detail></tx-detail>
  </div>
</template>

<script>
import TxDetail from '@/components/Transaction/tx_detail'
export default {
  components: {
    TxDetail
  }
}
</script>

<style scoped>
.tx_message {
  margin-top: 0px !important;
}
</style>
