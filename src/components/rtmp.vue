<template>
    <div class="container">
      <div class="button-wrapper">
        <button @click='switchSrc(player, playerSource1)' class='switch-btn'>switch src1 小鸟</button>
        <button @click='switchSrc(player, playerSource2)' class='switch-btn'>switch src2 中文卫视</button>
        <button @click='switchSrc(player, playerSource3)' class='switch-btn'>switch src3 石头</button>
        <button @click='switchSrc(player, playerSource4)' class='switch-btn'>switch src4 黑凤梨</button>
        <!-- <button @click='switchSrc(player, playerSourceDash)' class='switch-btn'>switchToDash</button> -->
      </div>
        
        <div class="player">
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer1"
                :playsinline="true"
                :options="playerOptions"
                @ended="ended"
                @play="play"
                @playing="playing"
                @pause="pause"
                @waiting="waiting"
                @loadeddata="loadeddata"
                @timeupdate="timeupdate"
                @canplay="canplay"
                @canplaythrough="canplaythrough"
                @statechanged="statechanged"
                @ready="ready"
                @on-change="change"
                @handleFullscreenChange="handleFullscreenChange"
                @handleMouseMove='handleMouseMove'
                @durationchange='durationchange'
                @volumechange='volumechange'
                @loadstart='loadstart' 
                @suspend='suspend'
                @progress='progress'
                @ratechange='ratechange'
            ></video-player>
                <!-- @resize='resize' -->
                <!-- @abort='abort' 
                @error='error' 
                @emptied='emptied' 
                @stalled='stalled'
                @loadedmetadata='loadedmetadata' 
                @seeking='seeking' 
                @seeked='seeked' -->
        </div>
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
        autoplay: true,//自动播放
        controlBar: {
          timeDivider: false, // 时间分割线
          durationDisplay: false, // 总时间
          progressControl: true, // 进度条
          customControlSpacer: true, // 未知
          fullscreenToggle: true // 全屏
        },
        controls: true,//进度条
        fluid: true,//按流体大小自适应
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
        poster: require('../assets/img/cover/1.png'),  //静止时的画面
        preload: true,
        label: '原始流1',
        // 流配置，数组形式，会根据兼容顺序自动切换
        sources: [
          {
            type: 'video/mp4',
            src: 'http://221.228.226.23/11/t/j/v/b/tjvbwspwhqdmgouolposcsfafpedmb/sh.yinyuetai.com/691201536EE4912BF7E4F1E2C67B8119.mp4',
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
      playerSourceDashOption: null,


      playerSource1: null,
      playerSource2: null,
      playerSource3: null,
      playerSource4: null,
      playerSourceDash: null
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer1.player;
    },
    current () {
      return this.player.currentResolution();
    }
  },
  methods: {
    loadstart () {
      console.log('loadstart');
    },
    suspend () {
      console.log('suspend');
    },
    ready (player) {
      // console.log('ready');
      this.initHotKey(player);
      this.initSwitch(player);
      this.initThumb(player);
    },
    volumechange () {
      console.log('volumechange');
    },
    onTimeupdate (e) {
      // console.log('onTimeupdate');
    },
    change () {
      console.log('change');
    },
    play () {
      // console.log('play');
    },
    pause () {
      // console.log('pause');
    },
    ended () {
      // console.log('ended');
    },
    waiting () {
      // console.log('waiting');
    },
    playing () {
      // console.log('playing');
    },
    loadeddata () {
      // console.log('loadeddata');
    },
    timeupdate () {
      // console.log('timeupdate');
    },
    canplay () {
      // console.log('canplay');
    },
    canplaythrough () {
      // console.log('canplaythrough');
    },
    statechanged () {
      // console.log('statechanged');
    },
    /**
     * 全屏切换回调
     */
    handleFullscreenChange (e) {
      console.log('handleFullscreenChange');
    },
    setFullScreen () {
      console.log('setFullScreen');
      this.player.requestFullscreen();
    },
    initHotKey (player) {
      // console.log(typeof player.hotkeys)
      player.hotkeys({
        volumeStep: 0.1,
        // (integer or function): The number of seconds to seek forward and backwards when using the Right and Left Arrow keys, or a function that generates an integer given the KeyboardEvent (default: 5)
        seekStep: 5,
        enableModifiersForNumbers: false,
        enableFullscreen: true,// Enables toggling the video fullscreen by pressing the F key (default: true)
        fullscreenKey: function (event, player) {
          // console.log(event)
          // override fullscreen to trigger when pressing the xF key or Ctrl+Enter
          return ((event.which === 70) || (event.ctrlKey && event.which === 13));
        }
      });
    },
    /**
     * 初始化切换源插件
     */
    initSwitch (player) {
      // console.log(typeof player.videoJsResolutionSwitcher)
      player.videoJsResolutionSwitcher({
        default: 'high',
        dynamicLabel: true
      });
    },
    switchSrc (player, sources) {
      // console.log(player);
      // Add dynamically sources via updateSrc method
      let { src, type, label } = { ...sources.sources[0] };

      player.updateSrc([
        {
          src,
          type,
          label
        }
      ]);
    },
    resolutionChange (player) {
      console.log(player);
      console.log('Source changed to %s', player.src())
    },
    initThumb (player) {
      // console.log(player)
      // console.log(player.spriteThumbnails);
      player.thumbnails({
        0: {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3874676548,29357861&fm=11&gp=0.jpg',
          style: {
            left: '-60px',
            width: '600px',
            height: '68px',
            clip: 'rect(0, 120px, 68px, 0)'
          }
        },
        10: {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540741630466&di=0c78d5b0350d1730c8cc36d532ee2993&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fd1a20cf431adcbef011db9bba6af2edda3cc9f66.jpg',
          style: {
            left: '-180px',
            clip: 'rect(0, 240px, 68px, 120px)'
          }
        },
        20: {
          style: {
            left: '-300px',
            clip: 'rect(0, 360px, 68px, 240px)'
          }
        },
        30: {
          style: {
            left: '-420px',
            clip: 'rect(0, 480px, 68px, 360px)'
          }
        },
        40: {
          style: {
            left: '-540px',
            clip: 'rect(0, 600px, 68px, 480px)'
          }
        }
      });
      // player.thumbnails({
      //   interval: 10,
      //   path: [
      //     'http://solutions.brightcove.com/bcls/assets/images/Tiger-4-preview.jpg',
      //     '../assets/img/thumb/1.PNG',
      //     '../assets/img/thumb/2.PNG',
      //     '../assets/img/thumb/3.PNG',
      //     '../assets/img/thumb/4.PNG',
      //     '../assets/img/thumb/5.PNG',
      //   ],
      //   url: 'http://solutions.brightcove.com/bcls/assets/images/Tiger-4-preview.jpg',
      //   width: 240,
      //   height: 100,
      // });
      // setup 160x90 thumbnails in sprite.jpg, 1 per second
      // player.spriteThumbnails({
      //   url: 'http://solutions.brightcove.com/bcls/assets/images/Tiger-4-preview.jpg',
      //   width: 160,
      //   height: 90
      // });
      // player.thumbnails(
      //   {
      //     "0": {
      //       "src": "http://solutions.brightcove.com/bcls/assets/images/Tiger-4-preview.jpg"
      //     }
      //   }
      // );
    },
    durationchange (e) {
      console.log('durationchange')
      console.log(e)
    },
    progress () {
      console.log('progress')
    },
    ratechange () {
      console.log('ratechange')
    },
    seeked () {
      console.log('seeked')
    },
    fullscreenchange () {
      console.log('fullscreenchange')
    },
    handleMouseMove () {
      console.log('handleMouseMove')
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

    this.playerSourceDash = {
      sources: [
        {
          type: 'application/dash+xml',
          src: 'https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd',
          label: 'Dash'
        }
      ]
    };
    this.playerSourceDashOption = Object.assign({}, this.playerOptions, this.playerSourceDashOption);

  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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