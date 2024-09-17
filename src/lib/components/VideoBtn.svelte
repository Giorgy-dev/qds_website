<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;
  export let videoSrc: string;
  
  onMount(() => {
    const videos = document.querySelectorAll("video");
    
    videos.forEach((video) => {
      if (window.innerWidth > 1400) {
        video.playsInline = true;
        video.play();
        video.controls = false;
        video.addEventListener("mouseover", function () {
          video.currentTime = 0;
          this.play();
        });

        video.addEventListener("touchstart", function () {
          this.play();
          video.currentTime = 0;
        });
      }
    });
  });
</script>

<div
  class="relative flex items-center justify-center overflow-hidden
  border-grey-200 border-2 hover:border-4 rounded-lg text-filled lg:text-primary
  transition-all duration-100 hover:text-filled bg-primary lg:bg-neutral
  min-h-[40vh] h-full hover:border-primary aspect-auto sm:aspect-square lg:aspect-auto"
>
  <video
    src={videoSrc}
    preload="none"
    autoplay
    loop
    muted
    class="absolute z-10 lg:opacity-0 lg:hover:opacity-100 transition-all duration-400
    h-full lg:w-full overflow-hidden object-cover block scale-110 touch-none"
  />

  <!--bg-gradient-to-tr from-neutral via-30% via-transparent-->
  <div
    class="w-full h-full z-30 text-inherit pointer-events-none p-5 grid content-end"
  >
    <h1 class="text-4xl text-inherit">{title}</h1>
  </div>
</div>

<style>
  video::-webkit-media-controls {
    display: none !important;
    opacity: 0;
  }
  video::-webkit-media-controls-start-playback-button {
    display: none !important;
  }
</style>
