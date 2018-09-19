<template>
  <div>
    <div class="block_detial_title">
      <h2>{{$t('block.b_title')}}</h2>
      <h3>994160</h3>
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
          <p>d1c07ebfdf1a5a5f9ec5b96024b926429321eae4c25298423885d9ed83bfa7a2</p>
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
          <p>xs13454asasdwq54564a64d6sa46ca</p>
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
    <div class="container block_tx">
      <h2>{{$t('transaction.tx_title')}}</h2>
      <v-block :blockMessages='blockMessages'></v-block>
    </div>
  </div>
</template>

<script>
import VBlock from '@/components/Block/block'
export default {
  components: {
    VBlock
  },
  data() {
    return {
      blockMessages: []
    }
  }
}
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
