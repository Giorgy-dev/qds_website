<script lang="ts">
  import { animateTyping } from "./Typewriter";
  export let title: string[];
</script>

<div class="w-full">
  <h6 class="font-bold text-l">
    <span use:animateTyping={title} />
  </h6>
  <hr class="mt-2 mb-5 " />
  <slot />
</div>

<style>
  h6 {
    font-family: "FFF Acid Grotesk Bold", sans-serif;
  }
  hr {
    border: 1.33px solid #0a0a0a; /*rgb(229 231 235)*/
  }
</style>
