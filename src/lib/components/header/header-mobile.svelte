<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Blocker from '$lib/components/page/blocker.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import MobileButton from '$lib/components/buttons/button-mobile.svelte';

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

	function onScroll() {
		//Lock the window scroll location if the menu is open
		if (isOpen) window.scrollTo(scrollLeft, scrollTop);
	}
</script>

<Blocker bind:this={blocker} classes="z-20" on:click={close} />

<div
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-gray-100 transition-all duration-500 {isOpen
		? 'w-[320px]'
		: 'w-0'}"
>
	<div class="w-[320px]">
		<!-- TODO: Try get this to not affect inner layout width -->
		<div class="p-4 transition-spacing delay-100 duration-700 {isOpen ? 'ml-0' : 'ml-4'}">
			<div class="mb-8 flex h-[2.875rem] justify-end align-middle sm:h-12">
				<div>
					<Button color="Red" icon="close" iconWeight={500} on:click={close} />
				</div>
			</div>
			<VerticalStack>
				<MobileButton
					active={$page.url.pathname === '/'}
					href="/"
					icon="home"
					on:click={close}
					text="Home"
				/>
				<MobileButton
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
					href="/blog"
					icon="article"
					on:click={close}
					text="Blog"
				/>
				<MobileButton
					active={$page.url.pathname.startsWith('/about')}
					href="/about"
					icon="person"
					on:click={close}
					text="About"
				/>
			</VerticalStack>
		</div>
	</div>
</div>

<svelte:window on:scroll={() => onScroll()} />
