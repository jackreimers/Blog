import { writable } from 'svelte/store';
import MobileNavigation from '$lib/components/navigation/mobile-navigation.svelte';
import ContactModal from '$lib/components/modal/contact-modal.svelte';

export const mobileNavigation = writable<MobileNavigation | null>(null);
export const contact = writable<ContactModal | null>(null);

export const isMobileNavigationOpen = writable(false);
export const isContactOpen = writable(false);
export const blockersOpen = writable(0);