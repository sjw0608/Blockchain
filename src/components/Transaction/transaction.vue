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
            </tr>
          </thead>
          <tbody>
            <tr v-for="idx in txMessages">
              <th>
                <router-link :to="{name:'TransactionDetail',params:{tx_id:idx.action_trace.trx_id}}">{{idx.action_trace.trx_id}}</router-link>
              </th>
              <th>
                <router-link :to="{name:'BlockDetail',params:{blockHeight:idx.block_num}}">{{idx.block_num}}</router-link>
              </th>
              <th>{{new Date(idx.block_time+'z').format('yyyy-MM-dd hh:mm:ss')}}</th>
              <th>
                <router-link :to="{name:'Account',params:{a_id:idx.action_trace.act.data.from}}">{{idx.action_trace.act.data.from}}</router-link>
              </th>
              <th>
                <router-link :to="{name:'Account',params:{a_id:idx.action_trace.act.data.to}}">{{idx.action_trace.act.data.to}}</router-link>
              </th>
              <th>{{idx.action_trace.act.data.quantity}}</th>
              <!-- <th>0.0001</th> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txMessages: Array
  },
  data() {
    return {}
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
