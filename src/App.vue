<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <div style="height:20px"></div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import VHeader from './components/Header/header'
import VFooter from './components/Footer/footer'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
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
    keywordsChanged() {
      this.$router.push(`/block/${this.keywords}`)
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
