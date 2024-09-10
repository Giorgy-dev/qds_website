<script lang="ts">
  import { animateTyping } from "$lib/components/Typewriter";

  export let title: string[];
  export let titleMobile: string[];
  export let content: string[];
  export let contentMobile: string[];

</script>

<!--hero-->
<div class="h-svh w-max-content absolute">
  <!--mobile-->
  <h1 class="inline-block text-auto-scale-mobile lg:hidden mt-1.5 lg:h-[55vh]">
    <span use:animateTyping={titleMobile} />
  </h1>

  <div class="lg:hidden">
    <!--contentMobile-->
    {#each contentMobile as paragraph}
      <p class="text-2xl">
        {paragraph}
      </p>
    {/each}
  </div>

  <!--desktop-->
  <h1 class="hidden lg:block text-auto-scale lg:h-[55vh] overflow-hidden">
    <span use:animateTyping={title} />
  </h1>

  <!--content-->
  <div class="hidden lg:block w-max">
    {#each content as paragraph}
      <p class="text-2xl">
        {paragraph}
      </p>
    {/each}
  </div>

  <!-- <slot /> -->

</div>

<style>
  h1 {
    font-family: "FFF Acid Grotesk Bold", sans-serif;
  }
  .text-auto-scale {
    font-size: 12vmin;
    font-size: 17vmax;
    line-height: 105%;
    transform: translateY(-5%);
  }
  .text-auto-scale-mobile {
    font-size: 6vmin;
    font-size: 9vmax;
    line-height: 105%;
    transform: translateY(-5%);
  }
</style>
