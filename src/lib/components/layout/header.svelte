<script lang="ts">
	import { onMount } from 'svelte';
	import { Home } from 'lucide-svelte';
	import { Menu } from 'lucide-svelte';

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
				<Home strokeWidth="3" />
			</Button>
			<!--
            <Button onClick={() => {}}>
                <Icon icon="dark_mode" classes="text-4xl text-gb" />
            </Button>
            -->
			<Button onClick={() => {}} classes="p-2 hover:bg-gray-100">
				<Menu strokeWidth="3" />
			</Button>
		</div>
	</div>
</header>

<div class="h-36 lg:h-64" />

<svelte:window on:scroll={() => onScroll()} />
