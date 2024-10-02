<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import SocialLinks from '$lib/components/social/links.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container classes="my-16 sm:my-20 md:my-36">
	<h1 class="text-5xl font-bold sm:text-6xl md:text-7xl">
		{title}
	</h1>
	<p class="mt-4 text-gray-700">{subtitle}</p>
	<SocialLinks classes="mt-4" />
</Container>
