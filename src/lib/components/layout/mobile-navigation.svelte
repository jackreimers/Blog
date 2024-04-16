<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { createEventDispatcher, onMount } from 'svelte';
	import Blocker from '$lib/components/interactivity/blocker.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	const dispatch = createEventDispatcher();

	let blocker: Blocker;
	let isOpen: boolean = false;
	let scrollTop: number = 0;
	let scrollLeft: number = 0;

	onMount(() => {
		onScroll();
	});

	export function open() {
		blocker.open();
		isOpen = true;

		//Store the window scroll location
		scrollTop = window.scrollY || window.document.documentElement.scrollTop;
		scrollLeft = window.scrollX || window.document.documentElement.scrollLeft;
	}

	export function close() {
		blocker.close();
		isOpen = false;
	}

	function navigate(path: string) {
		dispatch('navigate', path);
		goto(path);
		close();
	}

	function onScroll() {
		//Lock the window scroll location if the menu is open
		if (isOpen) window.scrollTo(scrollLeft, scrollTop);
	}
</script>

<Blocker bind:this={blocker} on:click={close} classes="z-20" />

<div
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-white transition-all duration-500 {isOpen
		? 'w-[320px] lg:w-[500px]'
		: 'w-0'}"
>
	<div class="w-[320px] lg:w-[500px]">
		<div
			class="p-4 transition-spacing delay-100 duration-700 lg:px-12 lg:py-8 {isOpen
				? 'ml-0'
				: 'ml-4'}"
		>
			<div class="mb-8 flex">
				<div class="flex-1" />
				<button on:click={close} class="rounded p-2 duration-500 hover:bg-gray-100">
					<Icon
						icon="close"
						classes="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-3xl text-transparent sm:text-4xl"
					/>
				</button>
			</div>
			<div class="grid gap-2 px-4 sm:gap-4">
				<button
					on:click={() => {
						navigate('/');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname === '/'}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Home</span>
				</button>

				<button
					on:click={() => {
						navigate('/blog');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/blog')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Blog</span>
				</button>

				<button
					on:click={() => {
						navigate('/projects');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/projects')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Projects</span>
				</button>

				<button
					on:click={() => {
						navigate('/about');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/about')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">About</span>
				</button>
			</div>
		</div>
	</div>
</div>

<svelte:window on:scroll={() => onScroll()} />
