<script lang="ts">
	import { onMount } from 'svelte';

	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	let scrolled: boolean;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<header
	class="fixed z-10 w-full border-b bg-white px-4 transition-all duration-700 lg:px-12"
	class:py-4={!scrolled}
	class:lg:py-8={!scrolled}
	class:py-2={scrolled}
	class:lg:py-4={scrolled}
	class:border-transparent={!scrolled}
	class:border-gray-300={scrolled}
>
	<div class="mx-auto flex">
		<div class="flex-1"></div>
		<div class="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-4">
			<Button href="/" classes="p-2 hover:bg-gray-100">
				<Icon
					icon="home"
					weight={600}
					classes="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent sm:text-4xl"
				/>
			</Button>
			<Button onClick={() => {}} classes="p-2 hover:bg-gray-100">
				<Icon
					icon="menu"
					weight={600}
					classes="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent sm:text-4xl"
				/>
			</Button>
		</div>
	</div>
</header>

<div class="h-36 lg:h-64" />

<svelte:window on:scroll={() => onScroll()} />
