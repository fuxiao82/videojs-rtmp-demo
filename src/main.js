// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
import App from './App'
// import VueVideoPlayer from 'vue-video-player'
// if (process.browser) {
//   const VueVideoPlayer = require('vue-video-player/dist/ssr')
//   Vue.use(VueVideoPlayer)
// }
// require videojs style
// if (process.browser) {
//   const VueVideoPlayer = require('vue-video-player/dist/ssr')
//   console.log(VueVideoPlayer)
//   Vue.use(VueVideoPlayer)
// }
import 'video.js/dist/video-js.css'
import 'video.js/dist/video.js'
import 'videojs-flash/dist/videojs-flash.js'
// import 'vue-video-player/src/custom-theme.css'
import VueVideoPlayer from 'vue-video-player/dist/vue-video-player.js'
// console.log(VueVideoPlayer)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
