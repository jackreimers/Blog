<script lang="ts">
	import { page } from '$app/stores';
	import { contact, mobileNavigation } from '$lib/stores/store.elements';
	import { Menu } from 'lucide-svelte';
	import Button from '$lib/components/buttons/button.svelte';

	let scrolled: boolean;

	function onScroll() {
		scrolled = window.scrollY > 1;
	}
</script>

<header
	class="fixed z-10 w-full bg-gray-50 transition-all duration-500 {scrolled
		? 'py-3 shadow sm:py-4'
		: 'py-7 sm:py-9'}"
>
	<div
		class="mx-auto flex items-center justify-between px-4 sm:px-5 md:px-7 lg:max-w-5xl xl:max-w-7xl"
	>
		<a aria-label="Home" class="inline-block" href="/">
			<img
				alt=""
				class="inline-block h-[2.875rem] sm:h-12"
				src="/images/logo/logo-light.svg"
			/>
		</a>
		<nav>
			<div class="hidden gap-3 md:flex">
				<Button color="none" href="/" isActive={$page.url.pathname === '/'} text="Home" />
				<Button
					color="none"
					href="/services"
					isActive={$page.url.pathname.startsWith('/services')}
					text="Services"
				/>
				<Button
					color="none"
					href="/blog"
					isActive={$page.url.pathname.startsWith('/blog')}
					text="Blog"
				/>
				<Button
					color="none"
					href="/about"
					isActive={$page.url.pathname.startsWith('/about')}
					text="About"
				/>
				<Button color="blue" on:click={() => $contact?.open()} text="Contact" />
			</div>
			<div class="flex items-center md:hidden">
				<Button
					ariaLabel="Menu"
					color="lightblue"
					on:click={() => $mobileNavigation?.open()}
				>
					<Menu />
				</Button>
			</div>
		</nav>
	</div>
</header>
<div aria-hidden="true" class="h-20 bg-gray-50 sm:h-24 md:h-[6.625rem]" />

<svelte:window on:scroll={() => onScroll()} />
