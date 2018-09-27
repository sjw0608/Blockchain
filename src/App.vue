<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <div style="height:20px"></div>
  </div>
</template>

<script>
import VHeader from './components/Header/header'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    VHeader
  },
  computed: {
    ...mapGetters({
      keywords: 'keywords'
    })
  },
  watch: {
    keywords() {
      this.keywordsChanged()
    }
  },
  methods: {
    ...mapActions({
      setKeywords: 'setKeywords'
    }),
    keywordsChanged() {
      if (!this.keywords) {
        return
      } else if (/^\d+$/.test(this.keywords)) {
        this.$router.push(`/block/${this.keywords}`)
        this.setKeywords({ keywords: '' })
      } else if (this.keywords.length >= 40) {
        this.$router.push(`/transactions/${this.keywords}`)
        this.setKeywords({ keywords: '' })
      } else {
        this.$router.push(`/account/${this.keywords}`)
        this.setKeywords({ keywords: '' })
      }
    }
  }
}
</script>

<style>
@import './styles/block_.css';

html,
body {
  font-family: 'Helvetica Regular', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.table {
  margin-bottom: 0;
}
</style>
