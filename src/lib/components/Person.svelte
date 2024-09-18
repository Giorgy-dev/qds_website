<script lang="ts">
  export let imgsrc: string;
  export let name: string;
  export let paragraph: string;
  export let label: string | string[];
  export let skills: string[];
</script>

<div class="rounded-lg border-2 overflow-hidden min-w-[300px] max-w-[420px]">
  <img
    src={imgsrc}
    alt=""
    class="w-full h-[35vh] lg:h-[50vh] object-cover object-top"
  />
  <div class="grid p-5 gap-2.5">
    <div class="flex gap-0">
      <h2 class="text-2xl font-bold">{name}</h2>
      <div class="flex flex-wrap gap-2">
        {#if typeof label === "string"}
          <span
            class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold"
            >{label}</span
          >
        {:else}
          {#each label as label}
            <span
              class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold"
              >{label}</span
            >
          {/each}
        {/if}
      </div>
    </div>
    <p class="text-m">{paragraph}</p>
    <div class="flex flex-wrap gap-2 pt-2.5">
      {#each skills as skill}
        <span class="bg-gray-200 px-2 py-1 rounded-lg">{skill}</span>
      {/each}
    </div>
  </div>
</div>
