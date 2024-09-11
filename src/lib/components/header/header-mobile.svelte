<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import { X } from 'lucide-svelte';
	import Blocker from '$lib/components/modal/blocker.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import MobileButton from '$lib/components/buttons/button-mobile.svelte';

	const dispatch = createEventDispatcher();

	let blocker: Blocker;
	let isOpen: boolean = false;

	export function open() {
		blocker.open();
		isOpen = true;
	}

	export function close() {
		blocker.close();
		isOpen = false;
	}

	function onContactClick() {
		dispatch('contactClick');
	}
</script>

<Blocker bind:this={blocker} classes="z-20" on:close={() => (isOpen = false)} />
<div
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-gray-50 transition-all duration-500 {isOpen
		? 'w-[320px]'
		: 'w-0'}"
>
	<div class="relative h-full w-[320px]">
		<div
			class="relative h-full p-6 transition-[margin] delay-100 duration-700 sm:p-8 {isOpen
				? 'ml-0'
				: 'ml-4'}"
		>
			<VerticalStack classes="h-full">
				<div class="mb-6 flex h-[2.875rem] justify-end align-middle sm:mb-8 sm:h-12">
					<div>
						<Button color="red" on:click={close}>
							<X />
						</Button>
					</div>
				</div>
				<VerticalStack classes="flex-1">
					<MobileButton
						active={$page.url.pathname === '/'}
						href="/"
						on:click={close}
						text="Home"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/blog')}
						href="/blog"
						on:click={close}
						text="Blog"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/about')}
						href="/about"
						on:click={close}
						text="About"
					/>
				</VerticalStack>
				<Button
					classes="justify-center"
					color="blueSolid"
					on:click={onContactClick}
					text="Contact"
				/>
			</VerticalStack>
		</div>
	</div>
</div>
