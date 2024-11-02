import { writable } from 'svelte/store';
import MobileNavigation from '$lib/components/navigation/navigation.svelte';
import ContactModal from '$lib/components/contact-modal/contact-modal.svelte';

export const scrolled = writable<boolean>(false);

export const navigation = writable<MobileNavigation | null>(null);
export const contact = writable<ContactModal | null>(null);

export const isContactOpen = writable(false);
export const isNavigationOpen = writable(false);
