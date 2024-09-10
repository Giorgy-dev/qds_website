<script lang="ts">
    export let banner : string;
    export let bottomBanner : string | undefined = undefined;
    export let videoSrc : string;
</script>

<div
  class="flex flex-col w-full min-h-[92svh]
      lg:max-h-[92svh] aspect-square mb-10 overflow-hidden
      border-grey-200 border-2 rounded-lg"
>
  <div class="flex text-[4rem]">
    {#each { length: 10 } as _}
      <h1 class="reverse-marquee pr-5">{banner}</h1>
    {/each}
  </div>

  <video
    src={videoSrc}
    autoplay={true}
    loop
    muted
    class="w-full h-full object-cover"
  />

  <div class="flex text-[4rem]">
    {#each { length: 10 } as _}
      <h1 class="marquee pr-5">{bottomBanner ?? banner}</h1>
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
</style>
