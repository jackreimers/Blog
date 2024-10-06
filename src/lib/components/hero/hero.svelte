<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import SocialLinks from '$lib/components/social/links.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container classes="my-16 sm:my-28 md:my-36 lg:my-40 xl:my-44">
	<h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
		{title}
	</h1>
	<p class="mt-2 text-gray-700">{subtitle}</p>
	<SocialLinks classes="mt-4" />
</Container>
