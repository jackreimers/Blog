<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import SocialLinks from '$lib/components/social/links.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container classes="my-24 sm:my-32 md:my-40 lg:my-48">
	<h1 class="my-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
		{title}
	</h1>
	<p class="mt-2 text-gray-700">{subtitle}</p>
	<SocialLinks classes="mt-4" />
</Container>
