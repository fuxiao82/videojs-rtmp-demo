<template>
  <div>
    <!-- <video-player class="vjs-custom-skin" :options="playerOptions">
    </video-player> -->
    <video id="player" class="player" controls preload="auto" width="640" height="264"
       data-setup="{}" techOrder="['flash']">
      <source :src="video"  type="rtmp/mp4">
    </video>
  </div>
</template>

<script>
  import 'videojs-flash'

  export default {
    data() {
      return {
        video1: "rtmp://live.hkstv.hk.lxdns.com/live/hks",
        video: "rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov",
        playerOptions: {
          height: '360',
          sources: [{
            type: "rtmp/mp4",
            // src: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
            src: "rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"
          }],
          swf: "https://cdn.bootcss.com/videojs-swf/5.4.1/video-js.swf",
          techOrder: ['flash'],
          autoplay: false,
          controls: true,
        },
        // playerOptions1: {
        //   height: '360',
        //   autoplay: true,
        //   muted: true,
        //   language: 'en',
        //   playbackRates: [0.7, 1.0, 1.5, 2.0],
        //   sources: [{
        //     type: "video/mp4",
        //     src: "http://vjs.zencdn.net/v/oceans.mp4",
        //     // webm
        //     // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        //   }],
        // }
      }
    },
    mounted() {
      videojs("player", this.playerOptions)
    }
  }
</script>

<style>
  .player {
    width: 400px;
    height: 400px;
  }
</style>