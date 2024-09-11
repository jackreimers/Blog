<script lang="ts">
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';

	export let href: string;
	export let title: string;
	export let description: string;
</script>

<a
	class="rounded-lg bg-white p-4 shadow transition-[transform,box-shadow] duration-300 md:p-5 mhover:hover:scale-[1.015] mhover:hover:shadow-lg"
	{href}
>
	<VerticalStack>
		<div>
			<h3 class="mb-1 text-lg font-semibold sm:text-xl">{title}</h3>
			<p class="text-gray-500">{description}</p>
		</div>
	</VerticalStack>
</a>
