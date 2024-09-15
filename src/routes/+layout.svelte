<script lang="ts">
	import '../app.css';
	import { contact, mobileNavigation } from '$lib/stores/store.elements';
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import MobileNavigation from '$lib/components/navigation/mobile-navigation.svelte';
	import ContactModal from '$lib/components/modal/contact-modal.svelte';

	inject();
	injectSpeedInsights();

	let mobileNavigationMenu: MobileNavigation;
	let contactModal: ContactModal;

	onMount(() => {
		mobileNavigation.set(mobileNavigationMenu);
		contact.set(contactModal);
	});
</script>

<MobileNavigation bind:this={mobileNavigationMenu} />
<ContactModal bind:this={contactModal} />

<div class="h-[100dvh]">
	<div class="flex min-h-[100dvh] flex-col">
		<Header />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</div>
