<script lang="ts">
	import { page } from '$app/stores';
	import { contact, isContactOpen, isMobileNavigationOpen } from '$lib/stores/store.elements';
	import { Briefcase, CircleUserRound, File, Home, LibraryBig, X } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { clickOutside } from '$lib/functions/functions.utilities';
	import Button from '$lib/components/buttons/button.svelte';
	import MobileButton from '$lib/components/buttons/button-navigation.svelte';

	let isOpen: boolean = false;

	export function open() {
		isOpen = true;
		isMobileNavigationOpen.set(true);
	}

	export function close() {
		isOpen = false;
		isMobileNavigationOpen.set(false);
	}

	function onClickOutside(_: any) {
		if (get(isContactOpen)) {
			return;
		}

		close();
	}
</script>

<div class="fixed z-30 transition-[visibility] duration-500 {isOpen ? 'visible' : 'invisible'}">
	<div
		aria-hidden="true"
		class="fixed inset-0 bg-black bg-opacity-65 transition-opacity {isOpen
			? 'opacity-100 duration-300 ease-out'
			: 'opacity-0 duration-200 ease-in'}"
	/>
	<nav
		class="fixed right-0 h-[100dvh] bg-gray-50 transition-[width] duration-500 {isOpen
			? 'w-[320px]'
			: 'w-0'}"
		on:clickoutside={onClickOutside}
		use:clickOutside
	>
		<div class="relative h-full w-[320px] p-4 sm:p-6">
			<div
				class="relative flex h-full flex-col transition-[margin] delay-100 duration-700 {isOpen
					? 'ml-0'
					: 'ml-4'}"
			>
				<div class="flex justify-end">
					<Button color="none" on:click={close}>
						<X />
					</Button>
				</div>
				<div class="mt-4 flex flex-1 flex-col gap-2">
					<MobileButton
						active={$page.url.pathname === '/'}
						href="/"
						icon={Home}
						on:click={close}
						text="Home"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/services')}
						href="/services"
						icon={Briefcase}
						on:click={close}
						text="Services"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/projects')}
						href="/projects"
						icon={LibraryBig}
						on:click={close}
						text="Projects"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/blog')}
						href="/blog"
						icon={File}
						on:click={close}
						text="Blog"
					/>
					<MobileButton
						active={$page.url.pathname.startsWith('/about')}
						href="/about"
						icon={CircleUserRound}
						on:click={close}
						text="About"
					/>
				</div>
				<Button
					classes="justify-center"
					color="darkBlue"
					on:click={() => $contact?.open()}
					text="Contact"
				/>
			</div>
		</div>
	</nav>
</div>
