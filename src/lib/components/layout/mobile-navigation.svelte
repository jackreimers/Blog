<script>
	import { page } from '$app/stores';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<div
	class="fixed right-0 top-0 z-20 h-full overflow-hidden bg-white transition-all duration-500 {open
		? 'w-[320px] lg:w-[500px]'
		: 'w-0'}"
>
	<div class="w-[320px] lg:w-[500px]">
		<div
			class="p-4 transition-spacing delay-100 duration-700 lg:px-12 lg:py-8 {open
				? 'ml-0'
				: 'ml-4'}"
		>
			<div class="mb-8 flex">
				<div class="flex-1" />
				<button on:click={closeMenu} class="rounded p-2 duration-500 hover:bg-gray-100">
					<Icon
						icon="close"
						classes="bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-3xl text-transparent sm:text-4xl"
					/>
				</button>
			</div>
			<div class="grid gap-2 px-4 sm:gap-4">
				<button
					on:click={() => {
						routeTo('/');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname === '/'}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Home</span>
				</button>

				<button
					on:click={() => {
						routeTo('/blog');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/blog')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Blog</span>
				</button>

				<button
					on:click={() => {
						routeTo('/projects');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/projects')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">Projects</span>
				</button>

				<button
					on:click={() => {
						routeTo('/about');
					}}
					class="group flex text-left font-semibold sm:text-2xl"
				>
					<span
						class:opacity-100={$page.url.pathname.startsWith('/about')}
						class="h-full w-[4px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					/>
					<span class="px-3.5 py-2">About</span>
				</button>
			</div>
		</div>
	</div>
</div>
