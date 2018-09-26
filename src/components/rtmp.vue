<template>
    <div class="container">
        <div class="player">
        <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>
 </div>
 </div>
</template>
 
<script>
  export default {
    name: 'RtmpVideo',
    data() {
      return {
        initialized: false,
        currentTech: '',
        playerOptions: {
          overNative: true,
          autoplay: true,//自动播放
          controls: true,//进度条
          loop: true,//是否循环
          // fluid: true,//按流 体大小自适应
          notSupportedMessage: '此视频暂无法播放，请查看是否安装flash',//无法播放时显示的信息
          // flash: {
          //   swf: '../../../static/VideoJS.swf'
          // },
          techOrder: ['flash', 'html5'],// 兼容顺序
          sources: [// 流配置，数组形式，会根据兼容顺序自动切换
            {
              type: 'rtmp/mp4',
              src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
              // src:"rtmp://live.hkstv.hk.lxdns.com/live//hks"
              // src:"rtmp://10.5.0.143:1935/render/A32E1B9AE8BE4F6083702F9B41DD2030"
            },
          ],
         // poster: '../../../static/img/map.jpg',  //静止时的画面
          controlBar: {
            timeDivider: false, // 时间分割线
            durationDisplay: false, // 总时间
            progressControl: true, // 进度条
            customControlSpacer: true, // 未知
            fullscreenToggle: true // 全屏
          },

        }
      }
    },
    props:["videowidth","videoheight"],
    methods: {
      onPlayerReadied() {
        if (!this.initialized) {
          this.initialized = true
        }
        this.$refs.videoPlayer.player.width_ = 500
      },
      // record current time
      onTimeupdate(e) {
        // console.log('currentTime', e.cache_.currentTime)
      },

    }
  }
</script>