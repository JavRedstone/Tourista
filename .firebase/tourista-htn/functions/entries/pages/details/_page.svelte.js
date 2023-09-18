import { c as create_ssr_component, v as validate_store, a as subscribe, f as add_styles, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as places } from "../../../chunks/places.js";
const doubleDown = "/_app/immutable/assets/doubleDown.bbeef372.svg";
const forward = "/_app/immutable/assets/forward.717c65e2.svg";
const back = "/_app/immutable/assets/back.bf55d4c9.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap");:root::-webkit-scrollbar{display:none}main.s-znEV2K6A1tiJ.s-znEV2K6A1tiJ{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh}main.s-znEV2K6A1tiJ div.card.s-znEV2K6A1tiJ{display:grid;align-items:center;gap:2rem;grid-template-columns:5rem 1fr 5rem;grid-template-rows:1fr;position:fixed;text-align:center;width:max(60%, 30rem);margin:0rem;padding:1rem 2rem;border-radius:2rem;background-color:rgba(238, 237, 237, 0.6);box-shadow:0.1em 0.1em 0.2em rgba(0, 0, 0, 0.2)}main.s-znEV2K6A1tiJ div.card div h2.s-znEV2K6A1tiJ{font-size:2rem;margin:0 0 1rem 0}main.s-znEV2K6A1tiJ div.card div span.s-znEV2K6A1tiJ{font-size:1.3rem}main.s-znEV2K6A1tiJ div.card div p.s-znEV2K6A1tiJ{margin:0}section.s-znEV2K6A1tiJ.s-znEV2K6A1tiJ{position:fixed;bottom:0;left:0;width:100vw;height:5rem;display:flex;align-items:center;justify-content:center;font-size:1.5rem}',
  map: null
};
const scrollValue = 500;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSlide;
  let $locations, $$unsubscribe_locations;
  const locations = places();
  validate_store(locations, "locations");
  $$unsubscribe_locations = subscribe(locations, (value) => $locations = value);
  let y = 0;
  let times = [];
  let descriptions = [];
  let pageHeight = ($locations.length - 1) * scrollValue;
  $$result.css.add(css);
  currentSlide = Math.floor(y / scrollValue);
  $$unsubscribe_locations();
  return ` ${$$result.head += `<!-- HEAD_svelte-1qbe9po_START -->${$$result.title = `<title>Travel Plan Details</title>`, ""}<!-- HEAD_svelte-1qbe9po_END -->`, ""} <main class="s-znEV2K6A1tiJ"${add_styles({
    "margin-bottom": pageHeight + scrollValue - 1 + "px"
  })}>${$locations[currentSlide] ? `<div class="card s-znEV2K6A1tiJ"><div>${times[currentSlide - 1] && currentSlide !== 0 ? `<img${add_attribute("src", back, 0)} alt="back"> <p class="s-znEV2K6A1tiJ">${escape(times[currentSlide - 1])}</p>` : ``}</div> <div><h2 class="s-znEV2K6A1tiJ">${escape(currentSlide + 1)}. ${escape($locations[currentSlide])}</h2> ${descriptions[currentSlide] && descriptions[currentSlide] !== "" ? `<span class="s-znEV2K6A1tiJ">${escape(descriptions[currentSlide])}</span>` : `<span class="s-znEV2K6A1tiJ" data-svelte-h="svelte-16tjo94">There is not enough information about this location. Be the first to find out!</span>`}</div> <div>${times[currentSlide] && currentSlide !== $locations.length - 1 ? `<img${add_attribute("src", forward, 0)} alt="forward"> <p class="s-znEV2K6A1tiJ">${escape(times[currentSlide])}</p>` : ``}</div></div>` : ``}</main> <section class="s-znEV2K6A1tiJ"><span data-svelte-h="svelte-e1m2pc">Scroll Down to View More</span> <img${add_attribute("src", doubleDown, 0)} alt="arrow"> </section>`;
});
export {
  Page as default
};
