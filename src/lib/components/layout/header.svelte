<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Blocker from '$lib/components/layout/blocker.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	let open: boolean = false;

	let scrolled: boolean;
	let scrollTop: number = 0;
	let scrollLeft: number = 0;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 50;

		//Lock the window scroll location if the menu is open
		if (open) window.scrollTo(scrollLeft, scrollTop);
	}

	function openMenu() {
		open = true;

		//Store the window scroll location
		scrollTop = window.scrollY || window.document.documentElement.scrollTop;
		scrollLeft = window.scrollX || window.document.documentElement.scrollLeft;
	}

	function closeMenu() {
		open = false;
	}

	function routeTo(path: string) {
		closeMenu();
		goto(path);
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
		<div class="flex-1" />
		<div class="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-4">
			<Button href="/" classes="p-2 hover:bg-gray-100">
				<Icon
					icon="home"
					weight={600}
					classes="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text text-3xl text-transparent sm:text-4xl"
				/>
			</Button>
			<Button onClick={openMenu} classes="p-2 hover:bg-gray-100">
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

<div
	class:w-0={!open}
	class:w-[320px]={open}
	class:lg:w-[500px]={open}
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-white transition-all duration-500"
>
	<div class="w-[320px] lg:w-[500px]">
		<div
			class:ml-0={open}
			class:ml-4={!open}
			class="p-4 transition-spacing delay-100 duration-700 lg:px-12 lg:py-8"
		>
			<div class="mb-8 flex">
				<div class="flex-1" />
				<Button onClick={closeMenu} classes="rounded p-2 duration-500 hover:bg-gray-100">
					<Icon
						icon="close"
						weight={600}
						classes="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-3xl text-transparent sm:text-4xl"
					/>
				</Button>
			</div>
			<div class="grid gap-2 px-4 sm:gap-4">
				<Button
					onClick={() => {
						routeTo('/');
					}}
					classes="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname === '/'}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Home</span>
				</Button>

				<Button
					onClick={() => {
						routeTo('/blog');
					}}
					classes="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/blog/')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Blog</span>
				</Button>

				<Button
					onClick={() => {
						routeTo('/projects');
					}}
					classes="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/projects/')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Projects</span>
				</Button>

				<Button
					onClick={() => {
						routeTo('/about');
					}}
					classes="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname === '/about/'}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">About</span>
				</Button>
			</div>
		</div>
	</div>
</div>

<Blocker
	{open}
	onClick={() => {
		open = false;
	}}
/>

<svelte:window on:scroll={() => onScroll()} />
