

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/grafica/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BJrc5YBv.js","_app/immutable/chunks/scheduler.Bu15-wVR.js","_app/immutable/chunks/index.O99BFJ2P.js"];
export const stylesheets = [];
export const fonts = [];
