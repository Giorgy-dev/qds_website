import { c as create_ssr_component, f as add_attribute, e as escape, h as each, v as validate_component } from "../../chunks/ssr.js";
import { S as Scroll, H as Hero } from "../../chunks/Scroll.js";
import { S as Section } from "../../chunks/Section.js";
import { G as Grid } from "../../chunks/Grid.js";
const VideoBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { videoSrc } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.videoSrc === void 0 && $$bindings.videoSrc && videoSrc !== void 0) $$bindings.videoSrc(videoSrc);
  return `<div class="relative flex items-center justify-center overflow-hidden border-grey-200 border-2 hover:border-4 rounded-lg text-filled lg:text-primary transition-all duration-100 hover:text-filled bg-primary lg:bg-neutral min-h-[40vh] h-full hover:border-primary aspect-auto sm:aspect-square lg:aspect-auto"><video${add_attribute("src", videoSrc, 0)} ${"autoplay"} loop muted class="absolute z-10 lg:opacity-0 lg:hover:opacity-100 transition-all duration-400 h-full lg:w-full overflow-hidden object-cover block"></video>  <div class="w-full h-full z-30 text-inherit pointer-events-none p-5 grid content-end"><h1 class="text-4xl text-inherit">${escape(title)}</h1></div></div>`;
});
const Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgsrc } = $$props;
  let { name } = $$props;
  let { paragraph } = $$props;
  let { label } = $$props;
  let { skills } = $$props;
  if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0) $$bindings.imgsrc(imgsrc);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0) $$bindings.paragraph(paragraph);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0) $$bindings.skills(skills);
  return `<div class="rounded-lg border-2 overflow-hidden min-w-[300px]"><img${add_attribute("src", imgsrc, 0)} alt="" class="w-full h-[35vh] lg:h-[50vh] object-cover object-top"> <div class="grid p-5 gap-2.5"><div class="flex gap-0"><h2 class="text-2xl font-bold">${escape(name)}</h2> <div class="flex flex-wrap gap-2">${typeof label === "string" ? `<span class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold">${escape(label)}</span>` : `${each(label, (label2) => {
    return `<span class="bg-primary px-2 py-2 rounded-lg uppercase text-xs scale-75 text-neutral font-bold">${escape(label2)}</span>`;
  })}`}</div></div> <p class="text-m">${escape(paragraph)}</p> <div class="flex flex-wrap gap-2 pt-2.5">${each(skills, (skill) => {
    return `<span class="bg-gray-200 px-2 py-1 rounded-lg">${escape(skill)}</span>`;
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let processo = [
    {
      char: ".1",
      title: "Contatto",
      description: `
          La nostra consulenza inizia sempre con la profonda conoscenza del cliente
          `
    },
    {
      char: ".2",
      title: "Traduzione",
      description: `
          Le bozze si concretizzano in prime realizzazioni e valutazioni di quanto svolto
          `
    },
    {
      char: ".3",
      title: "Stretta di mano",
      description: `
          Formiamo il prodotto finito da poter integrare nella comunicazione aziendale
          `
    }
  ];
  return `<div class="absolute bottom-16 w-[25vw]">${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})}</div> <div class="mt-5 lg:mt-0 w-full">${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: ["Design Studios", "↙Our Works", "Contact Us↘", "Never Lorem"],
      titleMobile: ["Design Studios", "Our Works↗", "Contact Us↓", "Never Lorem"],
      content: [
        "Q Design Studios è una realtà dedicata alla creazione,",
        "di cosa? tutto."
      ],
      contentMobile: ["Q Design Studios è una realtà dedicata alla creazione, di cosa? tutto."]
    },
    {},
    {}
  )} <div class="h-svh"></div> <div class="mb-10 relative w-full">${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: ["↓ SERVIZI", "↘ SERVIZI", "• SERVIZI", "SERVIZI"]
    },
    {},
    {
      default: () => {
        return `<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-2.5"><div class="lg:col-span-2"><a href="/branding">${validate_component(VideoBtn, "VideoBtn").$$render(
          $$result,
          {
            title: "Branding",
            videoSrc: "/assets/video/branding.mp4"
          },
          {},
          {}
        )}</a></div> <a href="/grafica">${validate_component(VideoBtn, "VideoBtn").$$render(
          $$result,
          {
            title: "Grafica",
            videoSrc: "/assets/video/grafica.mp4"
          },
          {},
          {}
        )}</a> <a href="/uiuxdesign">${validate_component(VideoBtn, "VideoBtn").$$render(
          $$result,
          {
            title: "UI/UX Design",
            videoSrc: "/assets/video/grafica.mp4"
          },
          {},
          {}
        )}</a> <a href="/sounddesign">${validate_component(VideoBtn, "VideoBtn").$$render(
          $$result,
          {
            title: "Sound Design",
            videoSrc: "/assets/video/sounddesign2.mp4"
          },
          {},
          {}
        )}</a> <a href="/fotografia">${validate_component(VideoBtn, "VideoBtn").$$render(
          $$result,
          {
            title: "Fotografia",
            videoSrc: "/assets/video/grafica.mp4"
          },
          {},
          {}
        )}</a></div>`;
      }
    }
  )} <div class="my-20"></div> ${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: ["↓ CHI SIAMO", "↘ CHI SIAMO", "• CHI SIAMO", "CHI SIAMO"]
    },
    {},
    {
      default: () => {
        return `<div class="w-full flex flex-nowrap overflow-x-auto gap-5 lg:gap-10 lg:px-5 lg:pt-5">${validate_component(Person, "Person").$$render(
          $$result,
          {
            imgsrc: "assets/img/stock_portrait.webp",
            name: "Alessandro",
            paragraph: `Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarità mi ha portato alla fondazione di Virgo.`,
            label: "Co-founder",
            skills: ["Management", "Customer Care"]
          },
          {},
          {}
        )} ${validate_component(Person, "Person").$$render(
          $$result,
          {
            imgsrc: "assets/img/stock_portrait.webp",
            name: "Alessandro",
            paragraph: `Sono Alessandro, 20 anni, da sempre ho una passione ben radicata per il Web Design e la cura del cliente. L'unione di queste due peculiarità mi ha portato alla fondazione di Virgo.`,
            label: "Co-founder",
            skills: ["Management", "Customer Care"]
          },
          {},
          {}
        )}</div>`;
      }
    }
  )} <div class="my-20"></div> ${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: ["↓ PROCESSO", "↘ PROCESSO", "• PROCESSO", "PROCESSO"]
    },
    {},
    {
      default: () => {
        return `<div><p class="mb-5" data-svelte-h="svelte-1vm242d">Il processo è parte fondamentale per un team creativo di qualsiasi
          genere, così come per il cliente</p> <div class="w-full">${validate_component(Grid, "Grid").$$render($$result, { items: processo }, {}, {})}</div></div>`;
      }
    }
  )}</div></div>`;
});
export {
  Page as default
};
