import { c as create_ssr_component, f as add_styles, h as validate_component } from "../../chunks/ssr.js";
const global = "";
const Background_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap");div.s-38cypEf_HcdR{z-index:-1;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff}',
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y = 0, r = 96, g = 199, b = 239;
  $$result.css.add(css$1);
  return ` <div class="s-38cypEf_HcdR"${add_styles({
    "background": `linear-gradient(${135 + y / 30}deg,rgba(${r}, ${g}, ${b}, 0.8) 0%,rgb(238, 237, 237) 85%)`
  })}></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap");nav.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:fixed;z-index:10;width:100%;top:0;left:0;display:flex;justify-content:space-between;height:4rem;background-color:rgba(238, 237, 237, 0.4);backdrop-filter:blur(1em);box-shadow:0 0.1em 0.2em rgba(0, 0, 0, 0.2);transition:box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out}nav.s-7IPF32Wcq3s8 a.s-7IPF32Wcq3s8{margin-left:1rem}nav.s-7IPF32Wcq3s8 a img.s-7IPF32Wcq3s8{height:100%}nav.s-7IPF32Wcq3s8 div.s-7IPF32Wcq3s8{display:flex;align-items:center;gap:2em;margin-right:2em}nav.s-7IPF32Wcq3s8 div a.s-7IPF32Wcq3s8{position:relative;text-decoration:none;color:#000;font-size:1.3rem}nav.s-7IPF32Wcq3s8 div a.s-7IPF32Wcq3s8::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:0.1em;border-radius:0.1em;background-color:#000;transform:scaleX(0);transition:transform 0.2s ease-in-out}nav.s-7IPF32Wcq3s8 div a.s-7IPF32Wcq3s8:hover::after{transform:scaleX(1)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="s-7IPF32Wcq3s8"><a class="logo s-7IPF32Wcq3s8" href="/"><img src="/logo.png" alt="logo" class="s-7IPF32Wcq3s8"></a> <div class="s-7IPF32Wcq3s8"><a href="/" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-5a0zws">Home</a> <a href="/explore" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-1xdq62d">Explore</a> <a href="/travel" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-1vmw8tv">Travel</a> <a href="/details" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-e4di7d">Travel Details</a></div></nav> ${validate_component(Background, "Background").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
