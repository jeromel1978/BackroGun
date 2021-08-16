import { readable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
import { gun } from "../scripts/gun.js";

function customStore(ref) {
  // We still use readable() and not writable(), since our store only reads values from gun
  const { subscribe } = readable(null, function start(set) {
    ref.on((data) => set(data));
    return function stop() {
      ref.off();
    };
  });

  // const colors = ["red", "brown", "green", "orange", "burgundy"];
  return {
    subscribe,
    // random: () => ref.put(colors[Math.floor(Math.random() * colors.length)]),
    // set: (newColor) => ref.put(newColor),
    newroom: () => ref.put(uuidv4().substr(0, 8)),
  };
}

export const rooms = customStore(gun.get("backro").get("rooms").put("test"));
