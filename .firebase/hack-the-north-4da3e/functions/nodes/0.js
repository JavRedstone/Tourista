

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1227e961.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = ["_app/immutable/assets/0.f125b5aa.css"];
export const fonts = [];
