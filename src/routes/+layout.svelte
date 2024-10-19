<script lang="ts">
	import '../app.css';
	import { contact, mobileNavigation } from '$lib/stores/store.elements';
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import Contact from '$lib/components/contact/contact.svelte';

	inject();

	let mobileNavigationMenu: Navigation;
	let contactModal: Contact;

	onMount(() => {
		mobileNavigation.set(mobileNavigationMenu);
		contact.set(contactModal);
	});
</script>

<Navigation bind:this={mobileNavigationMenu} />
<Contact bind:this={contactModal} />
<div class="h-dvh">
	<div class="flex min-h-dvh flex-col">
		<Header />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</div>
