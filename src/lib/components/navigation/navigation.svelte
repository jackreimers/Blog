<script lang="ts">
	import { page } from '$app/stores';
	import { contact, isContactOpen, isMobileNavigationOpen } from '$lib/stores/store.elements';
	import { Briefcase, CircleUserRound, File, Home, X } from 'lucide-svelte';
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
		<div class="relative h-full w-[320px] p-6 sm:p-7">
			<div
				class="relative flex h-full flex-col transition-[margin] delay-100 duration-700 {isOpen
					? 'ml-0'
					: 'ml-4'}"
			>
				<div class="flex h-[2.875rem] justify-end align-middle sm:h-12">
					<Button color="none" on:click={close}>
						<X />
					</Button>
				</div>
				<div class="mt-7 flex flex-1 flex-col gap-2">
					<MobileButton
						active={$page.url.pathname === '/'}
						href="/"
						on:click={close}
						text="Home"
					>
						<Home />
					</MobileButton>
					<MobileButton
						active={$page.url.pathname.startsWith('/services')}
						href="/services"
						on:click={close}
						text="Services"
					>
						<Briefcase />
					</MobileButton>
					<!--
					<MobileButton
						active={$page.url.pathname.startsWith('/projects')}
						href="/projects"
						on:click={close}
						text="Projects"
					>
						<LibraryBig />
					</MobileButton>
					-->
					<MobileButton
						active={$page.url.pathname.startsWith('/blog')}
						href="/blog"
						on:click={close}
						text="Blog"
					>
						<File />
					</MobileButton>
					<MobileButton
						active={$page.url.pathname.startsWith('/about')}
						href="/about"
						on:click={close}
						text="About"
					>
						<CircleUserRound />
					</MobileButton>
				</div>
				<Button
					classes="justify-center"
					color="blue"
					on:click={() => $contact?.open()}
					text="Contact"
				/>
			</div>
		</div>
	</nav>
</div>
