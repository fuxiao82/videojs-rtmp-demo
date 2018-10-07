<template>
    <div class="container">
        <button @click='switchSrc(player)' class='switch-btn'>switch src</button>
        <div class="player">
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer1"
                :playsinline="true"
                :options="playerOptions"
                @play="onPlayerPlay"
                @pause="onPlayerPause"
                @ended="onPlayerEnded"
                @waiting="onPlayerWaiting"
                @playing="onPlayerPlaying"
                @loadeddata="onPlayerLoadeddata"
                @timeupdate="onPlayerTimeupdate"
                @canplay="onPlayerCanplay"
                @canplaythrough="onPlayerCanplaythrough"
                @statechanged="onPlayerStateChanged"
                @ready="onPlayerReadied"
                @on-change="onProgressChange"
                @handleFullscreenChange="handleFullscreenChange"
                @resolutionchange='resolutionChange'
            ></video-player>
        </div>
        <!-- <div class="player">
          <video-player class="video-player vjs-custom-skin"
              ref="videoPlayer2"
              :playsinline="true"
              :options="playerOptions2"
          ></video-player>
        </div>
        <div class="player">
          <video-player class="video-player vjs-custom-skin"
              ref="videoPlayer3"
              :playsinline="true"
              :options="playerOptions3"
          ></video-player>
        </div>
        <div class="player">
          <video-player class="video-player vjs-custom-skin"
              ref="videoPlayer4"
              :playsinline="true"
              :options="playerOptions4"
          ></video-player>
        </div>
      </div> -->
    </div>
</template>
 
