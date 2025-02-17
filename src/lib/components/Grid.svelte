<script lang="ts">
  type Item = {
    icon?: string;
    char?: string;
    title: string;
    description: string;
    hBgData?: string;
  };

  import { onMount } from "svelte";

  export let items: Item[];

  onMount(() => {
    const isAnimated: boolean = false;
    const obj: NodeListOf<Element> = document.querySelectorAll(
      ".animate-pulse-block-progression"
    );
    if (!isAnimated) animatePulseBlockProgression(obj);
  });

  function animatePulseBlockProgression(obj: NodeListOf<Element>) {
    var pulse_i: number = 0;
    const intervalId = setInterval(() => {
      if (!obj) clearInterval(intervalId);
      const item = obj[0].childNodes[pulse_i < 0 ? 0 : pulse_i] as Element;
      item.classList.remove("pulse-on");
      const nextItem = obj[0].childNodes[pulse_i++] as Element;
      nextItem.classList.add("pulse-on");

      console.log(item);
      if (pulse_i >= obj[0].childNodes.length) pulse_i = 0;
      setTimeout(() => {
        item.classList.remove("pulse-on");
        nextItem.classList.remove("pulse-on");
      }, 1000);
    }, 1600);
  }
</script>

<div
  class="grid gap-5 lg:gap-2.5 w-full grid-cols-1 lg:grid-cols-3 animate-pulse-block-progression"
>
  {#each items as item}
    <div
      class="
      w-full h-full border-grey-200 border-2 p-5 pt-8 rounded-lg text-filled
      transition-all duration-300 bg-branding
      "
    >
      {#if item.icon}
        <div class="flex mb-5 w-full lg:w-1/2">
          <img src={item.icon} alt="" srcset="" />
        </div>
      {:else if item.char}
        <h1 class="text-inherit text-[10rem] -translate-y-[22%]">
          {item.char}
        </h1>
      {/if}
      <h1 class="text-[2rem] text-inherit">{item.title}</h1>
      <p class="text-m lg:text-l text-inherit">{item.description}</p>
    </div>
  {/each}
</div>
