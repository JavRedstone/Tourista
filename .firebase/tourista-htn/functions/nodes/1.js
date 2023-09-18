

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d0f5f9c3.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js","_app/immutable/chunks/stores.0e5e551b.js","_app/immutable/chunks/singletons.2cf4b3a3.js","_app/immutable/chunks/index.12519dbe.js"];
export const stylesheets = [];
export const fonts = [];
