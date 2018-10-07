<template>
  <div id="app">
    <rtmp/>
  </div>
</template>

<script>
import rtmp from './components/rtmp.vue'

export default {
  name: 'App',
  components: {
    rtmp
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
