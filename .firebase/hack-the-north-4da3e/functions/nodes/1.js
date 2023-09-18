

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d1256a6c.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js","_app/immutable/chunks/stores.c8ee4a2f.js","_app/immutable/chunks/singletons.d47f0691.js","_app/immutable/chunks/index.12519dbe.js"];
export const stylesheets = [];
export const fonts = [];
