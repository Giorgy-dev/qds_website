import { c as create_ssr_component, h as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { S as Scroll, H as Hero } from "../../../chunks/Scroll.js";
import { S as Section } from "../../../chunks/Section.js";
const css = {
  code: ".marquee.svelte-1p8hkqn{white-space:nowrap;animation:svelte-1p8hkqn-marquee 5s linear infinite}.reverse-marquee.svelte-1p8hkqn{white-space:nowrap;animation:svelte-1p8hkqn-marquee 5s linear reverse infinite}@keyframes svelte-1p8hkqn-marquee{0%{transform:translate3d(0, 0, 0)}100%{transform:translate3d(-100%, 0, 0)}}",
  map: '{"version":3,"file":"VideoSection.svelte","sources":["VideoSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let banner;\\nexport let bottomBanner = void 0;\\nexport let videoSrc;\\n<\/script>\\n\\n<div\\n  class=\\"flex flex-col w-full\\n      lg:max-h-[92svh] aspect-square mb-10 overflow-hidden\\n      border-grey-200 border-2 rounded-lg\\"\\n>\\n  <div class=\\"flex text-[4rem]\\">\\n    {#each { length: 10 } as _}\\n      <h1 class=\\"reverse-marquee pr-5 -mb-40\\">{banner}</h1>\\n    {/each}\\n  </div>\\n\\n  <video\\n    src={videoSrc}\\n    autoplay={true}\\n    loop\\n    muted\\n    class=\\"w-full h-full object-cover\\"\\n  />\\n\\n  <div class=\\"flex text-[4rem] -mt-[6rem]\\">\\n    {#each { length: 10 } as _}\\n      <h1 class=\\"marquee pr-5\\">{bottomBanner ?? banner}</h1>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  .marquee {\\n    white-space: nowrap;\\n    animation: marquee 5s linear infinite;\\n  }\\n\\n  .reverse-marquee {\\n    white-space: nowrap;\\n    animation: marquee 5s linear reverse infinite;\\n  }\\n\\n  @keyframes marquee {\\n    0% {\\n      transform: translate3d(0, 0, 0);\\n    }\\n    100% {\\n      transform: translate3d(-100%, 0, 0);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgCE,uBAAS,CACP,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,sBAAO,CAAC,EAAE,CAAC,MAAM,CAAC,QAC/B,CAEA,+BAAiB,CACf,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,sBAAO,CAAC,EAAE,CAAC,MAAM,CAAC,OAAO,CAAC,QACvC,CAEA,WAAW,sBAAQ,CACjB,EAAG,CACD,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAChC,CACA,IAAK,CACH,SAAS,CAAE,YAAY,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpC,CACF"}'
};
const VideoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banner } = $$props;
  let { bottomBanner = void 0 } = $$props;
  let { videoSrc } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0) $$bindings.banner(banner);
  if ($$props.bottomBanner === void 0 && $$bindings.bottomBanner && bottomBanner !== void 0) $$bindings.bottomBanner(bottomBanner);
  if ($$props.videoSrc === void 0 && $$bindings.videoSrc && videoSrc !== void 0) $$bindings.videoSrc(videoSrc);
  $$result.css.add(css);
  return `<div class="flex flex-col w-full lg:max-h-[92svh] aspect-square mb-10 overflow-hidden border-grey-200 border-2 rounded-lg"><div class="flex text-[4rem]">${each({ length: 10 }, (_) => {
    return `<h1 class="reverse-marquee pr-5 -mb-40 svelte-1p8hkqn">${escape(banner)}</h1>`;
  })}</div> <video${add_attribute("src", videoSrc, 0)} ${"autoplay"} loop muted class="w-full h-full object-cover"></video> <div class="flex text-[4rem] -mt-[6rem]">${each({ length: 10 }, (_) => {
    return `<h1 class="marquee pr-5 svelte-1p8hkqn">${escape(bottomBanner ?? banner)}</h1>`;
  })}</div> </div>`;
});
const HiddenText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { texts } = $$props;
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0) $$bindings.texts(texts);
  return `<div class="flex flex-col gap-4 mt-5">${each(texts, (ht) => {
    return `<details class="flex flex-col"><summary class="cursor-pointer">${escape(ht.title)}</summary> <div class="vertical-line">${each(ht.content, (content) => {
      return `<p class="my-2 pl-5 lg:pl-10">${escape(content)}</p>`;
    })}</div> </details>`;
  })}</div>`;
});
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0) $$bindings.quote(quote);
  return `<div class="flex flex-col w-full min-h-[92svh] mb-[10rem] mt-20"><h1 class="text-[15rem] lg:text-[30rem] leading-[0rem] translate-y-[3.2rem] lg:translate-y-[4.6rem] flex-none" data-svelte-h="svelte-9mr80d">«</h1> <div class="flex-grow grid place-content-center pt-10"><blockquote class="text-xl">${escape(quote.quote)}</blockquote> ${quote.author ? `<p class="text-right mt-10 w-full pr-0 lg:pr-20">${escape(quote.author)}</p>` : ``}</div> <h1 class="text-[15rem] lg:text-[30rem] leading-[0rem] text-right -translate-y-[5rem] lg:-translate-y-[7.4rem] flex-none" data-svelte-h="svelte-18eeen0">»</h1></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let branding_process = [
    {
      char: ".1",
      title: "Ambiente",
      description: `
          Ci conosciamo e valutiamo lo scenario competitivo e l'ambiente in cui si muove il brand
          `
    },
    {
      char: ".2",
      title: "Identità",
      description: `
          Definiamo i valori, visione, obiettivi e posizionamento del brand: tutto è specchio del cliente 
          `
    },
    {
      char: ".3",
      title: "«Boom»",
      description: `
          Tutto viene tradotto visivamente e strutturato in un libro dedicato volto a guidare chiunque lavori con il brand
          `
    }
  ];
  let HiddenTextData = [
    {
      title: "Il branding riguarda solo grandi aziende?",
      content: [
        `Spesso si pensa al branding come un’attività svolta solo da grandi aziende con ingenti budget, ti farà piacere sapere che non è strettamente necessario.
        Il mercato italiano è composto maggiormente da piccole e micro imprese spesso sconosciute. Il loro approccio è prettamente commerciale con focalizzazione
        sul prodotto o servizio ma è inevitabile che miglioramenti di qualità o introduzione di innovazioni vengano adottati anche dalla concorrenza. Il risultato
        è che la clientela segue il prodotto a loro più conveniente, e già domani potrebbe non essere più il tuo. Fornire loro un legame visivo (e non solo) con
        un brand li porterà a sceglierti nuovamente qualora il tuo prodotto gli sia piaciuto in passato.
