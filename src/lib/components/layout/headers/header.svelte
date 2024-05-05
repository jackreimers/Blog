<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/layout/headers/header-navigation.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	let navigation: Navigation;
	let scrolled: boolean;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 1;
	}
</script>

<Navigation bind:this={navigation} />

<header
	class="fixed z-10 w-full border-b-2 bg-gray-50 transition-all duration-300
		{scrolled ? 'border-gray-200 py-2 sm:py-3 md:py-4' : 'border-transparent py-4 sm:py-6 md:py-7'}"
>
	<div class="mx-auto flex items-center px-5 sm:px-6 md:px-7 lg:max-w-5xl xl:max-w-6xl">
		<div>
			<a href="/" class="inline-block">
				<img
					src="/images/logos/logo.svg"
					alt="Logo"
					class="inline-block h-[2.875rem] sm:h-12"
				/>
			</a>
		</div>
		<div class="flex-1" />
		<div class="hidden md:block">
			<HorizontalStack>
				<Button href="/" active={$page.url.pathname === '/'}>
					<span slot="text">Home</span>
				</Button>
				<Button href="/blog" active={$page.url.pathname.startsWith('/blog')}>
					<span slot="text">Blog</span>
				</Button>
				<Button href="/about" active={$page.url.pathname.startsWith('/about')}>
					<span slot="text">About</span>
				</Button>
			</HorizontalStack>
		</div>
		<div class="flex items-center md:hidden">
			<button
				on:click={navigation.open}
				class="rounded p-2 transition-colors duration-200 mhover:hover:bg-gray-200"
			>
				<Icon icon="menu" classes="text-3xl text-blue-800" />
			</button>
		</div>
	</div>
</header>
<div class="h-20 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
