<script>
  import { page } from "$app/stores";
</script>

<nav
  class="
    h-svh
    grid grid-cols-4 grid-rows-12 gap-5
    whitespace-nowrap
    font-bold
    "
>
  <div class="row-span-5 col-span-4">
    <img src="/assets/logo/logo_partial.svg" alt="" srcset="" />
  </div>

  <div class="row-span-1 col-span-5 grid grid-rows-1 grid-cols-2 mt-5">
    <div class="content-end text-xl mix-blend-exclusion">
      <a class="text-primary" href="/"
        >{#if $page.url.pathname === "/"}›
        {/if}HOME</a
      >
    </div>
    <div class="content-end text-xl mix-blend-exclusion">
      <a class="text-primary" href="/mission"
        >{#if $page.url.pathname === "/mission"}›
        {/if}MISSION</a
      >
    </div>
  </div>
  <div class="col-span-4"></div>

  <div
    class="
        grid grid-cols-subgrid row-span-2 col-span-2 text-xl mix-blend-exclusion
        "
  >
    <a class="text-primary" href="/branding">
      {#if $page.url.pathname === "/branding"}›
      {/if}BRANDING</a
    ><br />
    <a class="text-primary" href="/uiuxdesign">
      {#if $page.url.pathname === "/uiuxdesign"}›
      {/if}UI/UX DESIGN</a
    >
  </div>
  <div
    class="
        grid grid-cols-subgrid row-span-2 col-span-2 text-xl mix-blend-exclusion
        "
  >
    <a class="text-primary" href="/grafica"
      >{#if $page.url.pathname === "/grafica"}›
      {/if}GRAFICA</a
    ><br />
    <a class="text-primary" href="/fotografia"
      >{#if $page.url.pathname === "/fotografia"}›
      {/if}FOTOGRAFIA</a
    ><br />
    <a class="text-primary" href="/sounddesign"
      >{#if $page.url.pathname === "/sounddesign"}›
      {/if}SOUND DESIGN</a
    >
  </div>

  <div class="col-span-4 row-span-2 grid content-end">
    <p class="text-xs font-normal w-full">
      Q Design Studio by The Hive S.r.l.
      <br />
      Viale dell'Industria, 19 - 35129 PADOVA - PD
      <br />
      P.IVA: 05260180285
      <br />
      Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.
    </p>
  </div>
</nav>

<style lang="css">
  a {
    font-family: Acid Grotesk;
    font-weight: 200;
  }
</style>
