<script lang="ts">
  import Contatti from "$lib/components/Contatti.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "../lib/components/NavbarHandler.svelte";
  
  import "$lib/styles/app.css";
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={'/assets/logo/logo.svg'} />
  <title>Q Design Studios</title>
</svelte:head>

<div
  class="
h-screen
flex
m-10
"
>
  <!--Mobile-->
  <div class="flex-none fixed w-full lg:hidden z-50">
    <Navbar />
  </div>

  <!--Desktop-->
  <div class="fixed flex-none max-w-[25vw] top-10 hidden lg:block z-50">
    <Navbar isMobile={false} />
  </div>

  <div
    class="flex flex-row flex-wrap lg:ml-[25vw] gap-2 lg:gap-5 relative z-0 w-full"
  >
    <div class="flex-auto min-w-[30vw] w-full lg:ml-5 static">
      <slot />
      <Footer />
    </div>
  </div>
</div>

<div class="absolute bottom-10 lg:right-10 lg:w-[25vw] w-full">
  <div class="hidden lg:block sticky h-fit w-full">
    <Contatti />
  </div>
</div>
