import { w as writable } from "./index2.js";
const places = () => {
  const { subscribe, set, update } = writable([]);
  return {
    add: (place) => {
      update((places2) => {
        const filtered = places2.filter((p) => p !== place);
        return [...filtered, place];
      });
    },
    remove: (place) => {
      update((places2) => {
        return places2.filter((p) => p !== place);
      });
    },
    subscribe,
    set
  };
};
export {
  places as p
};
