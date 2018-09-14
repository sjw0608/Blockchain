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
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
html,
body {
  font-family: 'Helvetica Regular', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.table {
  margin-bottom: 0;
}
</style>