`
      ]
    }
  ];
  let quote = {
    quote: "In questa società in continua evoluzione, i marchi più potenti e duraturi sono costruiti col cuore. Sono reali e sostenibili. Le loro basi sono solide perché sono costruite con la forza dello spirito umano e non su una campagna pubblicitaria. Le società più durature sono quelle autentiche",
    author: "Howard Schultz"
  };
  return `<div class="absolute bottom-16 w-[25vw]">${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div> <div class="mt-5 lg:mt-0">${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: ["«Brand Boom»", "Contact Us↘", "↙Other Works", "Never Lorem"],
      titleMobile: ["«Brand Boom»", "Contact Us↘", "↙Other Works", "Never Lorem"],
      content: [
        `Branding è conoscere ciò che rende unico e differente un'azienda, un`,
        `prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.`,
        `È un processo articolato e continuo: il brand è l'espressione visiva,`,
        `verbale e sensoriale che tocca il tuo pubblico.`
      ],
      contentMobile: [
        `Branding è conoscere ciò che rende unico e differente un'azienda, un
    prodotto, un servizio o una persona e renderlo evidente agli occhi di tutti.
    È un processo articolato e continuo: il brand è l'espressione visiva,
    verbale e sensoriale che tocca il tuo pubblico..`
      ]
    },
    {},
    {}
  )} <div class="h-svh"></div> <div class="mb-10 relative w-full">${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      banner: "→BRANDING",
      bottomBanner: "BRANDING←",
      videoSrc: "/assets/video/branding_stock.mp4"
    },
    {},
    {}
  )} ${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      banner: "ALTRO VIDEO",
      videoSrc: "/assets/video/branding_stock.mp4"
    },
    {},
    {}
  )} <div class="my-20">${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: ["↓ PERCORSO", "↘ PERCORSO", "• PERCORSO", "PERCORSO"]
    },
    {},
    {
      default: () => {
        return `<div><p class="mb-5" data-svelte-h="svelte-1um8fwu">Vuoi capire come funziona? Questo è il percorso di branding che
            intraprenderemo.</p> <div class="w-full">${validate_component(Grid, "Grid").$$render($$result, { items: branding_process }, {}, {})}</div></div>`;
      }
    }
  )}</div> ${validate_component(Quote, "Quote").$$render($$result, { quote }, {}, {})} <div class="my-20 p-5 border-2 border-grey-200 w-full rounded-lg"><h6 class="text-xl" data-svelte-h="svelte-je895n">Se vuoi leggere altro</h6> <div class="lg:max-w-[80%] max-w-[90%]">${validate_component(HiddenText, "HiddenText").$$render($$result, { texts: HiddenTextData }, {}, {})}</div></div></div></div>`;
});
export {
  Page as default
};
