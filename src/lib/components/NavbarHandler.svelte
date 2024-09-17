<script lang="ts">
  import { page } from "$app/stores";
  import NavDesktop from "./NavDesktop.svelte";

  export let isMobile: boolean = true;
  export let isOpen: boolean = false;
</script>

<div>
  <!--nav desktop section-->
  {#if !isMobile}
    <NavDesktop />
  {/if}

  {#if isMobile}
    <!--nav mobile section-->

    <!--burger menu-->
    <div class="{isOpen ? ' hide ' : ' show block '} ">
      <div class="w-full flex justify-start fixed top-0 left-0 p-5 gap-2.5">
        <a href="/">
          <img src="/assets/logo/logo_partial.svg" alt="" class="h-[32px]" />
        </a>
        <div class="flex w-full"></div>
        <button
          on:click={() => {
            isOpen = true;
          }}
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H22M0 10H22M0 18H22" stroke="black" stroke-width="4" />
          </svg>
        </button>
      </div>
    </div>

    <!--nav mobile-->
    <div class={isOpen ? " show block " : " hide "}>

      <div
        class="
fixed top-0 left-0 w-auto p-5 h-screen bg-primary
"
      >
        <nav
          class="
grid grid-cols-4 grid-rows-12 gap-5
whitespace-nowrap
"
        >
          <div class="row-span-5 col-span-4">
            <img src="/assets/logo/logo_partial_white.svg" alt="" srcset="" />
          </div>

          <div class="col-span-4 w-full grid grid-cols-4 grid-rows-1 gap-2">
            <div class="w-full flex gap-5 col-span-4">
              <hr class="w-full" />
              <button on:click={() => (isOpen = false)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.13153 22.0002L12.0459 12.0859M12.0459 12.0859L22.1315 2.00024M12.0459 12.0859L1.95996 2M12.0459 12.0859L21.96 22"
                    stroke="#0A0A0A"
                    stroke-width="4"
                  />
                </svg>
              </button>
            </div>
            <div class="col-span-2 content-end text-xl">
              <a on:click={() => (isOpen = false)} class="text-neutral" href="/"
                >{#if $page.url.pathname === "/"}›
                {/if}HOME</a
              >
            </div>
            <div class="col-span-2 content-end text-xl ml-1.5">
              <a
                on:click={() => (isOpen = false)}
                class="text-neutral"
                href="/mission"
                >{#if $page.url.pathname === "/mission"}›
                {/if}MISSION</a
              >
            </div>
          </div>

          <div
            class="
  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10
  "
          >
            <a
              on:click={() => (isOpen = false)}
              class="text-neutral"
              href="/branding"
              >{#if $page.url.pathname === "/branding"}›
              {/if}BRANDING</a
            ><br />
            <a
              on:click={() => (isOpen = false)}
              class="text-neutral mt-9"
              href="/uiuxdesign"
              >{#if $page.url.pathname === "/uiuxdesign"}›
              {/if}UI/UX DESIGN</a
            >
          </div>
          <div
            class="
  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10
  "
          >
            <a
              on:click={() => (isOpen = false)}
              class="text-neutral"
              href="/grafica"
              >{#if $page.url.pathname === "/grafica"}›
              {/if}GRAFICA</a
            ><br />
            <a
              on:click={() => (isOpen = false)}
              class="text-neutral"
              href="/fotografia"
              >{#if $page.url.pathname === "/fotografia"}›
              {/if}FOTOGRAFIA</a
            ><br />
            <a
              on:click={() => (isOpen = false)}
              class="text-neutral"
              href="/sounddesign"
              >{#if $page.url.pathname === "/sounddesign"}›
              {/if}SOUND DESIGN</a
            >
          </div>
        </nav>
        <div class="absolute bottom-10">
          <p class="col-span-4 text-xs font-normal row-span-2 content-end">
            Q Design Studio by The Hive S.r.l.
            <br />
            Viale dell'Industria, 19 - 35129 PADOVA - PD
            <br />
            P.IVA: 05260180285
            <br />
            Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="css">
  .hide {
    animation: disappear 0.2s forwards ease-in-out;
  }
  .show {
    animation: appear 0.2s forwards ease-in-out;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes disappear {
    from {
      opacity: 1;
      display: block;
    }
    to {
      opacity: 0;
      display: none;
    }
  }
  a {
    font-family: Acid Grotesk;
    font-weight: 200;
  }
  hr {
    border: 2px solid;
    color: #0a0a0a;
  }
</style>
