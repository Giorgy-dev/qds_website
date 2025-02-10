<script lang="ts">
  export let banner: string;
  export let bottomBanner: string | undefined = undefined;
  export let videoSrc: string;

  import { onMount } from "svelte";

  onMount(() => {
    var videoElements = document.querySelectorAll("video");
    videoElements.forEach((videoElement) => {
      videoElement.removeAttribute("controls");
      videoElement.play();
    });
  });
</script>

<div
  class="flex flex-col w-full
      lg:max-h-[92svh] aspect-square mb-10
      border-grey-200 border-2 rounded-lg
      zoom-in-inview overflow-hidden"
>
  <div class="flex text-[4rem] z-10">
    {#each { length: 10 } as _}
      <h1 class="reverse-marquee pr-5 -mb-40 text-neutral">{banner}</h1>
    {/each}
  </div>

  <video
    autoplay
    muted
    loop
    playsinline
    preload="none"
    controls={false}
    disablepictureinpicture
    controlslist="nofullscreen nodownload noremoteplayback"
    class="h-full w-full object-cover pointer-events-none"
    src={videoSrc}
  />

  <div class="flex text-[4rem] -mt-[6rem]">
    {#each { length: 10 } as _}
      <h1 class="marquee pr-5 text-neutral">{bottomBanner ?? banner}</h1>
    {/each}
  </div>
</div>

<style>
  .marquee {
    white-space: nowrap;
    animation: marquee 5s linear infinite;
  }

  .reverse-marquee {
    white-space: nowrap;
    animation: marquee 5s linear reverse infinite;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  video::-webkit-media-controls {
    display: none !important;
    opacity: 0;
  }
  video::-webkit-media-controls-start-playback-button {
    display: none !important;
  }
</style>
