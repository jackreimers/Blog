import { writable } from 'svelte/store';

export const previousPageSlug = writable<string | null>(null);
