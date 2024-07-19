<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { createEventDispatcher, onMount } from 'svelte';
	import Blocker from '$lib/components/interactivity/blocker.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import NavigationButton from '$lib/components/buttons/button-navigation.svelte';

	//TODO: Not sure this is needed at this stage
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

	function onScroll() {
		//Lock the window scroll location if the menu is open
		if (isOpen) window.scrollTo(scrollLeft, scrollTop);
	}
</script>

<Blocker bind:this={blocker} on:click={close} classes="z-20" />

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
					<Button on:click={close} color="Red" icon="close" iconWeight={500} />
				</div>
			</div>
			<VerticalStack>
				<NavigationButton
					on:click={close}
					href="/"
					text="Home"
					icon="home"
					active={$page.url.pathname === '/'}
				/>
				<NavigationButton
					on:click={close}
					href="/blog"
					text="Blog"
					icon="article"
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
				/>
				<NavigationButton
					on:click={close}
					href="/about"
					text="About"
					icon="person"
					active={$page.url.pathname.startsWith('/about')}
				/>
			</VerticalStack>
		</div>
	</div>
</div>

<svelte:window on:scroll={() => onScroll()} />
