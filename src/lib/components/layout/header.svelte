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
	class="fixed w-full border-b bg-white px-10 duration-700"
	class:py-8={!scrolled}
	class:py-4={scrolled}
	class:border-transparent={!scrolled}
	class:border-gray-300={scrolled}
>
	<div class="mx-auto flex">
		<a href="/">
			<!--
            <p class='text-3xl font-semibold m-0 p-0 mb-1 text-gb'>Jack Reimers</p>
            <p class='text-gray-400'>Software Engineer</p>
            -->
		</a>
		<div class="flex-1"></div>
		<div class="flex items-center gap-4">
			<Button onClick={() => {}} classes="hover:bg-gray-100">
				<Icon icon="home" classes="text-gb p-2 text-4xl" />
			</Button>
			<!--
            <Button onClick={() => {}}>
                <Icon icon="dark_mode" classes="text-4xl text-gb" />
            </Button>
            -->
			<Button onClick={() => {}} classes="hover:bg-gray-100">
				<Icon icon="menu" classes="text-gb p-2 text-4xl" />
			</Button>
		</div>
	</div>
</header>

<div class="h-64"></div>

<svelte:window on:scroll={() => onScroll()} />
