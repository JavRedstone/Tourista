import { c as create_ssr_component, v as validate_store, a as subscribe, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as places } from "../../../chunks/places.js";
const FEATURE_FLAG_NAMES = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
({
  [FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT]: false
});
const dragIndicator = "/_app/immutable/assets/drag.0996dc74.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap");main.s-AWa54G7Oxlzf.s-AWa54G7Oxlzf{position:relative;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;height:calc(100vh - 4rem);margin-top:4rem}main.s-AWa54G7Oxlzf div.s-AWa54G7Oxlzf{height:calc(100vh - 4rem);display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto}main.s-AWa54G7Oxlzf div div.s-AWa54G7Oxlzf{padding:0 3rem;margin:0;display:flex;gap:2rem;height:fit-content;align-items:center}main.s-AWa54G7Oxlzf div div select.s-AWa54G7Oxlzf{outline:none;display:inline-block;height:fit-content;font-size:1.3rem;padding:0.8rem 1rem;border:none;border-radius:1rem;background-color:rgba(255, 255, 255, 0.5);color:#000;transition:0.2s ease-in-out}main.s-AWa54G7Oxlzf div div select.s-AWa54G7Oxlzf:hover{cursor:pointer;background-color:rgba(255, 255, 255, 0.7);color:#000;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)}main.s-AWa54G7Oxlzf div h2.noLocations.s-AWa54G7Oxlzf{text-align:center;font-size:2rem;font-weight:400;color:#000;margin:auto 4rem;padding:0}main.s-AWa54G7Oxlzf div section.s-AWa54G7Oxlzf{height:100%;display:flex;flex-direction:column;overflow-y:auto;outline:none !important;margin-top:0;gap:1rem;padding:0}main.s-AWa54G7Oxlzf div section div.s-AWa54G7Oxlzf{margin:0 3rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-size:1.5rem;padding:1rem;border-radius:1rem;background-color:rgba(255, 255, 255, 0.5);box-shadow:0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2)}main.s-AWa54G7Oxlzf div section div span.dragContent.s-AWa54G7Oxlzf{display:flex;align-items:center;gap:1rem}main.s-AWa54G7Oxlzf div section div span.dragContent img.s-AWa54G7Oxlzf{width:2rem;height:2rem}main.s-AWa54G7Oxlzf div section div button.remove.s-AWa54G7Oxlzf{font-size:1.3rem;border:none;border-radius:1rem;padding:0.5rem 1rem;background-color:#8bbbff;color:#fff;transition:0.2s ease-in-out}main.s-AWa54G7Oxlzf div section div button.remove.s-AWa54G7Oxlzf:hover{cursor:pointer;background-color:rgba(255, 255, 255, 0.7);color:#000;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)}main.s-AWa54G7Oxlzf div div.add.s-AWa54G7Oxlzf{display:flex;width:100%;background-color:rgba(255, 255, 255, 0.5);box-shadow:0 -0.05rem 0.2rem rgba(0, 0, 0, 0.2);margin:0;padding:0.5rem 3rem}main.s-AWa54G7Oxlzf div div.add form input.s-AWa54G7Oxlzf{outline:none;display:inline-block;height:fit-content;font-size:1.3rem;padding:0.5rem 1rem;border:none;border-radius:1rem;background-color:rgba(255, 255, 255, 0.5);color:#000;margin-right:0.5rem;transition:0.2s ease-in-out}main.s-AWa54G7Oxlzf div div.add form input.s-AWa54G7Oxlzf:hover{cursor:pointer;background-color:rgba(255, 255, 255, 0.7);color:#000;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)}main.s-AWa54G7Oxlzf div div.add form button.s-AWa54G7Oxlzf{font-size:1.3rem;border:none;border-radius:1rem;padding:0.5rem 1rem;background-color:#8bbbff;color:#fff;transition:0.2s ease-in-out}main.s-AWa54G7Oxlzf div div.add form button.s-AWa54G7Oxlzf:hover{cursor:pointer;background-color:rgba(255, 255, 255, 0.7);color:#000;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)}main.s-AWa54G7Oxlzf div#map.s-AWa54G7Oxlzf{position:relative;height:100%;width:100%;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let $locations, $$unsubscribe_locations;
  const locations = places();
  validate_store(locations, "locations");
  $$unsubscribe_locations = subscribe(locations, (value) => $locations = value);
  let newLocation = "";
  $$result.css.add(css);
  items = $locations.map((location, index) => {
    return { id: index, text: location };
  });
  $$unsubscribe_locations();
  return `${$$result.head += `<!-- HEAD_svelte-10adu1d_START -->${$$result.title = `<title>Travel</title>`, ""}<!-- HEAD_svelte-10adu1d_END -->`, ""} <main class="s-AWa54G7Oxlzf"><div class="s-AWa54G7Oxlzf"><div class="s-AWa54G7Oxlzf"><h1 data-svelte-h="svelte-2yuyhk">Your Travel Plan:</h1> <select class="s-AWa54G7Oxlzf"><option value="driving" data-svelte-h="svelte-148l894">Driving</option><option value="walking" data-svelte-h="svelte-1h2dtgs">Walking</option><option value="bicycling" data-svelte-h="svelte-zm2wvi">Bicycling</option><option value="transit" data-svelte-h="svelte-1wwvumo">Transit</option></select></div> ${$locations.length === 0 ? `<h2 class="noLocations s-AWa54G7Oxlzf" data-svelte-h="svelte-rcinfj">Add a destination in &quot;Explore&quot; to get started!</h2>` : ``} <section class="s-AWa54G7Oxlzf">${each(items, (item) => {
    return `<div class="s-AWa54G7Oxlzf"><span class="dragContent s-AWa54G7Oxlzf"><img${add_attribute("src", dragIndicator, 0)} alt="drag" class="s-AWa54G7Oxlzf"> ${escape(item.text)}</span> <button class="remove s-AWa54G7Oxlzf" data-svelte-h="svelte-4glfyh">Remove</button> </div>`;
  })}</section> <div class="add s-AWa54G7Oxlzf"><h2 data-svelte-h="svelte-1r89qho">Add a Destination:</h2> <form><input type="text" placeholder="Add a destination here" class="s-AWa54G7Oxlzf"${add_attribute("value", newLocation, 0)}> <button type="submit" class="s-AWa54G7Oxlzf" data-svelte-h="svelte-j1u4ea">Add</button></form></div></div> <div id="map" class="s-AWa54G7Oxlzf"></div>  </main>`;
});
export {
  Page as default
};
