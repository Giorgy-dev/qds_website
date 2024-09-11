<script lang="ts">
  type HText = {
    title: string;
    content: string[];
  };

  export let texts: HText[];
</script>

<div class="flex flex-col gap-4 mt-5">
  {#each texts as ht}
    <details class="flex flex-col">
      <summary class="cursor-pointer">
        {ht.title}
      </summary>
      <div class="vertical-line">
        {#each ht.content as content}
          <p class="my-2 pl-5 lg:pl-10">{content}</p>
        {/each}
      </div>
    </details>
  {/each}
</div>
