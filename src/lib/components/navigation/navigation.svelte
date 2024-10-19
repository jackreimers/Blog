<script lang="ts">
	import { page } from '$app/stores';
	import { contact, isContactOpen, isMobileNavigationOpen } from '$lib/stores/stores';
	import { get } from 'svelte/store';
	import { clickOutside } from '$lib/functions/functions.utilities';
	import { X } from 'lucide-svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import NavigationButton from '$lib/components/buttons/navigation/navigation-button.svelte';
	import GitHub from '$lib/components/icons/github/github.svelte';
	import LinkedIn from '$lib/components/icons/linkedin/linkedin.svelte';

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
					<BasicButton color="none" icon={X} on:click={close} />
				</div>
				<div class="mt-4 flex flex-1 flex-col gap-2">
					<NavigationButton
						active={$page.url.pathname === '/'}
						href="/"
						on:click={close}
						text="Home"
					/>
					<NavigationButton
						active={$page.url.pathname.startsWith('/blog')}
						href="/blog"
						on:click={close}
						text="Blog"
					/>
					<NavigationButton
						active={$page.url.pathname.startsWith('/projects')}
						href="/projects"
						on:click={close}
						text="Projects"
					/>
					<button
						class="rounded-lg p-3.5 text-left font-semibold leading-none tracking-tight"
						on:click={$contact?.open}
					>
						Contact
					</button>
				</div>
				<div class="m-3.5 flex justify-end gap-3 text-gray-500 sm:mx-0">
					<a
						aria-label="LinkedIn"
						class="transition-colors duration-300 focus:text-gray-700 mhover:hover:text-gray-700"
						href="https://www.linkedin.com/in/jackreimers"
						target="_blank"
					>
						<LinkedIn class="h-6 w-6" />
					</a>
					<a
						aria-label="GitHub"
						class="transition-colors duration-300 focus:text-gray-700 mhover:hover:text-gray-700"
						href="https://github.com/jackreimers"
						target="_blank"
					>
						<GitHub class="h-6 w-6" />
					</a>
				</div>
				<BasicButton
					class="hidden justify-center"
					color="primary"
					on:click={() => $contact?.open()}
					text="Contact"
				/>
			</div>
		</div>
	</nav>
</div>
