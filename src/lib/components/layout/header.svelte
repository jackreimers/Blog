<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Blocker from '$lib/components/interactivity/blocker.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import { Direction } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';

	let blocker: Blocker;
	let open: boolean = false;
	let scrolled: boolean;
	let scrollTop: number = 0;
	let scrollLeft: number = 0;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 1;

		//Lock the window scroll location if the menu is open
		if (open) window.scrollTo(scrollLeft, scrollTop);
	}

	function openMenu() {
		open = true;
		blocker.set(true);

		//Store the window scroll location
		scrollTop = window.scrollY || window.document.documentElement.scrollTop;
		scrollLeft = window.scrollX || window.document.documentElement.scrollLeft;
	}

	function closeMenu() {
		open = false;
		blocker.set(false);
	}

	function routeTo(path: string) {
		closeMenu();
		goto(path);
	}
</script>

<header
	class="fixed z-10 w-full border-b-2 bg-gray-100 px-4 transition-all duration-300 sm:px-6 md:px-7
		{scrolled ? 'border-gray-200 py-2 sm:py-3 md:py-4' : 'border-transparent py-4 sm:py-6 md:py-7'}"
>
	<div class="mx-auto flex">
		<div class="flex-1" />
		<div class="hidden md:block">
			<Stack direction={Direction.Horizontal} classes="gap-2.5 sm:gap-3.5">
				<Button href="/">
					<span slot="text">Home</span>
				</Button>
				<Button href="/blog">
					<span slot="text">Blog</span>
				</Button>
				<Button href="/about">
					<span slot="text">About</span>
				</Button>
			</Stack>
		</div>
		<div class="flex items-center gap-0.5 sm:gap-1 md:hidden md:gap-2 lg:gap-4">
			<a href="/" class="p-2 hover:bg-gray-100">
				<Icon
					icon="home"
					classes="bg-gradient-to-br from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent"
				/>
			</a>
			<button on:click={openMenu} class="p-2 hover:bg-gray-100">
				<Icon
					icon="menu"
					classes="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent"
				/>
			</button>
		</div>
	</div>
</header>

<div class="h-20 sm:h-24 md:h-[6.625rem]" />
<Blocker bind:this={blocker} on:click={closeMenu} classes="z-20" />

<svelte:window on:scroll={() => onScroll()} />
