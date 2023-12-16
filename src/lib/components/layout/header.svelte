<style>
	header {
		transition-property: margin, padding, border-color;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	let scrolled: boolean;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<header
	class="fixed z-10 w-full border-b bg-white px-4 duration-700 lg:px-12"
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
			<Button href="/" classes="hover:bg-gray-100">
				<Icon icon="home" weight={600} classes="text-gb p-2 text-3xl sm:text-4xl" />
			</Button>
			<!--
            <Button onClick={() => {}}>
                <Icon icon="dark_mode" classes="text-4xl text-gb" />
            </Button>
            -->
			<Button onClick={() => {}} classes="hover:bg-gray-100">
				<Icon icon="menu" weight={600} classes="text-gb p-2 text-3xl sm:text-4xl" />
			</Button>
		</div>
	</div>
</header>

<div class="h-36 lg:h-64" />

<svelte:window on:scroll={() => onScroll()} />
