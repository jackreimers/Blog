<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/header/header-mobile.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
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
			<a class="inline-block" href="/">
				<img
					alt="Logo"
					class="inline-block h-[2.875rem] sm:h-12"
					src="/images/logo/logo-light.svg"
				/>
			</a>
		</div>
		<div class="flex-1" />
		<div class="hidden md:block">
			<HorizontalStack>
				<Button active={$page.url.pathname === '/'} color="Gray" href="/" text="Home" />
				<Button
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
					color="Gray"
					href="/blog"
					text="Blog"
				/>
				<!--
				<Button
					active={$page.url.pathname.startsWith('/projects')}
					color="Gray"
					href="/projects"
					text="Projects"
				/>
				-->
				<Button
					active={$page.url.pathname.startsWith('/about')}
					color="Gray"
					href="/about"
					text="About"
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
			<Button color="Blue" icon="menu" iconWeight={500} on:click={navigation.open} />
		</div>
	</div>
</header>
<div class="h-20 bg-gray-50 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
