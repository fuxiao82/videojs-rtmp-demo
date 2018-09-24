<template>
  <div id="app">
    <rtmp/>
  </div>
</template>

<script>
import rtmp from './components/rtmp-demo.vue'

export default {
  name: 'App',
  components: {
    rtmp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
