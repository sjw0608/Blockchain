<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
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
</style>
