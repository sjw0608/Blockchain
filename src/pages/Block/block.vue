<template>
  <v-block :blockMessages='blockMessages'></v-block>
</template>

<script>
import VBlock from '@/components/Block/index'
export default {
  components: {
    VBlock
  },
  data() {
    return {
      blockMessages: []
    }
  },
  mounted() {
    this.getBlock()
  },
  methods: {
    getBlock() {
      this.$http
        .get('http://yapi.demo.qunar.com/mock/19300/api/block', {
          params: {
            page: 1,
            pageSize: 20
          }
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style>
</style>
