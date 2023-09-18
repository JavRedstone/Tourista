import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const places = () => {
  const { subscribe, set, update } = writable<string[]>([]);
  browser && localStorage.storable && set(JSON.parse(localStorage.storable));
  return {
    add: (place: string) => {
      update((places: string[]) => {
        const filtered = places.filter((p: string) => p !== place);
        browser && (localStorage.storable = JSON.stringify([...filtered, place]));
        return [...filtered, place];
      })
    },
    remove: (place: string) => {
      update((places: string[]) => {
        browser && (localStorage.storable = JSON.stringify(places.filter((p: string) => p !== place)));
        return places.filter((p: string) => p !== place);
      })
    },
    subscribe,
    set
  } 
}