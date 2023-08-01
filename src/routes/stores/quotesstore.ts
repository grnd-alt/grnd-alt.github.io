import { writable, type Writable } from "svelte/store";

export const quotes:Writable<string[]> = writable([]);