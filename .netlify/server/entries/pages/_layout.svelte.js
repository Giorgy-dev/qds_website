import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, d as null_to_empty, f as add_attribute } from "../../chunks/ssr.js";
import { S as Section } from "../../chunks/Section.js";
import { p as page } from "../../chunks/stores.js";
const Contatti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: ["↓ CONTATTI", "↘ CONTATTI", "↘ CONTATTI"]
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-rows justify-between text-nowrap text-sm gap-10 " data-svelte-h="svelte-1yhmcp2"><p>ig: <br>
      mail: <br>
      LinkedIn: <br>
      tel: <br></p> <p>@qdstudios <br>
      qstudiospadova@gmail.com <br>
      Non lo abbiamo ancora <br>
      +39 333 3218804 <br></p></div>`;
      }
    }
  )}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-wrap lg:flex-nowrap w-full gap-5 mb-10 mt-48"><div class="flex-auto w-full lg:max-w-[20vw]">${validate_component(Contatti, "Contatti").$$render($$result, {}, {}, {})}</div></div>`;
});
const css$1 = {
  code: 'a.svelte-3986xr{font-family:"FFF Acid Grotesk Bold", sans-serif}',
  map: `{"version":3,"file":"NavDesktop.svelte","sources":["NavDesktop.svelte"],"sourcesContent":["<script>\\n\\n  import { page } from \\"$app/stores\\";\\n\\n<\/script>\\n<nav\\n  class=\\"\\n    h-screen\\n    grid grid-cols-4 grid-rows-12 gap-5\\n    whitespace-nowrap\\n    font-bold\\n    \\"\\n>\\n  <div class=\\"row-span-5 col-span-4\\">\\n    <img src=\\"/assets/logo/logo_partial.svg\\" alt=\\"\\" srcset=\\"\\" />\\n  </div>\\n\\n  <div class=\\"col-span-2 content-end text-xl\\">\\n    <a class=\\"text-primary\\" href=\\"/\\">{#if $page.url.pathname==='/'}› {/if}HOME</a>\\n  </div>\\n  <div class=\\"col-span-2 content-end text-xl\\">\\n    <a class=\\"text-primary\\" href=\\"/mission\\">{#if $page.url.pathname==='/mission'}› {/if}MISSION</a>\\n  </div>\\n  <div class=\\"col-span-4\\"></div>\\n\\n  <div\\n    class=\\"\\n        grid grid-cols-subgrid row-span-2 col-span-2 text-xl\\n        \\"\\n  >\\n    <a class=\\"text-primary\\" href=\\"/branding\\"> {#if $page.url.pathname==='/branding'}› {/if}BRANDING</a><br />\\n    <a class=\\"text-primary\\" href=\\"/uiuxdesign\\"> {#if $page.url.pathname==='/uiuxdesign'}› {/if}UI/UX DESIGN</a>\\n  </div>\\n  <div\\n    class=\\"\\n        grid grid-cols-subgrid row-span-2 col-span-2 text-xl\\n        \\"\\n  >\\n    <a class=\\"text-primary\\" href=\\"/grafica\\">{#if $page.url.pathname==='/grafica'}› {/if}GRAFICA</a><br />\\n    <a class=\\"text-primary\\" href=\\"/fotografia\\">{#if $page.url.pathname==='/fotografia'}› {/if}FOTOGRAFIA</a><br />\\n    <a class=\\"text-primary\\" href=\\"/sounddesign\\">{#if $page.url.pathname==='/sounddesign'}› {/if}SOUND DESIGN</a>\\n  </div>\\n\\n  <p class=\\"col-span-4 text-xs font-normal row-span-2 content-end\\">\\n    Q Design Studio by The Hive S.r.l.\\n    <br />\\n    Viale dell'Industria, 19 - 35129 PADOVA - PD\\n    <br />\\n    P.IVA: 05260180285\\n    <br />\\n    Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.\\n  </p>\\n</nav>\\n\\n<style lang=\\"css\\">\\n  a {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuDE,eAAE,CACA,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC"}`
};
const NavDesktop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="h-screen grid grid-cols-4 grid-rows-12 gap-5 whitespace-nowrap font-bold "><div class="row-span-5 col-span-4" data-svelte-h="svelte-cul7xi"><img src="/assets/logo/logo_partial.svg" alt="" srcset=""></div> <div class="col-span-2 content-end text-xl"><a class="text-primary svelte-3986xr" href="/">${$page.url.pathname === "/" ? `› ` : ``}HOME</a></div> <div class="col-span-2 content-end text-xl"><a class="text-primary svelte-3986xr" href="/mission">${$page.url.pathname === "/mission" ? `› ` : ``}MISSION</a></div> <div class="col-span-4"></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl "><a class="text-primary svelte-3986xr" href="/branding">${$page.url.pathname === "/branding" ? `› ` : ``}BRANDING</a><br> <a class="text-primary svelte-3986xr" href="/uiuxdesign">${$page.url.pathname === "/uiuxdesign" ? `› ` : ``}UI/UX DESIGN</a></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl "><a class="text-primary svelte-3986xr" href="/grafica">${$page.url.pathname === "/grafica" ? `› ` : ``}GRAFICA</a><br> <a class="text-primary svelte-3986xr" href="/fotografia">${$page.url.pathname === "/fotografia" ? `› ` : ``}FOTOGRAFIA</a><br> <a class="text-primary svelte-3986xr" href="/sounddesign">${$page.url.pathname === "/sounddesign" ? `› ` : ``}SOUND DESIGN</a></div> <p class="col-span-4 text-xs font-normal row-span-2 content-end" data-svelte-h="svelte-16b0s0o">Q Design Studio by The Hive S.r.l.
    <br>
    Viale dell&#39;Industria, 19 - 35129 PADOVA - PD
    <br>
    P.IVA: 05260180285
    <br>
    Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.</p> </nav>`;
});
const css = {
  code: '.hide.svelte-1kcf9f7{animation:svelte-1kcf9f7-disappear 0.2s forwards ease-in-out}.show.svelte-1kcf9f7{animation:svelte-1kcf9f7-appear 0.2s forwards ease-in-out}@keyframes svelte-1kcf9f7-appear{from{opacity:0}to{opacity:1}}@keyframes svelte-1kcf9f7-disappear{from{opacity:1;display:block}to{opacity:0;display:none}}a.svelte-1kcf9f7{font-family:"FFF Acid Grotesk Bold", sans-serif}hr.svelte-1kcf9f7{border:2px solid;color:#0a0a0a}',
  map: `{"version":3,"file":"NavbarHandler.svelte","sources":["NavbarHandler.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport NavDesktop from \\"./NavDesktop.svelte\\";\\nexport let isMobile = true;\\nexport let isOpen = false;\\n<\/script>\\n\\n<div>\\n  <!--nav desktop section-->\\n  {#if !isMobile}\\n    <NavDesktop />\\n  {/if}\\n\\n  {#if isMobile}\\n    <!--nav mobile section-->\\n\\n    <!--burger menu-->\\n    <div class=\\"{isOpen ? ' hide ' : ' show block '} \\">\\n      <div class=\\"w-full flex justify-end fixed top-0 left-0 p-5 gap-5\\">\\n        <hr class=\\"w-full\\" />\\n        <button\\n          on:click={() => {\\n            isOpen = true;\\n          }}\\n        >\\n          <svg\\n            width=\\"22\\"\\n            height=\\"20\\"\\n            viewBox=\\"0 0 22 20\\"\\n            fill=\\"none\\"\\n            xmlns=\\"http://www.w3.org/2000/svg\\"\\n          >\\n            <path d=\\"M0 2H22M0 10H22M0 18H22\\" stroke=\\"black\\" stroke-width=\\"4\\" />\\n          </svg>\\n        </button>\\n      </div>\\n    </div>\\n\\n    <!--nav mobile-->\\n    <div class={isOpen ? \\" show block \\" : \\" hide \\"}>\\n      <div\\n        class=\\"\\nfixed top-0 left-0 w-auto p-5 h-screen bg-primary\\n\\"\\n      >\\n        <nav\\n          class=\\"\\nmt-10\\ngrid grid-cols-4 grid-rows-12 gap-5\\nwhitespace-nowrap\\n\\"\\n        >\\n          <div class=\\"row-span-5 col-span-4\\">\\n            <img src=\\"/assets/logo/logo_partial_white.svg\\" alt=\\"\\" srcset=\\"\\" />\\n          </div>\\n\\n          <div class=\\"col-span-4 w-full grid grid-cols-4 grid-rows-1 gap-2\\">\\n            <div class=\\"w-full flex gap-5 col-span-4\\">\\n              <hr class=\\"w-full\\" />\\n              <button on:click={() => (isOpen = false)}>\\n                <svg\\n                  width=\\"24\\"\\n                  height=\\"24\\"\\n                  viewBox=\\"0 0 24 24\\"\\n                  fill=\\"none\\"\\n                  xmlns=\\"http://www.w3.org/2000/svg\\"\\n                >\\n                  <path\\n                    d=\\"M2.13153 22.0002L12.0459 12.0859M12.0459 12.0859L22.1315 2.00024M12.0459 12.0859L1.95996 2M12.0459 12.0859L21.96 22\\"\\n                    stroke=\\"#0A0A0A\\"\\n                    stroke-width=\\"4\\"\\n                  />\\n                </svg>\\n              </button>\\n            </div>\\n            <div class=\\"col-span-2 content-end text-xl\\">\\n              <a on:click={() => (isOpen = false)} class=\\"text-neutral\\" href=\\"/\\"\\n                >{#if $page.url.pathname==='/'}› {/if}HOME</a\\n              >\\n            </div>\\n            <div class=\\"col-span-2 content-end text-xl ml-1.5\\">\\n              <a\\n                on:click={() => (isOpen = false)}\\n                class=\\"text-neutral\\"\\n                href=\\"/mission\\">{#if $page.url.pathname==='/mission'}› {/if}MISSION</a\\n              >\\n            </div>\\n          </div>\\n\\n          <div\\n            class=\\"\\n  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10\\n  \\"\\n          >\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/branding\\">{#if $page.url.pathname==='/branding'}› {/if}BRANDING</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral mt-9\\"\\n              href=\\"/uiuxdesign\\">{#if $page.url.pathname==='/uiuxdesign'}› {/if}UI/UX DESIGN</a\\n            >\\n          </div>\\n          <div\\n            class=\\"\\n  grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10\\n  \\"\\n          >\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/grafica\\">{#if $page.url.pathname==='/grafica'}› {/if}GRAFICA</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/fotografia\\">{#if $page.url.pathname==='/fotografia'}› {/if}FOTOGRAFIA</a\\n            ><br />\\n            <a\\n              on:click={() => (isOpen = false)}\\n              class=\\"text-neutral\\"\\n              href=\\"/sounddesign\\">{#if $page.url.pathname==='/sounddesign'}› {/if}SOUND DESIGN</a\\n            >\\n          </div>\\n        </nav>\\n        <div class=\\"absolute bottom-5 left-5\\">\\n          <p class=\\"col-span-4 text-xs font-normal row-span-2 content-end\\">\\n            Q Design Studio by The Hive S.r.l.\\n            <br />\\n            Viale dell'Industria, 19 - 35129 PADOVA - PD\\n            <br />\\n            P.IVA: 05260180285\\n            <br />\\n            Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.\\n          </p>\\n        </div>\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n\\n<style lang=\\"css\\">\\n  .hide {\\n    animation: disappear 0.2s forwards ease-in-out;\\n  }\\n  .show {\\n    animation: appear 0.2s forwards ease-in-out;\\n  }\\n  @keyframes appear {\\n    from {\\n      opacity: 0;\\n    }\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n  @keyframes disappear {\\n    from {\\n      opacity: 1;\\n      display: block;\\n    }\\n    to {\\n      opacity: 0;\\n      display: none;\\n    }\\n  }\\n  a {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n  hr {\\n    border: 2px solid;\\n    color: #0a0a0a;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA+IE,oBAAM,CACJ,SAAS,CAAE,wBAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,WACrC,CACA,oBAAM,CACJ,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,QAAQ,CAAC,WAClC,CACA,WAAW,qBAAO,CAChB,IAAK,CACH,OAAO,CAAE,CACX,CACA,EAAG,CACD,OAAO,CAAE,CACX,CACF,CACA,WAAW,wBAAU,CACnB,IAAK,CACH,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,KACX,CACA,EAAG,CACD,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IACX,CACF,CACA,gBAAE,CACA,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC,CACA,iBAAG,CACD,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,KAAK,CAAE,OACT"}`
};
const NavbarHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isMobile = true } = $$props;
  let { isOpen = false } = $$props;
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0) $$bindings.isMobile(isMobile);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div> ${!isMobile ? `${validate_component(NavDesktop, "NavDesktop").$$render($$result, {}, {}, {})}` : ``} ${isMobile ? `  <div class="${escape(isOpen ? " hide " : " show block ", true) + " svelte-1kcf9f7"}"><div class="w-full flex justify-end fixed top-0 left-0 p-5 gap-5"><hr class="w-full svelte-1kcf9f7"> <button data-svelte-h="svelte-88ujgd"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2H22M0 10H22M0 18H22" stroke="black" stroke-width="4"></path></svg></button></div></div>  <div class="${escape(null_to_empty(isOpen ? " show block " : " hide "), true) + " svelte-1kcf9f7"}"><div class="fixed top-0 left-0 w-auto p-5 h-screen bg-primary "><nav class="mt-10 grid grid-cols-4 grid-rows-12 gap-5 whitespace-nowrap "><div class="row-span-5 col-span-4" data-svelte-h="svelte-1od592g"><img src="/assets/logo/logo_partial_white.svg" alt="" srcset=""></div> <div class="col-span-4 w-full grid grid-cols-4 grid-rows-1 gap-2"><div class="w-full flex gap-5 col-span-4"><hr class="w-full svelte-1kcf9f7"> <button data-svelte-h="svelte-8z67k6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.13153 22.0002L12.0459 12.0859M12.0459 12.0859L22.1315 2.00024M12.0459 12.0859L1.95996 2M12.0459 12.0859L21.96 22" stroke="#0A0A0A" stroke-width="4"></path></svg></button></div> <div class="col-span-2 content-end text-xl"><a class="text-neutral svelte-1kcf9f7" href="/">${$page.url.pathname === "/" ? `› ` : ``}HOME</a></div> <div class="col-span-2 content-end text-xl ml-1.5"><a class="text-neutral svelte-1kcf9f7" href="/mission">${$page.url.pathname === "/mission" ? `› ` : ``}MISSION</a></div></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10 "><a class="text-neutral svelte-1kcf9f7" href="/branding">${$page.url.pathname === "/branding" ? `› ` : ``}BRANDING</a><br> <a class="text-neutral mt-9 svelte-1kcf9f7" href="/uiuxdesign">${$page.url.pathname === "/uiuxdesign" ? `› ` : ``}UI/UX DESIGN</a></div> <div class="grid grid-cols-subgrid row-span-2 col-span-2 text-xl mt-10 "><a class="text-neutral svelte-1kcf9f7" href="/grafica">${$page.url.pathname === "/grafica" ? `› ` : ``}GRAFICA</a><br> <a class="text-neutral svelte-1kcf9f7" href="/fotografia">${$page.url.pathname === "/fotografia" ? `› ` : ``}FOTOGRAFIA</a><br> <a class="text-neutral svelte-1kcf9f7" href="/sounddesign">${$page.url.pathname === "/sounddesign" ? `› ` : ``}SOUND DESIGN</a></div></nav> <div class="absolute bottom-5 left-5" data-svelte-h="svelte-27msex"><p class="col-span-4 text-xs font-normal row-span-2 content-end">Q Design Studio by The Hive S.r.l.
            <br>
            Viale dell&#39;Industria, 19 - 35129 PADOVA - PD
            <br>
            P.IVA: 05260180285
            <br>
            Tutti i servizi Q Design Studio sono forniti da The Hive S.r.l.</p></div></div></div>` : ``} </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-n2zcnk_START --><link rel="icon" type="image/svg"${add_attribute("href", "/assets/logo/logo.svg", 0)}>${$$result.title = `<title>Q Design Studios</title>`, ""}<!-- HEAD_svelte-n2zcnk_END -->`, ""} <div class="h-screen flex m-10 "> <div class="flex-none fixed w-full lg:hidden z-50">${validate_component(NavbarHandler, "Navbar").$$render($$result, {}, {}, {})}</div>  <div class="fixed flex-none max-w-[25vw] top-10 hidden lg:block z-50">${validate_component(NavbarHandler, "Navbar").$$render($$result, { isMobile: false }, {}, {})}</div> <div class="flex flex-row flex-wrap lg:ml-[25vw] gap-2 lg:gap-5 relative z-0 w-full"><div class="flex-auto min-w-[30vw] w-full lg:ml-5 static">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div> <div class="absolute bottom-10 lg:right-10 lg:w-[25vw] w-full"><div class="hidden lg:block sticky h-fit w-full">${validate_component(Contatti, "Contatti").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
