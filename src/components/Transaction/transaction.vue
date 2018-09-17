<template>
  <div class="transaction">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="title">
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
            <tr v-for="i in transactions">
              <th>
                <router-link :to="{name:'TransactionDetail',params:{tx_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8</router-link>
              </th>
              <th>
                <router-link :to="{name:'BloBlockDetailck',params:{blockHeight:'977694'}}">977694</router-link>
              </th>
              <th>1秒前</th>
              <th>
                <router-link :to="{name:'Account',params:{a_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
              </th>
              <th>
                <router-link :to="{name:'Account',params:{a_id:'0x201ffac024332e95a1990fb5e8b04836c70f067be4780b5560f95f5e922160b8'}}">ux026b28a21318175c85d0c86c4fe8f6a18c8f99fb</router-link>
              </th>
              <th>1.000</th>
              <th>0.0001</th>
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
.transaction .table tr {
  height: 50px;
  color: #000;
  font-weight: 500;
}

.transaction .table th {
  padding-left: 10px;
  line-height: 2.5;
}
.transaction .table th a {
  display: block;
  width: 132px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.transaction .title {
  border-bottom: 1px solid #e8e8e8;
  background-color: #f9f9f9;
}
.table-responsive {
  box-shadow: 0 0 15px #ccc;
}
.transaction .table {
  background-color: #fff;
}
</style>
