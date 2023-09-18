import * as server from '../entries/pages/details/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/details/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/details/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.54276dfd.js","_app/immutable/chunks/scheduler.446313d3.js","_app/immutable/chunks/index.c6fa1565.js","_app/immutable/chunks/places.4a093ab1.js","_app/immutable/chunks/index.12519dbe.js","_app/immutable/chunks/index.e9ee3ec2.js","_app/immutable/chunks/stores.c8ee4a2f.js","_app/immutable/chunks/singletons.d47f0691.js"];
export const stylesheets = ["_app/immutable/assets/3.30b7d471.css"];
export const fonts = [];
