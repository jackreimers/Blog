<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Blocker from '$lib/components/layout/blocker.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	let scrolled: boolean;
	let open: boolean = false;

	onMount(() => {
		onScroll();
	});

	function onScroll() {
		scrolled = window.scrollY > 50;
	}

	function routeTo(path: string) {
		open = false;
		goto(path);
	}

	let scrollTop = null;
	let scrollLeft = null;

	function disableScroll() {
		scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
		(scrollLeft = window.pageXOffset || window.document.documentElement.scrollLeft),
			(window.onscroll = function () {
				window.scrollTo(scrollLeft, scrollTop);
			});
	}

	function enableScroll() {
		window.onscroll = function () {};
	}

	$: if (open) {
		disableScroll();
	} else {
		enableScroll();
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
			<Button
				onClick={() => {
					open = true;
				}}
				classes="p-2 hover:bg-gray-100"
			>
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
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-white transition-all duration-500"
>
	<div class="w-[320px]">
		<div
			class:ml-0={open}
			class:ml-4={!open}
			class=" p-4 transition-spacing delay-100 duration-700"
		>
			<div class="mb-8 flex">
				<div class="flex-1" />
				<Button
					onClick={() => {
						open = false;
					}}
					classes="rounded p-2 duration-500 hover:bg-gray-100"
				>
					<Icon
						icon="close"
						weight={600}
						classes="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-3xl text-transparent sm:text-4xl"
					/>
				</Button>
			</div>
			<div class="flex flex-col gap-4 px-4">
				<Button
					onClick={() => {
						routeTo('/');
					}}
					classes="text-left text-2xl font-semibold"
					>Home
				</Button>
				<Button
					onClick={() => {
						routeTo('projects');
					}}
					classes="text-left text-2xl font-semibold"
					>Projects
				</Button>
				<Button
					onClick={() => {
						routeTo('about');
					}}
					classes="text-left text-2xl font-semibold"
					>About
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
