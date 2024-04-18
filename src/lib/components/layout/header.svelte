<script lang="ts">
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/layout/navigation.svelte';
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
	class="fixed z-10 w-full border-b-2 bg-gray-100 px-8 transition-all duration-300
		{scrolled ? 'border-gray-200 py-2 sm:py-3 md:py-4' : 'border-transparent py-4 sm:py-6 md:py-7'}"
>
	<div class="mx-auto flex items-center">
		<div>
			<a href="/" class="inline-block">
				<img src="/images/logo.svg" alt="Logo" class="inline-block h-[2.875rem] sm:h-12" />
			</a>
		</div>
		<div class="flex-1" />
		<div class="hidden md:block">
			<div class="flex gap-2.5 sm:gap-3.5">
				<Button href="/">
					<span slot="text">Home</span>
				</Button>
				<Button href="/blog">
					<span slot="text">Blog</span>
				</Button>
				<Button href="/about">
					<span slot="text">About</span>
				</Button>
			</div>
		</div>
		<div class="flex items-center md:hidden">
			<button on:click={navigation.open} class="p-2 mhover:hover:bg-gray-100">
				<Icon
					icon="menu"
					classes="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent"
				/>
			</button>
		</div>
	</div>
</header>
<div class="h-20 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
