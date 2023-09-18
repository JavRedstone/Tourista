

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/travel/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.29391590.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/places.4a093ab1.js","_app/immutable/chunks/index.12519dbe.js","_app/immutable/chunks/stores.c8ee4a2f.js","_app/immutable/chunks/singletons.d47f0691.js"];
export const stylesheets = ["_app/immutable/assets/5.4539a684.css"];
export const fonts = [];
