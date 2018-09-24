<template>
  <div class="item">
    <div class="player">
       
      <video-player class="vjs-custom-skin" :options="playerOptions">
      </video-player>

      <!-- <video class="video-js vjs-default-skin" controls width="640" height="320" 
      data-setup='{"techOrder": ["html5", "flash"]}'>
          <source src="rtmp://pull-g.kktv8.com/livekktv/100987038" type="rtmp/mp4">
      </video> -->
      <!-- <video class="video-js vjs-default-skin" controls width="640" height="320" 
      data-setup='{"techOrder": ["html5", "flash"]}'>
          <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type="rtmp/mp4">
      </video> -->
      <!-- <video class="video-js vjs-default-skin" controls width="640" height="320" 
      data-setup='{"techOrder": ["html5", "flash"]}'>
          <source src="rtmp://live.hkstv.hk.lxdns.com/live/hks" type="rtmp/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
//video.js需要此包
// // require styles
import 'videojs-contrib-hls'
import 'videojs-flash'
// import videojs from 'video.js'
// videojs.options.flash.swf = 'https://unpkg.com/videojs-swf@5.4.0/dist/video-js.swf';
// import 'video.js/dist/video-js.css'

export default {
    data () {
    return {
       playerOptions: {
          height: '360',
          sources: [{
            type: "rtmp/mp4",
            src: "rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"
          }],
          techOrder: ['flash'],
          autoplay: false,
          controls: true,
          language: 'zh-CN'
        }
    }
  }
}
</script>

