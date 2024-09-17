<script lang="ts">

  type Item = {
    icon?: string;
    char?: string;
    title: string;
    description: string;
    hBgData?: string;
  };

  export let items: Item[];

</script>

<div class="grid gap-5 lg:gap-2.5 w-full grid-cols-1 lg:grid-cols-3">
  {#each items as item}
    <div
      class="
      w-full h-full border-grey-200 border-2 p-5 pt-8 rounded-lg text-filled
      transition-all duration-300 hover:text-neutral bg-branding hover:bg-primary
      ">
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
