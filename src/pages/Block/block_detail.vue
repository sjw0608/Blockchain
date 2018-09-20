<template>
  <div>
    <div class="block_detial_title">
      <h2>{{$t('block.b_title')}}</h2>
      <!-- <h3>994160</h3> -->
    </div>
    <div class="container block_message">
      <h2>{{$t('transaction.message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.b_height')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>15641616</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('block.block_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>d1c07ebfdf1a5a5f9ec5b96024b926429321eae4c25298423885d9ed83bfa7a1</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('block.last')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{}">d1c07ebfdf1a5a5f9ec5b96024b926429321eae4c25298423885d9ed83bfa7a2</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('block.time')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>22 分钟前(2018-09-14 05:26:04 凌晨 +UTC)</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('search.reversible')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>false</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('block.b_account')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'Account',params:{a_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('search.node')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1.21.245</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('block.tx_num')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1</p>
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
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.block_message .table tr {
  height: 45px;
  line-height: 45px;
}
.tx_message {
  margin-top: 0px !important;
}
</style>
