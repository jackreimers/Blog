<script lang="ts">
	import Detail from '$lib/components/text/detail.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import type { BlogPost } from '$lib/types/types';

	export let data: BlogPost;
</script>

<div class="flex flex-col gap-2 rounded border border-gray-300 p-10">
	<p class="font-medium">7 September 2023</p>
	<!-- TODO: Hover effects on links -->
	<Button href="/blog/test" classes="flex">
		<p class="text-4xl font-semibold">{data.metadata.title}</p>
	</Button>
	<div class="mb-8 flex gap-2">
		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p class="font-semibold">C#</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p class="font-semibold">.NET</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p class="font-semibold">Angular</p>
		</Button>

		<Button
			onClick={() => {}}
			classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-sky-700"
		>
			<p class="font-semibold">React</p>
		</Button>
	</div>
	<p class="mb-8">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	</p>
	<div class="flex">
		<Button href="/blog/test">
			<p class="font-bold">Read more &nbsp</p>
			<Icon icon="arrow_forward" />
		</Button>
	</div>
</div>
