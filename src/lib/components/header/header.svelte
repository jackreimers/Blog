<script lang="ts">
	import { page } from '$app/stores';
	import { contact, navigation, scrolled } from '$lib/stores/stores';
	import { Menu, MessageCircleMore } from 'lucide-svelte';
	import Button from '$lib/components/buttons/basic/basic-button.svelte';

	function onScroll() {
		scrolled.set(window.scrollY > 1);
	}
</script>

<header class="z-10 w-full">
	<div class="mx-auto flex items-center justify-between p-4 sm:p-6 lg:max-w-5xl xl:max-w-7xl">
		<a aria-label="Home" class="inline-block" href="/">
			<img
				alt=""
				class="inline-block h-10 w-10 md:h-11 md:w-11"
				src="/content/icons/logo-dark-square.svg"
			/>
		</a>
		<nav>
			<div class="hidden gap-3 lg:flex">
				<Button active={$page.url.pathname === '/'} href="/" text="Home" />
				<Button active={$page.url.pathname.startsWith('/blog')} href="/blog" text="Blog" />
				<Button
					active={$page.url.pathname.startsWith('/projects')}
					href="/projects"
					text="Projects"
				/>
				<Button
					active={$page.url.pathname.startsWith('/tags')}
					href="/tags"
					on:click={() => sessionStorage.removeItem('previousPage')}
					text="Tags"
				/>
				<Button
					color="primary"
					icon={MessageCircleMore}
					on:click={() => $contact?.open()}
					text="Contact"
				/>
			</div>
			<div class="flex items-center lg:hidden">
				<button aria-label="Menu" class="p-2" on:click={() => $navigation?.open()}>
					<Menu class="h-6 w-6" />
				</button>
			</div>
		</nav>
	</div>
</header>
<svelte:window on:scroll={() => onScroll()} />
