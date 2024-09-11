import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: 'h6.svelte-11lgscc{font-family:"FFF Acid Grotesk Bold", sans-serif}hr.svelte-11lgscc{border:1.33px solid #0a0a0a}',
  map: '{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animateTyping } from \\"./Typewriter\\";\\nexport let title;\\n<\/script>\\n\\n<div class=\\"w-full\\">\\n  <h6 class=\\"font-bold text-l\\">\\n    <span use:animateTyping={title} />\\n  </h6>\\n  <hr class=\\"mt-2 mb-5 \\" />\\n  <slot />\\n</div>\\n\\n<style>\\n  h6 {\\n    font-family: \\"FFF Acid Grotesk Bold\\", sans-serif;\\n  }\\n  hr {\\n    border: 1.33px solid #0a0a0a; /*rgb(229 231 235)*/\\n  }\\n</style>\\n"],"names":[],"mappings":"AAaE,iBAAG,CACD,WAAW,CAAE,uBAAuB,CAAC,CAAC,UACxC,CACA,iBAAG,CACD,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,OACvB"}'
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="w-full"><h6 class="font-bold text-l svelte-11lgscc"><span></span></h6> <hr class="mt-2 mb-5  svelte-11lgscc"> ${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Section as S
};
