<script lang="ts">
	import { page } from '$app/stores';
	import { CircleUserRound, Home, Notebook, X } from 'lucide-svelte';
	import Blocker from '$lib/components/modal/blocker.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import MobileButton from '$lib/components/buttons/button-mobile.svelte';

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
					<Button color="Red" on:click={close}>
						<X />
					</Button>
				</div>
			</div>
			<VerticalStack>
				<MobileButton
					active={$page.url.pathname === '/'}
					href="/"
					on:click={close}
					text="Home"
				>
					<Home />
				</MobileButton>
				<MobileButton
					active={$page.url.pathname.startsWith('/blog') ||
						$page.url.pathname.startsWith('/tags')}
					href="/blog"
					on:click={close}
					text="Blog"
				>
					<Notebook />
				</MobileButton>
				<MobileButton
					active={$page.url.pathname.startsWith('/about')}
					href="/about"
					on:click={close}
					text="About"
				>
					<CircleUserRound />
				</MobileButton>
			</VerticalStack>
		</div>
	</div>
</div>
