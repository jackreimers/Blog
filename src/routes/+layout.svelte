<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';
	import { contact, navigation } from '$lib/stores/stores';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import ContactModal from '$lib/components/contact-modal/contact-modal.svelte';

	inject();

	let mobileNavigationMenu: Navigation;
	let contactModal: ContactModal;

	onMount(() => {
		navigation.set(mobileNavigationMenu);
		contact.set(contactModal);
	});
</script>

<Navigation bind:this={mobileNavigationMenu} />
<ContactModal bind:this={contactModal} />
<div class="h-dvh">
	<div class="flex min-h-dvh flex-col">
		<Header />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</div>
