<template>
  <div>
    <div class="tx_detial_title">
      <h2>{{$t('transaction.tx_title')}}</h2>
    </div>
    <div class="container tx_message">
      <h2>{{$t('transaction.message')}}</h2>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.tx_id')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.b_height')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'BlockDetail',params:{blockHeight:'977694'}}">9515614</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.tx_time')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1秒前</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.from')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'Account',params:{a_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.to')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>
            <router-link :to="{name:'Account',params:{a_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.amount')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>1.0000</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          {{$t('transaction.fee')}}
        </div>
        <div class="col-md-9 col-xs-12">
          <p>0.0001</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
         {{$t('transaction.note')}}
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
</style>
