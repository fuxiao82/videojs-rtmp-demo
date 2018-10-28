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
// import 'vue-video-player/src/custom-theme.css'
import VideoPlayer from 'vue-video-player'

// plugin
import 'videojs-flash'
import 'videojs-contrib-hls'
import 'videojs-hotkeys'
import 'videojs-resolution-switcher'
// import 'videojs-thumbnails/dist/browser/videojs-thumbnails.js'
// import 'videojs-sprite-thumbnails/dist/videojs-sprite-thumbnails.js'
import 'videojs-sprite-thumbnails'
// import 'videojs-sprite-thumbnails-for-videojs6'

// plugin css
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

import './videojs.thumbnails.css'
import './videojs.thumbnails.js'
// import 'videojs-thumbnails/dist/browser/videojs-thumbnails.css'

Vue.use(VideoPlayer)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
