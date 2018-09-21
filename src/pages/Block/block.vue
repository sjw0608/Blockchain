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
    this._getBlock()
  },
  methods: {
    _getBlock() {
      eos.getBlock('1').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
