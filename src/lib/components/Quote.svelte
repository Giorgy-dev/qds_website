<script lang="ts">
  type Quote = {
    quote: string;
    author?: string;
  };

  export let quote: Quote;
</script>

<div class="flex flex-col w-full min-h-[92svh] mb-[10rem] mt-20">
  <h1
    class="text-[15rem] lg:text-[30rem] leading-[0rem] translate-y-[3.2rem] lg:translate-y-[4.6rem] flex-none"
  >
    «
  </h1>
  <div class="flex-grow grid place-content-center pt-10">
    <blockquote>
      <p class="text-xl">{quote.quote}</p>
    </blockquote>
    {#if quote.author}
      <p class="text-right mt-10 w-full pr-0 lg:pr-20">{quote.author}</p>
    {/if}
  </div>
  <h1
    class="text-[15rem] lg:text-[30rem] leading-[0rem] text-right -translate-y-[5rem] lg:-translate-y-[7.4rem] flex-none"
  >
    »
  </h1>
</div>
