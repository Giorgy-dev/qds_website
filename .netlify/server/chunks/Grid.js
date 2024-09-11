import { c as create_ssr_component, h as each, f as add_attribute, e as escape } from "./ssr.js";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  return `<div class="grid gap-5 lg:gap-2.5 w-full grid-cols-1 lg:grid-cols-3">${each(items, (item) => {
    return `<div class="w-full h-full border-grey-200 border-2 p-5 rounded-lg text-filled transition-all duration-300 hover:text-neutral bg-branding hover:bg-primary ">${item.icon ? `<div class="flex mb-5 w-full lg:w-1/2"><img${add_attribute("src", item.icon, 0)} alt="" srcset=""> </div>` : `${item.char ? `<h1 class="text-inherit text-[10rem] -translate-y-[22%]">${escape(item.char)} </h1>` : ``}`} <h1 class="text-[2rem] text-inherit">${escape(item.title)}</h1> <p class="text-m lg:text-l text-inherit">${escape(item.description)}</p> </div>`;
  })}</div>`;
});
export {
  Grid as G
};