<script>
export default {
  name: 'RtmpVideo',
  data () {
    return {
      initialized: false,
      currentTech: '',
      playerOptions: {
        aspectRatio: '16:9',
        autoplay: false,//自动播放
        controlBar: {
          timeDivider: false, // 时间分割线
          durationDisplay: false, // 总时间
          progressControl: true, // 进度条
          customControlSpacer: true, // 未知
          fullscreenToggle: true // 全屏
        },
        controls: true,//进度条
        // fluid: true,//按流体大小自适应
        // flash: {
        //   swf: '../../../static/VideoJS.swf'
        // },
        isFullscreen: this.isFullscreenInit,
        isFullscreenInit: false,
        live: true,
        loop: true,//是否循环
        language: 'zh-CN',
        notSupportedMessage: '此视频暂无法播放，请查看是否安装flash',//无法播放时显示的信息
        overNative: true,
        poster: require('../assets/cover.png'),  //静止时的画面
        preload: true,
        label: '原始流1',
        // 流配置，数组形式，会根据兼容顺序自动切换
        sources: [
          {
            type: 'rtmp/mp4',
            src: 'rtmp://media3.sinovision.net:1935/live/livestream',
            label: '原始流1'
          },
          // {
          //   type: 'rtmp/mp4',
          //   src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks',
          //   label: '原始流2'
          // },
          // {
          //   type: 'rtmp/mp4',
          //   src: 'rtmp://10.5.0.143:1935/render/A32E1B9AE8BE4F6083702F9B41DD2030',
          //   label: '原始流3'
          // }
        ],
        techOrder: ['html5', 'flash'],// 兼容顺序
      },
      playerOptions1: null,
      playerOptions2: null,
      playerOptions3: null,
      playerOptions4: null,
      playerSource1: null,
      playerSource2: null,
      playerSource3: null,
      playerSource4: null,
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer1.player;
    },
    current() {
      return this.player.currentResolution();
    }
  },
  methods: {
    onPlayerReadied (player) {
      // console.log('onPlayerReadied');
      this.initHotKey(player);
      this.initSwitch(player);
    },
    onTimeupdate (e) {
      // console.log('onTimeupdate');
    },
    onProgressChange () {
      // console.log('onProgressChange');
    },
    onPlayerPlay()  { 
      // console.log('onPlayerPlay');
    },
    onPlayerPause () { 
      // console.log('onPlayerPause');
    },
    onPlayerEnded () { 
      // console.log('onPlayerEnded');
    },
    onPlayerWaiting  (){
      // console.log('onPlayerWaiting');
     },
    onPlayerPlaying () { 
      // console.log('onPlayerPlaying');
    },
    onPlayerLoadeddata()  { 
      // console.log('onPlayerLoadeddata');
    },
    onPlayerTimeupdate () { 
      // console.log('onPlayerTimeupdate');
    },
    onPlayerCanplay () {
      // console.log('onPlayerCanplay');
    },
    onPlayerCanplaythrough () {
      // console.log('onPlayerCanplaythrough');
    },
    onPlayerStateChanged () { 
      // console.log('onPlayerStateChanged');
    },
    /**
     * 全屏切换回调
     */
    handleFullscreenChange(e) {
      console.log('handleFullscreenChange');
    },
    setFullScreen() {
      console.log('setFullScreen');
      this.player.requestFullscreen();
    },
    initHotKey(player) {
      // console.log(typeof player.hotkeys)
      player.hotkeys({
        volumeStep: 0.1,
        // (integer or function): The number of seconds to seek forward and backwards when using the Right and Left Arrow keys, or a function that generates an integer given the KeyboardEvent (default: 5)
        seekStep: 5,
        enableModifiersForNumbers: false,
        enableFullscreen: true,// Enables toggling the video fullscreen by pressing the F key (default: true)
        fullscreenKey: function(event, player) {
          // console.log(event)
          // override fullscreen to trigger when pressing the xF key or Ctrl+Enter
          return ((event.which === 70) || (event.ctrlKey && event.which === 13));
        }
      });
    },
    /**
     * 初始化切换源插件
     */
    initSwitch(player) {
      // console.log(typeof player.videoJsResolutionSwitcher)
      player.videoJsResolutionSwitcher({
        default: 'high',
        dynamicLabel: true
      });
    },
    switchSrc(player) {
      // console.log(player);
      // Add dynamically sources via updateSrc method
      let {src, type, label} = {...this.playerSource1.sources[0]};

      player.updateSrc([
        {
          src,
          type,
          label
        }
      ]);
      // this.player.src = this.playerOptions2.sources[0].src;
    },
    resolutionChange(player) {
      console.log(player);
      console.log('Source changed to %s', player.src())
    }

  },
  beforeDestroy () {
    // 组件beforeDestroy的时候调用dispose方法销毁videojs,组件内部已调用，此处可以不必调用
    // this.$refs.videoPlayer1.dispose();
  },
  created () {
    this.isFullscreenInit = false;

    this.playerSource1 = {
      sources: [// 流配置，数组形式，会根据兼容顺序自动切换
        {
          type: 'rtmp/mp4',
          src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov',
          label: '小鸟'
        }
      ]
    };
    this.playerOptions1 = Object.assign({}, this.playerOptions, this.playerSource1);
    
    this.playerSource2 = {
      sources: [// 流配置，数组形式，会根据兼容顺序自动切换
        {
          type: 'rtmp/mp4',
          src: 'rtmp://media3.sinovision.net:1935/live/livestream',
          label: '农业'
        }
      ]
    };
    this.playerOptions2 = Object.assign({}, this.playerOptions, this.playerSource2);
    
    this.playerSource3 = {
      sources: [// 流配置，数组形式，会根据兼容顺序自动切换
        {
          type: 'video/mp4',
          src: 'http://ksy.fffffive.com/mda-hinp1ik37b0rt1mj/mda-hinp1ik37b0rt1mj.mp4',
          label: '视频3'
        }
      ]
    };
    this.playerOptions3 = Object.assign({}, this.playerOptions, this.playerSource3);
    
    this.playerSource4 = {
      sources: [// 流配置，数组形式，会根据兼容顺序自动切换
        {
          type: 'video/mp4',
          src: 'http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4',
          label: '喜欢你'
        }
      ]
    };
    this.playerOptions4 = Object.assign({}, this.playerOptions, this.playerSource4);
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
}
.player {
  flex: 1;
  width: 500px;
  height: 400px;
}
.switch-btn {
  width: 80px;
  height: 45px;
  background: #3598db;
  outline: none;
  border: none;
  border-radius: 2px;
  color: #fff;
  margin: 10px;

  &:hover {
    background: #0772b9;
    cursor: pointer;
  }
}
</style>