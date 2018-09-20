<template>

    <div class="">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="title">
              <th>{{$t('search.height')}}</th>
              <th>{{$t('block.time')}}</th>
              <th>{{$t('block.b_account')}}</th>
              <th>{{$t('block.tx_num')}}</th>
              <th>{{$t('search.node')}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in transactions">
              <th>
                <router-link :to="{name:'BlockDetail',params:{blockHeight:'985415'}}">985415</router-link>
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
</template>

<script>
export default {
  props: {
    blockMessages: Array
  },
  data() {
    return {
      transactions: 20
    }
  }
}
</script>

<style scoped>
.table tr {
  height: 50px;
  color: #000;
  font-weight: 500;
}
.table th {
  padding-left: 10px;
  line-height: 2.5;
}
.title {
  border-bottom: 1px solid #e8e8e8;
  background-color: #f9f9f9;
}
.table-responsive {
  box-shadow: 0 0 15px #ccc;
}
.table {
  background-color: #fff;
}
</style>
