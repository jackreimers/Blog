<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Menu } from 'lucide-svelte';
	import MobileNavigation from '$lib/components/header/header-mobile.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Modal from '$lib/components/modal/modal-contact.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	let navigation: MobileNavigation;
	let modal: Modal;
	let scrolled: boolean;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 1;
	}
</script>

<MobileNavigation bind:this={navigation} on:contactClick={() => modal.open()} />
<Modal bind:this={modal} />
<header
	class="fixed z-10 w-full bg-gray-50 transition-all duration-300
		{scrolled ? 'py-2.5 shadow sm:py-3.5' : 'py-5 sm:py-7'}"
>
	<div class="mx-auto flex items-center px-5 sm:px-6 md:px-7 lg:max-w-5xl xl:max-w-6xl">
		<div>
			<a class="inline-block" href="/">
				<img
					alt="Logo"
					class="inline-block h-[2.875rem] sm:h-12"
					src="/images/logo/logo-light.svg"
				/>
			</a>
		</div>
		<div class="flex-1" />
		<div class="hidden md:block">
			<HorizontalStack>
				<Button active={$page.url.pathname === '/'} color="gray" href="/" text="Home" />
				<Button
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
					color="gray"
					href="/blog"
					text="Blog"
				/>
				<Button
					active={$page.url.pathname.startsWith('/about')}
					color="gray"
					href="/about"
					text="About"
				/>
				<Button color="blueSolid" on:click={() => modal.open()} text="Contact" />
			</HorizontalStack>
		</div>
		<div class="flex items-center md:hidden">
			<Button color="blue" on:click={navigation.open}>
				<Menu />
			</Button>
		</div>
	</div>
</header>
<div class="h-20 bg-gray-50 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
