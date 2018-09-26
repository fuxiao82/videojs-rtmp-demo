<template>
  <div>
    <video id="player" class="player" controls preload="auto" width="640" height="264"
       data-setup="{}" techOrder="['flash']">
      <source src="rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"  type="rtmp/mp4">
    </video>
  </div>
</template>

<script>
  import 'videojs-flash'

  export default {
  }
</script>
