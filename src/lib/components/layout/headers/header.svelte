<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/layout/headers/header-navigation.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';

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
	class="fixed z-10 w-full transition-all duration-300 bg-gray-50
		{scrolled ? 'py-2 shadow sm:py-3 md:py-4' : 'py-4 sm:py-6 md:py-7'}"
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
				<Button color="Gray" text="Home" href="/" active={$page.url.pathname === '/'} />
				<Button
					color="Gray"
					text="Blog"
					href="/blog"
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
				/>
				<!--
				<Button
					color="Header"
					text="Projects"
					href="/projects"
					active={$page.url.pathname.startsWith('/projects')}
				/>
				<Button
					color="Header"
					text="Services"
					href="/services"
					active={$page.url.pathname.startsWith('/services')}
				/>
				-->
				<Button
					color="Gray"
					text="About"
					href="/about"
					active={$page.url.pathname.startsWith('/about')}
				/>
				<!--
				<Button
					color="SolidBlue"
					text="Contact"
					href="/"
				/>
				-->
			</HorizontalStack>
		</div>
		<div class="flex items-center md:hidden">
			<Button on:click={navigation.open} color="Blue" icon="menu" iconWeight={500} />
		</div>
	</div>
</header>
<div class="h-20 bg-gray-50 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
