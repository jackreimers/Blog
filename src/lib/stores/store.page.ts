import { writable } from 'svelte/store';

export const scrolled = writable<boolean>(false);
export const previousPageSlug = writable<string | null>(null);
